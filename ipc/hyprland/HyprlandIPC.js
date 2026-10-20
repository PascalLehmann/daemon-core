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

function writeTextFile(filePath, content) {
  if (fs) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }

  return false;
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

export const THEME_MAP = {
  'daemon-dark': {
    id: 'daemon-dark',
    name: 'Daemon Dark',
    background: '#020817',
    surface: '#0f172a',
    surfaceAlt: '#1e293b',
    text: '#f8fafc',
    textSecondary: '#cbd5e1',
    muted: '#94a3b8',
    accent: '#7c3aed',
    accentSoft: '#a78bfa',
    border: '#334155'
  },
  'daemon-light': {
    id: 'daemon-light',
    name: 'Daemon Light',
    background: '#f8fafc',
    surface: '#e2e8f0',
    surfaceAlt: '#cbd5e1',
    text: '#0f172a',
    textSecondary: '#334155',
    muted: '#64748b',
    accent: '#7c3aed',
    accentSoft: '#8b5cf6',
    border: '#94a3b8'
  }
};

export function getThemePalette(themeId = 'daemon-dark') {
  return THEME_MAP[themeId] || THEME_MAP['daemon-dark'];
}

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
  return writeTextFile(filePath, JSON.stringify(safeThemeRef, null, 2) + '\n');
}

export function resolveTheme(themeId = 'daemon-dark') {
  const normalizedThemeId = THEME_MAP[themeId] ? themeId : 'daemon-dark';
  return getThemePalette(normalizedThemeId);
}

export function switchTheme(themeId = 'daemon-dark', themePath = 'config/defaults/theme.json') {
  const palette = resolveTheme(themeId);
  const themeRef = { theme: palette.id };
  saveThemeReference(themeRef, themePath);
  return palette;
}

export function loadThemeManifest(themeId = 'daemon-dark', manifestPath = 'themes') {
  const filePath = resolveProjectPath(`${manifestPath}/${themeId}/theme.json`);
  const raw = readTextFile(filePath);
  const result = parseJson(raw, null);

  if (!result || typeof result.id !== 'string' || typeof result.name !== 'string') {
    return getThemePalette(themeId);
  }

  return result;
}

export function validateThemeReference(themeRef) {
  return !!themeRef && typeof themeRef.theme === 'string';
}
