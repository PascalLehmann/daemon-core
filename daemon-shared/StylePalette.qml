import QtQuick

QtObject {
    id: root

    property var theme: ({
        background: "#020817",
        surface: "#0f172a",
        surfaceAlt: "#1e293b",
        text: "#f8fafc",
        textSecondary: "#cbd5e1",
        muted: "#94a3b8",
        accent: "#7c3aed",
        accentSoft: "#a78bfa",
        border: "#334155"
    })

    property var tokens: ThemeTokens {}

    function resolve(themeId) {
        if (themeId === "daemon-light") {
            theme = {
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
        } else {
            theme = {
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

        tokens.background = theme.background;
        tokens.surface = theme.surface;
        tokens.surfaceAlt = theme.surfaceAlt;
        tokens.text = theme.text;
        tokens.textSecondary = theme.textSecondary;
        tokens.muted = theme.muted;
        tokens.accent = theme.accent;
        tokens.accentSoft = theme.accentSoft;
        tokens.border = theme.border;
    }
}
