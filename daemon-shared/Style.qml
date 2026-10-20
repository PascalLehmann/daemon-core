import QtQuick

QtObject {
    id: root

    property string currentTheme: "daemon-dark"
    property var palette: ({
        background: "#020817",
        surface: "#0f172a",
        surfaceAlt: "#1e293b",
        text: "#f8fafc",
        textSecondary: "#cbd5e1",
        muted: "#94a3b8",
        accent: "#7c3aed",
        accentSoft: "#a78bfa",
        border: "#334155",
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444"
    })

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
            border: "#334155",
            success: "#22c55e",
            warning: "#f59e0b",
            error: "#ef4444"
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
            border: "#94a3b8",
            success: "#22c55e",
            warning: "#f59e0b",
            error: "#ef4444"
        }
    })

    function switchTheme(themeId) {
        const targetTheme = themeMap[themeId] || themeMap["daemon-dark"];
        currentTheme = themeId || "daemon-dark";
        palette = targetTheme;
        return targetTheme;
    }

    function applyTo(target) {
        const current = palette;
        if (!target) {
            return;
        }

        if (target.hasOwnProperty("color")) {
            target.color = current.background;
        }

        if (target.hasOwnProperty("textColor")) {
            target.textColor = current.text;
        }
    }
}
