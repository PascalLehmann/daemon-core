import QtQuick
import QtQuick.Controls
import "../daemon-theme/ThemeTokens.qml"
import "../services/ConfigService.js" as ConfigService
import "../services/ThemeService.js" as ThemeService

Rectangle {
    id: root
    width: 1280
    height: 720
    color: tokens.background

    ThemeTokens {
        id: tokens
    }

    property var config: ConfigService.loadConfig()
    property var manifest: ThemeService.loadThemeManifest(config.theme)

    Column {
        anchors.centerIn: parent
        spacing: tokens.spacingLg

        Text {
            text: "Lockscreen"
            color: tokens.text
            font.pixelSize: tokens.fontSizeHeading
            font.bold: true
        }

        Text {
            text: "Theme: " + (manifest ? manifest.name : config.theme)
            color: tokens.textSecondary
            font.pixelSize: tokens.fontSizeBody
        }

        Rectangle {
            width: 360
            height: 52
            radius: tokens.radiusLg
            color: tokens.surfaceAlt

            Text {
                anchors.centerIn: parent
                text: "Unlock"
                color: tokens.text
                font.pixelSize: tokens.fontSizeTitle
            }
        }
    }
}
