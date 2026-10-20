import QtQuick
import QtQuick.Controls
import "../daemon-theme/ThemeTokens.qml"
import "../services/SettingsService.js" as SettingsService

Rectangle {
    id: root
    width: 620
    height: 720
    color: tokens.surfaceElevated

    ThemeTokens {
        id: tokens
    }

    property var settings: SettingsService.loadSettings()

    Column {
        anchors.centerIn: parent
        width: 420
        spacing: tokens.spacingMd

        Text {
            text: "Control Center"
            color: tokens.text
            font.pixelSize: tokens.fontSizeHeading
            font.bold: true
        }

        Repeater {
            model: [
                { label: "Animations", value: settings.animations },
                { label: "Blur", value: settings.blur },
                { label: "Weather", value: settings.showWeather },
                { label: "High contrast", value: settings.highContrast }
            ]

            delegate: Rectangle {
                width: 420
                height: 52
                radius: tokens.radiusMd
                color: tokens.surfaceAlt

                Text {
                    anchors.left: parent.left
                    anchors.leftMargin: tokens.spacingMd
                    anchors.verticalCenter: parent.verticalCenter
                    text: modelData.label
                    color: tokens.text
                    font.pixelSize: tokens.fontSizeBody
                }

                Text {
                    anchors.right: parent.right
                    anchors.rightMargin: tokens.spacingMd
                    anchors.verticalCenter: parent.verticalCenter
                    text: modelData.value ? "On" : "Off"
                    color: tokens.accentSoft
                    font.pixelSize: tokens.fontSizeCaption
                }
            }
        }
    }
}
