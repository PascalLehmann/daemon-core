import QtQuick
import QtQuick.Controls
import "../daemon-shared/Style.qml" as SharedStyle
import "../daemon-theme/ThemeManager.qml" as ThemeManager
import "../services/ConfigService.js" as ConfigService
import "../services/ProfileService.js" as ProfileService
import "../services/ThemeService.js" as ThemeService
import "../ipc/hyprland/HyprlandIPC.js" as HyprlandIPC
import "../ipc/greetd/GreetdIPC.js" as GreetdIPC
import "ModuleRegistry.js" as ModuleRegistry
import "SessionController.js" as SessionController

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
    property var activeModules: ModuleRegistry.getModuleSelection(profile, sessionState)
    property var runtimeStatus: ({
        workspace: 1,
        userList: [],
        ready: false
    })

    function applyTheme(themeId) {
        const palette = ThemeService.resolveTheme(themeId || config.theme || profile.theme || 'daemon-dark');
        style.apply(palette.id || 'daemon-dark');
        themeManager.switchTheme(palette.id || 'daemon-dark');
        config.theme = palette.id || 'daemon-dark';
        return palette;
    }

    function applySessionContext(nextState) {
        sessionState = SessionController.normalizeSessionState(nextState, sessionState);
        activeModules = ModuleRegistry.getModuleSelection(profile, sessionState);
        runtimeStatus.ready = true;
        return activeModules;
    }

    function refreshRuntimeStatus() {
        const workspace = HyprlandIPC.getActiveWorkspace();
        const users = GreetdIPC.listUsers();

        runtimeStatus.workspace = workspace && workspace.id ? workspace.id : 1;
        runtimeStatus.userList = users || [];
        runtimeStatus.ready = true;
    }

    Component.onCompleted: {
        applyTheme(config.theme || profile.theme || 'daemon-dark');
        refreshRuntimeStatus();
        applySessionContext(sessionState);
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
            text: 'Theme: ' + (config.theme || profile.theme || 'daemon-dark') + ' | Session: ' + sessionState + ' | WS: ' + runtimeStatus.workspace
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
            width: 280
            height: parent.height
            color: style.surface
            border.color: style.border
            border.width: 1

            Column {
                anchors.fill: parent
                anchors.margins: style.spacingMd
                spacing: style.spacingMd

                Text {
                    text: 'Profile: ' + profile.name
                    color: style.text
                    font.pixelSize: style.fontSizeTitle
                    font.bold: true
                }

                Text {
                    text: 'Runtime modules: ' + activeModules.join(', ')
                    color: style.textSecondary
                    font.pixelSize: style.fontSizeBody
                    wrapMode: Text.WordWrap
                }

                Text {
                    text: 'Session state: ' + sessionState
                    color: style.textSecondary
                    font.pixelSize: style.fontSizeBody
                }

                Text {
                    text: 'Users: ' + runtimeStatus.userList.join(', ')
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
                source: ModuleRegistry.getModuleSource(activeModules[0])
                onStatusChanged: {
                    if (moduleLoader.status === Loader.Error) {
                        moduleLoader.source = ModuleRegistry.getModuleSource('bar');
                    }
                }
            }
        }
    }
}
