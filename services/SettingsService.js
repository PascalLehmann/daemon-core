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
  return parseJson(readTextFile(filePath), fallback);
}

export const DEFAULT_SETTINGS = {
  animations: true,
  blur: true,
  showWeather: true,
  showClockSeconds: false,
  highContrast: false
};

export function loadSettings(settingsPath = 'config/defaults/settings.json') {
  const result = safeReadJson(settingsPath, DEFAULT_SETTINGS);

  return {
    animations: typeof result?.animations === 'boolean' ? result.animations : DEFAULT_SETTINGS.animations,
    blur: typeof result?.blur === 'boolean' ? result.blur : DEFAULT_SETTINGS.blur,
    showWeather: typeof result?.showWeather === 'boolean' ? result.showWeather : DEFAULT_SETTINGS.showWeather,
    showClockSeconds: typeof result?.showClockSeconds === 'boolean' ? result.showClockSeconds : DEFAULT_SETTINGS.showClockSeconds,
    highContrast: typeof result?.highContrast === 'boolean' ? result.highContrast : DEFAULT_SETTINGS.highContrast
  };
}

export function saveSettings(settings, settingsPath = 'config/defaults/settings.json') {
  const safeSettings = {
    animations: typeof settings?.animations === 'boolean' ? settings.animations : DEFAULT_SETTINGS.animations,
    blur: typeof settings?.blur === 'boolean' ? settings.blur : DEFAULT_SETTINGS.blur,
    showWeather: typeof settings?.showWeather === 'boolean' ? settings.showWeather : DEFAULT_SETTINGS.showWeather,
    showClockSeconds: typeof settings?.showClockSeconds === 'boolean' ? settings.showClockSeconds : DEFAULT_SETTINGS.showClockSeconds,
    highContrast: typeof settings?.highContrast === 'boolean' ? settings.highContrast : DEFAULT_SETTINGS.highContrast
  };

  const filePath = resolveProjectPath(settingsPath);

  if (fs) {
    fs.writeFileSync(filePath, JSON.stringify(safeSettings, null, 2) + '\n', 'utf8');
    return true;
  }

  return false;
}

export function validateSettings(settings) {
  if (!settings || typeof settings !== 'object') {
    return false;
  }

  return ['animations', 'blur', 'showWeather', 'showClockSeconds', 'highContrast'].every(
    key => typeof settings[key] === 'boolean' || typeof settings[key] === 'undefined'
  );
}
