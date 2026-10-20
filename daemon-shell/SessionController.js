export const SESSION_STATES = {
    BOOT: 'boot',
    GREETER: 'greeter',
    LOCKSCREEN: 'lockscreen',
    SESSION: 'session'
};

export function normalizeSessionState(value, fallback = SESSION_STATES.BOOT) {
    if (!value) {
        return fallback;
    }

    const allowed = Object.values(SESSION_STATES);
    return allowed.includes(value) ? value : fallback;
}

export function getDefaultSessionState(profile) {
    if (!profile) {
        return SESSION_STATES.GREETER;
    }

    if (profile.developerMode) {
        return SESSION_STATES.SESSION;
    }

    return SESSION_STATES.GREETER;
}

export function resolveRuntimeModules(profile, sessionState) {
    const defaultModules = ['bar', 'dashboard'];
    const state = normalizeSessionState(sessionState, SESSION_STATES.BOOT);

    if (state === SESSION_STATES.GREETER) {
        return ['greeter'];
    }

    if (state === SESSION_STATES.LOCKSCREEN) {
        return ['lockscreen'];
    }

    if (Array.isArray(profile?.modules) && profile.modules.length > 0) {
        return profile.modules.filter(Boolean);
    }

    if (state === SESSION_STATES.SESSION) {
        return defaultModules;
    }

    return ['bar'];
}
