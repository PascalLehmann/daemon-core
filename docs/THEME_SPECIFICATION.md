# Theme Specification

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Dieses Dokument definiert die Struktur, Regeln und Anforderungen für alle Daemon-Core Themes.

Alle Themes müssen dieser Spezifikation entsprechen.

Ziel ist es:

- Konsistenz sicherzustellen
- Theme-Kompatibilität zu gewährleisten
- Hot Reload zu ermöglichen
- Theme-Wechsel ohne Codeänderungen zu unterstützen

---

# Grundprinzipien

## Theme First

Komponenten dürfen keine festen visuellen Werte enthalten.

Verboten:

```qml
color: "#ffffff"
```

```qml
radius: 12
```

```qml
font.pixelSize: 24
```

---

## Tokens statt Werte

Erlaubt:

```qml
color: Theme.colors.text
```

```qml
radius: Theme.radius.md
```

```qml
font.pixelSize: Theme.typography.body
```

---

## Einheitliches Schema

Jedes Theme muss dieselbe Struktur besitzen.

---

## Rückwärtskompatibilität

Neue Theme Versionen dürfen ältere Komponenten nicht beschädigen.

---

# Theme Verzeichnisstruktur

```text
themes/

daemon-dark/
│
├── theme.json
│
├── wallpapers/
│   ├── desktop.jpg
│   ├── login.jpg
│   └── lockscreen.jpg
│
├── icons/
│
├── fonts/
│
└── sounds/
```

---

# Pflichtdateien

Jedes Theme benötigt mindestens:

```text
theme.json
```

---

# Optionale Verzeichnisse

```text
wallpapers/
icons/
fonts/
sounds/
```

---

# Theme Manifest

Datei:

```text
theme.json
```

Beispiel:

```json
{
  "name": "Daemon Dark",
  "id": "daemon-dark",
  "version": "1.0.0",

  "author": "Daemon-Core Team",
  "description": "Default Dark Theme",

  "colors": {},
  "spacing": {},
  "radius": {},
  "typography": {},
  "animations": {},
  "effects": {},
  "icons": {},
  "wallpaper": {}
}
```

---

# Pflichtfelder

## name

Anzeigename.

Beispiel:

```json
"name": "Daemon Dark"
```

---

## id

Eindeutige Kennung.

Beispiel:

```json
"id": "daemon-dark"
```

Regeln:

- nur Kleinbuchstaben
- Bindestriche erlaubt
- keine Leerzeichen

---

## version

Theme Version.

Beispiel:

```json
"version": "1.0.0"
```

SemVer verwenden.

---

# Colors

## Zweck

Definiert sämtliche Farben.

---

## Schema

```json
{
  "primary": "#7c3aed",
  "secondary": "#9333ea",

  "background": "#0f172a",
  "surface": "#1e293b",
  "surfaceAlt": "#334155",

  "text": "#ffffff",
  "textSecondary": "#cbd5e1",

  "success": "#22c55e",
  "warning": "#f59e0b",
  "error": "#ef4444",

  "border": "#475569"
}
```

---

# Pflichtfarben

```text
primary
secondary

background
surface
surfaceAlt

text
textSecondary

success
warning
error

border
```

---

# Spacing

Abstände innerhalb der Benutzeroberfläche.

---

## Schema

```json
{
  "xs": 4,
  "sm": 8,
  "md": 16,
  "lg": 24,
  "xl": 32,
  "xxl": 48
}
```

---

# Radius

Rundungen.

---

## Schema

```json
{
  "xs": 4,
  "sm": 8,
  "md": 12,
  "lg": 20,
  "xl": 32
}
```

---

# Typography

Definiert Schriftarten und Größen.

---

## Schema

```json
{
  "family": "Inter",

  "sizes": {
    "caption": 12,
    "body": 14,
    "subtitle": 18,
    "title": 24,
    "heading": 32,
    "display": 48
  }
}
```

---

# Animations

Definiert Standardanimationen.

---

## Schema

```json
{
  "fast": 100,
  "normal": 200,
  "slow": 300,

  "easing": "OutCubic"
}
```

---

# Effects

Visuelle Effekte.

---

## Schema

```json
{
  "blur": 24,

  "shadowSmall": 4,
  "shadowMedium": 8,
  "shadowLarge": 16,

  "opacityDisabled": 0.5
}
```

---

# Wallpaper

Global definierte Wallpaper.

---

## Schema

```json
{
  "desktop": "wallpapers/desktop.jpg",
  "login": "wallpapers/login.jpg",
  "lockscreen": "wallpapers/lockscreen.jpg"
}
```

---

# Icons

Definiert verwendete Icon-Sets.

---

## Schema

```json
{
  "pack": "material-symbols",
  "variant": "rounded"
}
```

---

# Sounds

Optionale Audiodateien.

---

## Schema

```json
{
  "login": "sounds/login.wav",
  "logout": "sounds/logout.wav",
  "notification": "sounds/notification.wav"
}
```

---

# Theme Service API

Alle Komponenten greifen ausschließlich über den ThemeService auf Theme-Werte zu.

Beispiel:

```qml
Theme.colors.primary

Theme.colors.text

Theme.radius.md

Theme.spacing.lg

Theme.typography.sizes.body
```

---

# Theme Loading

Ablauf:

```text
Theme auswählen
       │
       ▼

ThemeService

       │
       ▼

Schema prüfen

       │
       ▼

Theme laden

       │
       ▼

UI aktualisieren
```

---

# Theme Validation

Vor dem Laden müssen Themes validiert werden.

Prüfen:

- Pflichtfelder vorhanden
- JSON gültig
- Referenzierte Dateien vorhanden
- Version vorhanden

---

# Fallback Verhalten

Fehlt ein Wert:

```text
Aktives Theme
       │
       ▼

Default Theme
       │
       ▼

Interne Defaults
```

Das System darf niemals wegen eines fehlerhaften Themes abstürzen.

---

# Dark und Light Themes

Jedes offizielle Theme sollte zwei Varianten besitzen.

Beispiele:

```text
daemon-dark
daemon-light

nord-dark
nord-light

catppuccin-mocha
catppuccin-latte
```

---

# Theme Hot Reload

Ziel:

Änderungen an:

- Farben
- Radius
- Spacing
- Typography

werden ohne Neustart übernommen.

---

# Multi Monitor Regeln

Themes dürfen keine feste Auflösung erwarten.

Müssen funktionieren auf:

- 1920x1080
- 2560x1440
- 3440x1440
- 3840x2160

---

# Accessibility

Themes sollten unterstützen:

- Hoher Kontrast
- Gute Lesbarkeit
- Skalierbare Schriftgrößen

---

# Offizielle Themes

Geplante Referenzthemes:

```text
daemon-dark
daemon-light

nord
catppuccin

material
retro
```

---

# Definition of Done

Ein Theme gilt als kompatibel wenn:

- Schema gültig ist
- Alle Pflichtfelder vorhanden sind
- Theme Validation erfolgreich ist
- Greeter funktioniert
- Lockscreen funktioniert
- Bar funktioniert
- Dashboard funktioniert
- Mehrmonitorbetrieb getestet wurde
