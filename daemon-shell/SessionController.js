import "SessionController.js" as SessionController

var modules = {
    greeter: '../daemon-greeter/main.qml',
    bar: '../daemon-bar/main.qml',
    lockscreen: '../daemon-lockscreen/main.qml',
    dashboard: '../daemon-dashboard/main.qml',
    controlcenter: '../daemon-controlcenter/main.qml',
    shell: '../daemon-shell/main.qml'
};

function getModuleSource(name) {
    if (!name || !modules[name]) {
        return modules.bar;
    }

    return modules[name];
}

function getModuleOrder(profileModules, sessionState) {
    const profileList = Array.isArray(profileModules) && profileModules.length > 0
        ? profileModules.filter(Boolean)
        : ['bar', 'dashboard'];

    const runtimeModules = SessionController.resolveRuntimeModules({ modules: profileList }, sessionState);
    return runtimeModules;
}

function getModuleSelection(profile, sessionState) {
    const selectedModules = profile && Array.isArray(profile.modules) && profile.modules.length > 0
        ? profile.modules
        : ['bar', 'dashboard'];

    return getModuleOrder(selectedModules, sessionState);
}
