import QtQuick

QtObject {
    id: root

    property var palette: QtObject {
        property string background: "#020817"
        property string surface: "#0f172a"
        property string surfaceAlt: "#1e293b"
        property string text: "#f8fafc"
        property string textSecondary: "#cbd5e1"
        property string muted: "#94a3b8"
        property string accent: "#7c3aed"
        property string accentSoft: "#a78bfa"
        property string border: "#334155"
    }

    property var radius: ({
        sm: 8,
        md: 12,
        lg: 20,
        xl: 32
    })

    property var spacing: ({
        xs: 4,
        sm: 8,
        md: 12,
        lg: 20,
        xl: 32
    })

    property var typography: ({
        caption: 12,
        body: 14,
        title: 18,
        heading: 28
    })

    function load(themeId) {
        if (themeId === "daemon-light") {
            return {
                background: "#f8fafc",
                surface: "#e2e8f0",
                surfaceAlt: "#cbd5e1",
                text: "#0f172a",
                textSecondary: "#334155",
                muted: "#64748b",
                accent: "#7c3aed",
                accentSoft: "#8b5cf6",
                border: "#94a3b8"
            };
        }

        return {
            background: "#020817",
            surface: "#0f172a",
            surfaceAlt: "#1e293b",
            text: "#f8fafc",
            textSecondary: "#cbd5e1",
            muted: "#94a3b8",
            accent: "#7c3aed",
            accentSoft: "#a78bfa",
            border: "#334155"
        };
    }
}
