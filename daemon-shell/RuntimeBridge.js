export const RUNTIME_EVENTS = {
    STATE_CHANGED: 'state_changed',
    THEME_CHANGED: 'theme_changed',
    WORKSPACE_CHANGED: 'workspace_changed',
    USER_CHANGED: 'user_changed'
};

export function createRuntimeSnapshot(profile, sessionState, themeId, workspace, userList) {
    const safeProfile = profile || { name: 'desktop', modules: ['bar', 'dashboard'], developerMode: false };
    const safeSessionState = sessionState || 'greeter';
    const safeTheme = themeId || 'daemon-dark';
    const safeWorkspace = Number.isFinite(workspace) ? workspace : 1;
    const safeUsers = Array.isArray(userList) ? userList.filter(Boolean) : [];

    return {
        profile: safeProfile,
        sessionState: safeSessionState,
        themeId: safeTheme,
        workspace: safeWorkspace,
        users: safeUsers,
        ready: true,
        event: RUNTIME_EVENTS.STATE_CHANGED
    };
}

export function evaluateRuntimeState(profile, sessionState, themeId, workspace, userList) {
    const snapshot = createRuntimeSnapshot(profile, sessionState, themeId, workspace, userList);

    if (snapshot.sessionState === 'greeter') {
        snapshot.modules = ['greeter'];
        snapshot.event = RUNTIME_EVENTS.STATE_CHANGED;
    } else if (snapshot.sessionState === 'lockscreen') {
        snapshot.modules = ['lockscreen'];
        snapshot.event = RUNTIME_EVENTS.STATE_CHANGED;
    } else if (snapshot.sessionState === 'session') {
        snapshot.modules = Array.isArray(profile?.modules) && profile.modules.length > 0
            ? profile.modules.filter(Boolean)
            : ['bar', 'dashboard'];
        snapshot.event = RUNTIME_EVENTS.STATE_CHANGED;
    } else {
        snapshot.modules = ['bar'];
        snapshot.event = RUNTIME_EVENTS.BOOT;
    }

    return snapshot;
}

export function transitionSessionState(currentState, nextState) {
    const validStates = ['boot', 'greeter', 'lockscreen', 'session'];
    const safeCurrent = validStates.includes(currentState) ? currentState : 'boot';
    const safeNext = validStates.includes(nextState) ? nextState : safeCurrent;

    return {
        current: safeCurrent,
        next: safeNext,
        changed: safeCurrent !== safeNext,
        event: RUNTIME_EVENTS.STATE_CHANGED
    };
}

export function syncTheme(themeId, config, profile) {
    const targetThemeId = themeId || config?.theme || profile?.theme || 'daemon-dark';
    return {
        themeId: targetThemeId,
        changed: true,
        event: RUNTIME_EVENTS.THEME_CHANGED
    };
}

export function syncWorkspace(workspaceId) {
    return {
        workspace: Number.isFinite(workspaceId) ? workspaceId : 1,
        event: RUNTIME_EVENTS.WORKSPACE_CHANGED
    };
}
