import QtQuick
import QtQuick.Controls
import "../daemon-theme/ThemeTokens.qml"
import "../services/ConfigService.js" as ConfigService
import "../services/StateService.js" as StateService

Rectangle {
    id: root
    width: 800
    height: 600
    color: tokens.background

    ThemeTokens {
        id: tokens
    }

    property var config: ConfigService.loadConfig()
    property var state: StateService.loadState()

    Column {
        anchors.centerIn: parent
        spacing: tokens.spacingLg

        Text {
            text: "Daemon Greeter"
            color: tokens.text
            font.pixelSize: tokens.fontSizeHeading
            font.bold: true
        }

        Text {
            text: "Profile: " + config.profile
            color: tokens.textSecondary
            font.pixelSize: tokens.fontSizeBody
        }

        Text {
            text: "Last workspace: " + state.lastWorkspace
            color: tokens.textSecondary
            font.pixelSize: tokens.fontSizeBody
        }

        Rectangle {
            width: 320
            height: 42
            radius: tokens.radiusMd
            color: tokens.surfaceAlt

            TextInput {
                anchors.fill: parent
                anchors.margins: tokens.spacingSm
                color: tokens.text
                text: "Password"
                echoMode: TextInput.Password
            }
        }
    }
}
