import QtQuick

QtObject {
    id: root

    property string background: "#020817"
    property string surface: "#0f172a"
    property string surfaceAlt: "#1e293b"
    property string surfaceElevated: "#111827"
    property string text: "#f8fafc"
    property string textSecondary: "#cbd5e1"
    property string muted: "#94a3b8"
    property string accent: "#7c3aed"
    property string accentSoft: "#a78bfa"
    property string border: "#334155"
    property string success: "#22c55e"
    property string warning: "#f59e0b"
    property string error: "#ef4444"

    property int radiusSm: 8
    property int radiusMd: 12
    property int radiusLg: 20
    property int radiusXl: 32

    property int spacingXs: 4
    property int spacingSm: 8
    property int spacingMd: 12
    property int spacingLg: 20
    property int spacingXl: 32

    property int fontSizeCaption: 12
    property int fontSizeBody: 14
    property int fontSizeTitle: 18
    property int fontSizeHeading: 28

    property real shadowSmall: 4
    property real shadowMedium: 8
    property real shadowLarge: 16

    function apply(themeId) {
        if (themeId === "daemon-light") {
            background = "#f8fafc"
            surface = "#e2e8f0"
            surfaceAlt = "#cbd5e1"
            surfaceElevated = "#e2e8f0"
            text = "#0f172a"
            textSecondary = "#334155"
            muted = "#64748b"
            accent = "#7c3aed"
            accentSoft = "#8b5cf6"
            border = "#94a3b8"
        } else {
            background = "#020817"
            surface = "#0f172a"
            surfaceAlt = "#1e293b"
            surfaceElevated = "#111827"
            text = "#f8fafc"
            textSecondary = "#cbd5e1"
            muted = "#94a3b8"
            accent = "#7c3aed"
            accentSoft = "#a78bfa"
            border = "#334155"
        }
    }
}
