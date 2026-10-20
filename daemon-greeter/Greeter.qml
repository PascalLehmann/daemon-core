import QtQuick
import QtQuick.Controls
import "../daemon-theme/ThemeTokens.qml"

Rectangle {
    id: root
    width: 1920
    height: 40
    color: tokens.surface

    ThemeTokens {
        id: tokens
    }

    property var config: ConfigService.loadConfig()
    property var state: StateService.loadState()

    Row {
        anchors.fill: parent
        anchors.leftMargin: tokens.spacingMd
        anchors.rightMargin: tokens.spacingMd
        spacing: tokens.spacingSm

        Text {
            text: "Daemon-Core"
            color: tokens.text
            font.pixelSize: tokens.fontSizeBody
            font.bold: true
            anchors.verticalCenter: parent.verticalCenter
        }

        Text {
            text: "Workspace " + state.lastWorkspace
            color: tokens.textSecondary
            font.pixelSize: 12
            anchors.verticalCenter: parent.verticalCenter
        }

        Item { Layout.fillWidth: true }

        Text {
            text: "Theme: " + config.theme
            color: tokens.textSecondary
            font.pixelSize: 12
            anchors.verticalCenter: parent.verticalCenter
        }
    }
}
