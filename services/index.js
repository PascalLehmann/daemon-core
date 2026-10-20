export function defaultConfig() {
  return {
    version: '1.0.0',
    profile: 'desktop',
    theme: 'daemon-dark',
    locale: 'en_US'
  };
}

export function defaultProfile() {
  return {
    name: 'desktop',
    theme: 'daemon-dark',
    developerMode: false,
    modules: ['bar', 'dashboard', 'notifications', 'controlcenter']
  };
}

export function defaultSettings() {
  return {
    animations: true,
    blur: true,
    showWeather: true,
    showClockSeconds: false,
    highContrast: false
  };
}

export function defaultState() {
  return {
    lastWorkspace: 1,
    lastTheme: 'daemon-dark',
    lastProfile: 'desktop',
    lastLocale: 'en_US'
  };
}
