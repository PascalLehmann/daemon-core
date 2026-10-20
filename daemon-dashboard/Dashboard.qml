import QtQuick
import QtQuick.Controls
import Quickshell
import "../services/ConfigService.js" as ConfigService
import "../services/SettingsService.js" as SettingsService

Rectangle {
    id: root
    width: 1280
    height: 720
    color: "#0f172a"

    property var config: ConfigService.loadConfig()
    property var settings: SettingsService.loadSettings()

    Column {
        anchors.centerIn: parent
        spacing: 16

        Text {
            text: "Dashboard"
            color: "#f8fafc"
            font.pixelSize: 30
            font.bold: true
        }

        Text {
            text: "Active profile: " + config.profile
            color: "#cbd5e1"
            font.pixelSize: 16
        }

        Text {
            text: "Animations enabled: " + settings.animations
            color: "#cbd5e1"
            font.pixelSize: 16
        }

        Rectangle {
            width: 520
            height: 64
            radius: 12
            color: "#1e293b"

            Text {
                anchors.centerIn: parent
                text: "Search apps or files"
                color: "#94a3b8"
                font.pixelSize: 16
            }
        }
    }
}
