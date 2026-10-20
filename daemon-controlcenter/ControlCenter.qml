import QtQuick
import QtQuick.Controls
import "../daemon-theme/ThemeTokens.qml"
import "../services/ConfigService.js" as ConfigService
import "../services/SettingsService.js" as SettingsService

Rectangle {
    id: root
    width: 1280
    height: 720
    color: tokens.background

    ThemeTokens {
        id: tokens
    }

    property var config: ConfigService.loadConfig()
    property var settings: SettingsService.loadSettings()

    Column {
        anchors.centerIn: parent
        spacing: tokens.spacingLg

        Text {
            text: "Dashboard"
            color: tokens.text
            font.pixelSize: tokens.fontSizeHeading
            font.bold: true
        }

        Text {
            text: "Active profile: " + config.profile
            color: tokens.textSecondary
            font.pixelSize: tokens.fontSizeBody
        }

        Text {
            text: "Animations enabled: " + settings.animations
            color: tokens.textSecondary
            font.pixelSize: tokens.fontSizeBody
        }

        Rectangle {
            width: 520
            height: 64
            radius: tokens.radiusMd
            color: tokens.surfaceAlt

            Text {
                anchors.centerIn: parent
                text: "Search apps or files"
                color: tokens.muted
                font.pixelSize: tokens.fontSizeBody
            }
        }
    }
}
