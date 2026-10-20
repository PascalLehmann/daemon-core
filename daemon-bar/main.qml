import QtQuick
import QtQuick.Controls
import "../daemon-shared/Style.qml" as SharedStyle
import "../services/ConfigService.js" as ConfigService
import "../services/StateService.js" as StateService

Rectangle {
    id: root
    width: 1920
    height: 40
    color: style.surface

    property var style: SharedStyle {}
    property var config: ConfigService.loadConfig()
    property var state: StateService.loadState()

    Component.onCompleted: {
        style.apply(config.theme || "daemon-dark");
    }

    Row {
        anchors.fill: parent
        anchors.leftMargin: style.spacingMd
        anchors.rightMargin: style.spacingMd
        spacing: style.spacingSm

        Text {
            text: "Daemon-Core"
            color: style.text
            font.pixelSize: style.fontSizeBody
            font.bold: true
            anchors.verticalCenter: parent.verticalCenter
        }

        Text {
            text: "Workspace " + state.lastWorkspace
            color: style.textSecondary
            font.pixelSize: 12
            anchors.verticalCenter: parent.verticalCenter
        }

        Item {
            width: 0
            height: 0
            Layout.fillWidth: true
        }

        Text {
            text: "Theme: " + config.theme
            color: style.textSecondary
            font.pixelSize: 12
            anchors.verticalCenter: parent.verticalCenter
        }
    }
}
