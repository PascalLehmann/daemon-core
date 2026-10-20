import QtQuick
import QtQuick.Controls
import Quickshell
import "../services/ConfigService.js" as ConfigService
import "../services/StateService.js" as StateService

Rectangle {
    id: root
    width: 800
    height: 600
    color: "#020817"

    property var config: ConfigService.loadConfig()
    property var state: StateService.loadState()

    Column {
        anchors.centerIn: parent
        spacing: 18

        Text {
            text: "Daemon Greeter"
            color: "#f8fafc"
            font.pixelSize: 30
            font.bold: true
        }

        Text {
            text: "Profile: " + config.profile
            color: "#cbd5e1"
            font.pixelSize: 16
        }

        Text {
            text: "Last workspace: " + state.lastWorkspace
            color: "#cbd5e1"
            font.pixelSize: 16
        }

        Rectangle {
            width: 320
            height: 42
            radius: 12
            color: "#1e293b"

            TextInput {
                anchors.fill: parent
                anchors.margins: 10
                color: "#f8fafc"
                text: "Password"
                echoMode: TextInput.Password
            }
        }
    }
}
