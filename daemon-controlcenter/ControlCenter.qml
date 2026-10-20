import QtQuick
import QtQuick.Controls
import Quickshell
import "../services/SettingsService.js" as SettingsService

Rectangle {
    id: root
    width: 620
    height: 720
    color: "#111827"

    property var settings: SettingsService.loadSettings()

    Column {
        anchors.centerIn: parent
        width: 420
        spacing: 16

        Text {
            text: "Control Center"
            color: "#f8fafc"
            font.pixelSize: 28
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
                radius: 12
                color: "#1f2937"

                Text {
                    anchors.left: parent.left
                    anchors.leftMargin: 16
                    anchors.verticalCenter: parent.verticalCenter
                    text: modelData.label
                    color: "#e2e8f0"
                    font.pixelSize: 16
                }

                Text {
                    anchors.right: parent.right
                    anchors.rightMargin: 16
                    anchors.verticalCenter: parent.verticalCenter
                    text: modelData.value ? "On" : "Off"
                    color: "#a5f3fc"
                    font.pixelSize: 14
                }
            }
        }
    }
}
