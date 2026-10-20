import QtQuick
import QtQuick.Controls
import Quickshell
import "../services/ConfigService.js" as ConfigService
import "../services/ThemeService.js" as ThemeService

Rectangle {
    id: root
    width: 1280
    height: 720
    color: "#020617"

    property var config: ConfigService.loadConfig()
    property var manifest: ThemeService.loadThemeManifest(config.theme)

    Column {
        anchors.centerIn: parent
        spacing: 18

        Text {
            text: "Lockscreen"
            color: "#f8fafc"
            font.pixelSize: 32
            font.bold: true
        }

        Text {
            text: "Theme: " + (manifest ? manifest.name : config.theme)
            color: "#cbd5e1"
            font.pixelSize: 16
        }

        Rectangle {
            width: 360
            height: 52
            radius: 14
            color: "#1e293b"

            Text {
                anchors.centerIn: parent
                text: "Unlock"
                color: "#f8fafc"
                font.pixelSize: 18
            }
        }
    }
}
