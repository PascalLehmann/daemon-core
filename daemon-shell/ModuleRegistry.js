var modules = {
    greeter: '../daemon-greeter/main.qml',
    bar: '../daemon-bar/main.qml',
    lockscreen: '../daemon-lockscreen/main.qml',
    dashboard: '../daemon-dashboard/main.qml',
    controlcenter: '../daemon-controlcenter/main.qml',
    shell: 'main.qml'
};

function getModuleSource(name) {
    if (!name || !modules[name]) {
        return modules.bar;
    }

    return modules[name];
}

function getModuleOrder(profileModules) {
    if (!Array.isArray(profileModules) || profileModules.length === 0) {
        return ['bar', 'dashboard'];
    }

    return profileModules.filter(Boolean);
}
