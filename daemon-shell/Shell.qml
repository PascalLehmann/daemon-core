import QtQuick
import QtQuick.Controls
import "../daemon-shared/Style.qml" as SharedStyle
import "../daemon-theme/ThemeManager.qml" as ThemeManager
import "../services/ConfigService.js" as ConfigService
import "../services/ProfileService.js" as ProfileService
import "../services/ThemeService.js" as ThemeService
import "../ipc/hyprland/HyprlandIPC.js" as HyprlandIPC
import "../ipc/greetd/GreetdIPC.js" as GreetdIPC
import "SessionController.js" as SessionController
import "RuntimeBridge.js" as RuntimeBridge

Rectangle {
    id: shell
    width: 1920
    height: 1080
    color: style.background

    property var config: ConfigService.loadConfig()
    property var profile: ProfileService.loadProfile()
    property var style: SharedStyle.Style {}
    property var themeManager: ThemeManager.ThemeManager {}
    property string sessionState: SessionController.getDefaultSessionState(profile)
    property var activeModules: ['bar', 'dashboard']
    property var runtime: ({
        workspace: 1,
        users: [],
        ready: false,
        event: 'boot'
    })

    function syncRuntime() {
        const workspace = HyprlandIPC.getActiveWorkspace();
        const users = GreetdIPC.listUsers();
        const nextRuntime = RuntimeBridge.evaluateRuntimeState(
            profile,
            sessionState,
            config.theme || profile.theme || 'daemon-dark',
            workspace && workspace.id ? workspace.id : 1,
            users || []
        );

        runtime = nextRuntime;
        activeModules = nextRuntime.modules || ['bar'];
        runtime.ready = true;
    }

    function applyTheme(themeId) {
        const palette = ThemeService.resolveTheme(themeId || config.theme || profile.theme || 'daemon-dark');
        style.apply(palette.id || 'daemon-dark');
        themeManager.switchTheme(palette.id || 'daemon-dark');
        config.theme = palette.id || 'daemon-dark';
        return palette;
    }

    function transitionTo(nextState) {
        const transition = RuntimeBridge.transitionSessionState(sessionState, nextState);
        if (transition.changed) {
            sessionState = transition.next;
        }

        syncRuntime();
        return transition;
    }

    Component.onCompleted: {
        applyTheme(config.theme || profile.theme || 'daemon-dark');
        syncRuntime();
    }

    Rectangle {
        id: backgroundLayer
        anchors.fill: parent
        color: style.background
        opacity: 0.96
    }

    Rectangle {
        id: topBar
        width: parent.width
        height: 42
        color: style.surface
        z: 10

        Text {
            anchors.left: parent.left
            anchors.leftMargin: style.spacingMd
            anchors.verticalCenter: parent.verticalCenter
            text: 'Daemon-Core'
            color: style.text
            font.pixelSize: style.fontSizeBody
            font.bold: true
        }

        Text {
            anchors.right: parent.right
            anchors.rightMargin: style.spacingMd
            anchors.verticalCenter: parent.verticalCenter
            text: 'Theme: ' + (config.theme || profile.theme || 'daemon-dark') + ' | Session: ' + sessionState + ' | WS: ' + runtime.workspace
            color: style.textSecondary
            font.pixelSize: style.fontSizeCaption
        }
    }

    Rectangle {
        id: contentShell
        anchors.top: topBar.bottom
        anchors.left: parent.left
        anchors.right: parent.right
        anchors.bottom: parent.bottom
        color: style.surfaceAlt
        z: 1

        Rectangle {
            id: leftRail
            width: 300
            height: parent.height
            color: style.surface
            border.color: style.border
            border.width: 1

            Column {
                anchors.fill: parent
                anchors.margins: style.spacingMd
                spacing: style.spacingMd

                Text {
                    text: 'Session: ' + sessionState
                    color: style.text
                    font.pixelSize: style.fontSizeTitle
                    font.bold: true
                }

                Text {
                    text: 'Active modules: ' + activeModules.join(', ')
                    color: style.textSecondary
                    font.pixelSize: style.fontSizeBody
                    wrapMode: Text.WordWrap
                }

                Text {
                    text: 'Workspace: ' + runtime.workspace
                    color: style.textSecondary
                    font.pixelSize: style.fontSizeBody
                }

                Text {
                    text: 'Users: ' + runtime.users.join(', ')
                    color: style.textSecondary
                    font.pixelSize: style.fontSizeBody
                    wrapMode: Text.WordWrap
                }
            }
        }

        Rectangle {
            id: dynamicContent
            anchors.left: leftRail.right
            anchors.top: parent.top
            anchors.right: parent.right
            anchors.bottom: parent.bottom
            color: style.background

            Loader {
                id: moduleLoader
                anchors.fill: parent
                source: '../daemon-bar/main.qml'
                Component.onCompleted: {
                    if (activeModules.length > 0) {
                        if (activeModules[0] === 'greeter') {
                            moduleLoader.source = '../daemon-greeter/main.qml';
                        } else if (activeModules[0] === 'lockscreen') {
                            moduleLoader.source = '../daemon-lockscreen/main.qml';
                        } else if (activeModules[0] === 'dashboard') {
                            moduleLoader.source = '../daemon-dashboard/main.qml';
                        } else if (activeModules[0] === 'controlcenter') {
                            moduleLoader.source = '../daemon-controlcenter/main.qml';
                        } else if (activeModules[0] === 'bar') {
                            moduleLoader.source = '../daemon-bar/main.qml';
                        }
                    }
                }
            }
        }
    }
}
