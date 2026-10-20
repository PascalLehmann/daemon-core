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

export const DEFAULT_STATE = {
  lastWorkspace: 1,
  lastTheme: 'daemon-dark',
  lastProfile: 'desktop',
  lastLocale: 'en_US'
};

export function loadState(statePath = 'config/defaults/state.json') {
  const filePath = resolveProjectPath(statePath);
  const raw = readTextFile(filePath);
  const result = parseJson(raw, DEFAULT_STATE);

  if (
    typeof result?.lastWorkspace === 'number' &&
    result.lastWorkspace >= 1 &&
    typeof result?.lastTheme === 'string' &&
    typeof result?.lastProfile === 'string' &&
    typeof result?.lastLocale === 'string'
  ) {
    return result;
  }

  return DEFAULT_STATE;
}

export function saveState(state, statePath = 'config/defaults/state.json') {
  const safeState = {
    lastWorkspace: Number(state?.lastWorkspace || DEFAULT_STATE.lastWorkspace),
    lastTheme: String(state?.lastTheme || DEFAULT_STATE.lastTheme),
    lastProfile: String(state?.lastProfile || DEFAULT_STATE.lastProfile),
    lastLocale: String(state?.lastLocale || DEFAULT_STATE.lastLocale)
  };

  const filePath = resolveProjectPath(statePath);

  if (fs) {
    fs.writeFileSync(filePath, JSON.stringify(safeState, null, 2) + '\n', 'utf8');
    return true;
  }

  return false;
}

export function validateState(state) {
  return !!state &&
    typeof state.lastWorkspace === 'number' &&
    state.lastWorkspace >= 1 &&
    typeof state.lastTheme === 'string' &&
    typeof state.lastProfile === 'string' &&
    typeof state.lastLocale === 'string';
}
