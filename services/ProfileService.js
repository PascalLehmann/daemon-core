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

export const DEFAULT_PROFILE = {
  name: 'desktop',
  theme: 'daemon-dark',
  developerMode: false,
  modules: ['bar', 'dashboard', 'notifications', 'controlcenter']
};

export function loadProfile(profilePath = 'config/defaults/profile.json') {
  const filePath = resolveProjectPath(profilePath);
  const raw = readTextFile(filePath);
  const result = parseJson(raw, DEFAULT_PROFILE);

  if (
    typeof result?.name === 'string' &&
    typeof result?.theme === 'string' &&
    Array.isArray(result?.modules) &&
    result.modules.length > 0
  ) {
    return result;
  }

  return DEFAULT_PROFILE;
}

export function saveProfile(profile, profilePath = 'config/defaults/profile.json') {
  const safeProfile = {
    name: String(profile?.name || DEFAULT_PROFILE.name),
    theme: String(profile?.theme || DEFAULT_PROFILE.theme),
    developerMode: !!profile?.developerMode,
    modules: Array.isArray(profile?.modules) && profile.modules.length > 0
      ? profile.modules.filter((item) => typeof item === 'string')
      : DEFAULT_PROFILE.modules
  };

  const filePath = resolveProjectPath(profilePath);

  if (fs) {
    fs.writeFileSync(filePath, JSON.stringify(safeProfile, null, 2) + '\n', 'utf8');
    return true;
  }

  return false;
}

export function validateProfile(profile) {
  return !!profile &&
    typeof profile.name === 'string' &&
    typeof profile.theme === 'string' &&
    Array.isArray(profile.modules) &&
    profile.modules.length > 0;
}
