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
    const state = normalizeSessionState(sessionState, SESSION_STATES.BOOT);

    if (state === SESSION_STATES.GREETER) {
        return ['greeter'];
    }

    if (state === SESSION_STATES.LOCKSCREEN) {
        return ['lockscreen'];
    }

    if (state === SESSION_STATES.SESSION) {
        if (Array.isArray(profile?.modules) && profile.modules.length > 0) {
            return profile.modules.filter(Boolean);
        }

        return ['bar', 'dashboard'];
    }

    if (Array.isArray(profile?.modules) && profile.modules.length > 0) {
        return profile.modules.filter(Boolean);
    }

    return ['bar'];
}

export function buildSessionContext(profile, state) {
    const normalizedProfile = profile || { name: 'desktop', modules: ['bar', 'dashboard'], developerMode: false };
    const normalizedState = normalizeSessionState(state, getDefaultSessionState(normalizedProfile));

    return {
        profile: normalizedProfile,
        state: normalizedState,
        modules: resolveRuntimeModules(normalizedProfile, normalizedState)
    };
}
