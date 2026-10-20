const fs = (() => {
  try {
    return require('fs');
  } catch (error) {
    return null;
  }
})();

const pathModule = (() => {
  try {
    return require('path');
  } catch (error) {
    return null;
  }
})();

function resolveProjectPath(relativePath) {
  if (pathModule && __dirname) {
    return pathModule.resolve(__dirname, '..', relativePath);
  }

  if (typeof Qt !== 'undefined' && typeof Qt.resolvedUrl === 'function') {
    return Qt.resolvedUrl('../' + relativePath);
  }

  return relativePath;
}

function readTextFile(filePath) {
  if (fs) {
    return fs.readFileSync(filePath, 'utf8');
  }

  if (typeof XMLHttpRequest !== 'undefined') {
    const request = new XMLHttpRequest();
    request.open('GET', filePath, false);
    request.send(null);

    if (request.status >= 200 && request.status < 300) {
      return request.responseText;
    }
  }

  return null;
}

function parseJson(raw, fallback) {
  if (raw === null || raw === undefined || raw === '') {
    return fallback;
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    return fallback;
  }
}

export const DEFAULT_THEME_REFERENCE = {
  theme: 'daemon-dark'
};

export function loadThemeReference(themePath = 'config/defaults/theme.json') {
  const filePath = resolveProjectPath(themePath);
  const raw = readTextFile(filePath);
  const result = parseJson(raw, DEFAULT_THEME_REFERENCE);

  if (typeof result?.theme === 'string') {
    return { theme: result.theme };
  }

  return DEFAULT_THEME_REFERENCE;
}

export function saveThemeReference(themeRef, themePath = 'config/defaults/theme.json') {
  const safeThemeRef = {
    theme: String(themeRef?.theme || DEFAULT_THEME_REFERENCE.theme)
  };

  const filePath = resolveProjectPath(themePath);

  if (fs) {
    fs.writeFileSync(filePath, JSON.stringify(safeThemeRef, null, 2) + '\n', 'utf8');
    return true;
  }

  return false;
}

export function loadThemeManifest(themeId = 'daemon-dark', manifestPath = 'themes') {
  const filePath = resolveProjectPath(`${manifestPath}/${themeId}/theme.json`);
  const raw = readTextFile(filePath);
  const result = parseJson(raw, null);

  if (!result || typeof result.id !== 'string' || typeof result.name !== 'string') {
    return null;
  }

  return result;
}

export function validateThemeReference(themeRef) {
  return !!themeRef && typeof themeRef.theme === 'string';
}
