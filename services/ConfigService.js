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

function parseJson(data, fallback) {
  if (data === null || data === undefined || data === '') {
    return fallback;
  }

  try {
    return JSON.parse(data);
  } catch (error) {
    return fallback;
  }
}

function safeReadJson(relativePath, fallback) {
  const filePath = resolveProjectPath(relativePath);
  const raw = readTextFile(filePath);
  return parseJson(raw, fallback);
}

export const DEFAULT_CONFIG = {
  version: '1.0.0',
  profile: 'desktop',
  theme: 'daemon-dark',
  locale: 'en_US'
};

export function loadConfig(configPath = 'config/defaults/config.json') {
  const result = safeReadJson(configPath, DEFAULT_CONFIG);

  if (
    typeof result?.version === 'string' &&
    typeof result?.profile === 'string' &&
    typeof result?.theme === 'string' &&
    typeof result?.locale === 'string'
  ) {
    return result;
  }

  return DEFAULT_CONFIG;
}

export function saveConfig(config, configPath = 'config/defaults/config.json') {
  const safeConfig = {
    version: String(config?.version || DEFAULT_CONFIG.version),
    profile: String(config?.profile || DEFAULT_CONFIG.profile),
    theme: String(config?.theme || DEFAULT_CONFIG.theme),
    locale: String(config?.locale || DEFAULT_CONFIG.locale)
  };

  const resolvedPath = resolveProjectPath(configPath);
  return writeTextFile(resolvedPath, JSON.stringify(safeConfig, null, 2) + '\n');
}

export function validateConfig(config) {
  return !!config &&
    typeof config.version === 'string' &&
    typeof config.profile === 'string' &&
    typeof config.theme === 'string' &&
    typeof config.locale === 'string';
}
