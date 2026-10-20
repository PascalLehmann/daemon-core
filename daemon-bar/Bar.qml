import QtQuick
import QtQuick.Controls
import Quickshell

Rectangle {
    id: root
    width: 1920
    height: 40
    color: "#111827"

    property var config: ConfigService.loadConfig()
    property var state: StateService.loadState()

    Row {
        anchors.fill: parent
        anchors.leftMargin: 12
        anchors.rightMargin: 12
        spacing: 12

        Text {
            text: "Daemon-Core"
            color: "#f8fafc"
            font.pixelSize: 14
            font.bold: true
            anchors.verticalCenter: parent.verticalCenter
        }

        Text {
            text: "Workspace " + state.lastWorkspace
            color: "#cbd5e1"
            font.pixelSize: 12
            anchors.verticalCenter: parent.verticalCenter
        }

        Item { Layout.fillWidth: true }

        Text {
            text: "Theme: " + config.theme
            color: "#cbd5e1"
            font.pixelSize: 12
            anchors.verticalCenter: parent.verticalCenter
        }
    }
}
