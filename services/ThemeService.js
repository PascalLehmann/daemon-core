import QtQuick

QtObject {
    id: root

    property string currentTheme: "daemon-dark"
    property var themeMap: ({
        "daemon-dark": {
            background: "#020817",
            surface: "#0f172a",
            surfaceAlt: "#1e293b",
            text: "#f8fafc",
            textSecondary: "#cbd5e1",
            muted: "#94a3b8",
            accent: "#7c3aed",
            accentSoft: "#a78bfa",
            border: "#334155"
        },
        "daemon-light": {
            background: "#f8fafc",
            surface: "#e2e8f0",
            surfaceAlt: "#cbd5e1",
            text: "#0f172a",
            textSecondary: "#334155",
            muted: "#64748b",
            accent: "#7c3aed",
            accentSoft: "#8b5cf6",
            border: "#94a3b8"
        }
    })

    property var palette: themeMap["daemon-dark"]

    function resolve(themeId) {
        const nextTheme = themeMap[themeId] || themeMap["daemon-dark"];
        currentTheme = themeId || "daemon-dark";
        palette = nextTheme;
        return nextTheme;
    }

    function apply(themeId) {
        return resolve(themeId);
    }
}
