import QtQuick
import QtQuick.Controls
import "../daemon-shared/Style.qml" as SharedStyle
import "../daemon-theme/ThemeManager.qml" as ThemeManager
import "../services/ConfigService.js" as ConfigService
import "../services/StateService.js" as StateService
import "../services/ThemeService.js" as ThemeService

Rectangle {
    id: shell
    width: 1920
    height: 1080
    color: style.background

    property var config: ConfigService.loadConfig()
    property var state: StateService.loadState()
    property var themeManager: ThemeManager.ThemeManager {}
    property var style: SharedStyle.Style {}

    Component.onCompleted: {
        const theme = ThemeService.resolveTheme(config.theme || "daemon-dark");
        style.apply(theme.id || "daemon-dark");
        themeManager.switchTheme(theme.id || "daemon-dark");
        state.lastTheme = theme.id || "daemon-dark";
    }

    Rectangle {
        id: backgroundLayer
        anchors.fill: parent
        color: style.background
        opacity: 0.94
    }

    Rectangle {
        id: topBar
        width: parent.width
        height: 42
        color: style.surface

        Text {
            anchors.left: parent.left
            anchors.leftMargin: style.spacingMd
            anchors.verticalCenter: parent.verticalCenter
            text: "Daemon-Core"
            color: style.text
            font.pixelSize: style.fontSizeBody
            font.bold: true
        }

        Text {
            anchors.right: parent.right
            anchors.rightMargin: style.spacingMd
            anchors.verticalCenter: parent.verticalCenter
            text: "Theme: " + config.theme
            color: style.textSecondary
            font.pixelSize: style.fontSizeCaption
        }
    }

    Rectangle {
        id: contentPanel
        anchors.top: topBar.bottom
        anchors.left: parent.left
        anchors.right: parent.right
        anchors.bottom: parent.bottom
        color: style.surfaceAlt

        Rectangle {
            id: leftPanel
            width: 320
            height: parent.height
            color: style.surface
            border.color: style.border
            border.width: 1

            Column {
                anchors.fill: parent
                anchors.margins: style.spacingMd
                spacing: style.spacingMd

                Text {
                    text: "Workspace " + state.lastWorkspace
                    color: style.text
                    font.pixelSize: style.fontSizeTitle
                    font.bold: true
                }

                Text {
                    text: "Profile: " + config.profile
                    color: style.textSecondary
                    font.pixelSize: style.fontSizeBody
                }

                Text {
                    text: "Session state: active"
                    color: style.textSecondary
                    font.pixelSize: style.fontSizeBody
                }
            }
        }

        Rectangle {
            id: centerPanel
            anchors.left: leftPanel.right
            anchors.right: parent.right
            anchors.top: parent.top
            anchors.bottom: parent.bottom
            color: style.background

            Text {
                anchors.centerIn: parent
                text: "Primary shell content area"
                color: style.textSecondary
                font.pixelSize: style.fontSizeHeading
            }
        }
    }
}
