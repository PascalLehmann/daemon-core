# Daemon-Core

> Eine moderne, modulare und vollständig integrierte Desktop-Plattform für Linux auf Basis von Hyprland, Quickshell, greetd und Wayland.

---

# Vision

Daemon-Core verfolgt das Ziel, eine vollständig integrierte Desktop-Erfahrung für Linux bereitzustellen.

Anstatt zahlreiche voneinander unabhängige Projekte miteinander zu kombinieren, soll Daemon-Core eine gemeinsame Plattform bereitstellen, die alle wichtigen Desktop-Komponenten aus einer einzigen Codebasis heraus entwickelt.

Typische Linux-Setups bestehen heute oft aus:

- SDDM
- Hyprlock
- Waybar
- Wlogout
- Rofi
- Wofi
- Mako
- Dunst
- verschiedenen Shell-Skripten

Jede dieser Komponenten besitzt:

- eigene Konfigurationsdateien
- eigene Themes
- eigene Designprinzipien
- eigene Updatezyklen

Daemon-Core verfolgt einen anderen Ansatz:

**Eine Plattform.**

**Ein Theme-System.**

**Eine Designsprache.**

**Eine gemeinsame Architektur.**

---

# Mission

Daemon-Core soll langfristig eine moderne Linux-Plattform bieten, die sich an den positiven Eigenschaften folgender Systeme orientiert:

- macOS
- Windows 11
- Android Material You
- ChromeOS

ohne deren Designs direkt zu kopieren.

Das Projekt soll:

- modern
- schnell
- modular
- erweiterbar
- themebar
- wartbar
- entwicklerfreundlich

sein.

---

# Projektziele

## Kurzfristig

Aufbau einer stabilen Basis:

- Theme Engine
- Shared Components
- Greeter
- Lockscreen

---

## Mittelfristig

Erstellung einer vollständigen Desktop-Shell:

- Bar
- Dashboard
- Control Center
- Notification Center

---

## Langfristig

Entwicklung einer vollständigen Desktop-Plattform inklusive:

- Plugin-System
- Marketplace
- Installationsassistent
- Backup-System
- Profilverwaltung

---

# Kernprinzipien

## Wayland First

Daemon-Core wird ausschließlich für Wayland entwickelt.

X11-Kompatibilität ist kein Ziel.

Dadurch bleiben Architektur und Entwicklungsaufwand überschaubar.

---

## Quickshell First

Alle Benutzeroberflächen basieren auf:

- Quickshell
- Qt6
- QML

Dadurch entsteht ein konsistentes UI-System.

---

## Theme Driven Design

Farben, Schriftarten, Abstände und Effekte dürfen nicht fest im Code hinterlegt werden.

Alle visuellen Eigenschaften stammen aus der Theme Engine.

---

## Modularity First

Jede Komponente muss unabhängig funktionieren.

Beispiele:

- Greeter
- Bar
- Dashboard
- Notifications

dürfen möglichst geringe Abhängigkeiten zueinander besitzen.

---

## Shared Components

UI-Komponenten werden nur einmal entwickelt.

Beispiele:

- Button
- Card
- Avatar
- Dialog
- SearchField
- NotificationCard

Alle Bereiche des Systems verwenden dieselben Komponenten.

---

# Hauptkomponenten

## Daemon Greeter

Moderner Login-Manager auf Basis von:

- greetd
- Quickshell

Funktionen:

- Benutzerauswahl
- Passwortanmeldung
- Sitzungsauswahl
- Multi-Monitor-Unterstützung
- Theme-Unterstützung

---

## Daemon Lockscreen

Moderner Lockscreen mit:

- PAM-Authentifizierung
- Wallpaper Blur
- Uhr
- Datum
- Medieninformationen
- Benachrichtigungen

Geplante Erweiterungen:

- Fingerprint Support
- Face Unlock Integration

---

## Daemon Bar

Moderne Statusleiste.

Funktionen:

- Workspaces
- Fensterinformationen
- Audio
- Netzwerk
- Bluetooth
- Batterie
- Uhr
- Wetter

---

## Daemon Dashboard

Zentrale Oberfläche für:

- Anwendungssuche
- Dateisuche
- Schnellaktionen
- Widgets
- Systemeinstellungen

---

## Daemon Control Center

Schnelleinstellungen ähnlich zu:

- Windows 11 Quick Settings
- GNOME Quick Settings
- macOS Control Center

Verwaltet:

- WLAN
- Bluetooth
- Audio
- Helligkeit
- VPN
- Energieprofile

---

## Daemon Notification Center

Zentrale Verwaltung für:

- Benachrichtigungshistorie
- Popups
- Aktionen
- Prioritäten

---

## Daemon Wallpaper Engine

Verwaltung von:

- Bildern
- Videos
- dynamischen Hintergründen

Alle Komponenten greifen auf dieselbe Wallpaper-Quelle zu.

---

## Daemon Theme Engine

Verwaltet:

- Farben
- Schriftarten
- Rundungen
- Blur-Effekte
- Abstände
- Icons
- Wallpaper

Theme-Wechsel sollen ohne Neustart möglich sein.

---

# Projektstruktur

```text
daemon-core/

├── .github/
│   ├── workflows/
│   └── ISSUE_TEMPLATE/
│
├── assets/
│
├── docs/
│   ├── adr/
│   ├── ROADMAP.md
│   ├── CONTRIBUTING.md
│   ├── CODING_GUIDELINES.md
│   ├── TESTING.md
│   ├── INSTALLATION.md
│   ├── SECURITY.md
│   ├── COMPONENT_SPECIFICATION.md
│   ├── CONFIGURATION_SPECIFICATION.md
│   └── THEME_SPECIFICATION.md
│
├── daemon-shared/
│
├── daemon-theme/
│
├── daemon-greeter/
│
├── daemon-lockscreen/
│
├── daemon-bar/
│
├── daemon-dashboard/
│
├── daemon-controlcenter/
│
├── daemon-notifications/
│
├── daemon-wallpaper/
│
├── services/
│
├── themes/
│
├── README.md
├── AGENT.md
└── ARCHITECTURE.md
```

---

# Service Architektur

Alle Komponenten greifen auf gemeinsame Services zurück.

```text
services/

├── AudioService.qml
├── BluetoothService.qml
├── ConfigService.qml
├── NetworkService.qml
├── NotificationService.qml
├── PowerService.qml
├── SessionService.qml
├── ThemeService.qml
├── UpdateService.qml
├── WallpaperService.qml
└── WeatherService.qml
```

Dadurch bleibt die Benutzeroberfläche frei von Systemlogik.

---

# Theme System

Jedes Theme besitzt eine definierte Struktur.

Beispiel:

```json
{
  "name": "Daemon Dark",

  "colors": {
    "primary": "#7c3aed",
    "background": "#111827",
    "surface": "#1f2937",
    "text": "#ffffff"
  },

  "spacing": {
    "sm": 4,
    "md": 8,
    "lg": 16
  },

  "radius": {
    "sm": 8,
    "md": 16,
    "lg": 24
  }
}
```

Alle Komponenten beziehen ihre Werte ausschließlich aus diesem Theme-System.

---

# Installation

## Voraussetzungen

Aktuell unterstützte Plattform:

- Arch Linux
- Hyprland
- greetd
- Quickshell
- Qt6

---

## Benötigte Pakete

Pflicht:

```bash
hyprland
greetd
quickshell
qt6-base
qt6-declarative
```

Empfohlen:

```bash
pipewire
wireplumber
networkmanager
bluez
playerctl
brightnessctl
grim
slurp
```

---

## Repository klonen

```bash
git clone https://github.com/<username>/daemon-core.git

cd daemon-core
```

---

## greetd konfigurieren

Datei:

```text
/etc/greetd/config.toml
```

Beispiel:

```toml
[terminal]
vt = 1

[default_session]
command = "cage -- quickshell -c daemon-greeter"
user = "greeter"
```

---

## greetd aktivieren

```bash
sudo systemctl enable greetd.service
```

---

## Entwicklung

Greeter starten:

```bash
quickshell -c daemon-greeter
```

Bar starten:

```bash
quickshell -c daemon-bar
```

Dashboard starten:

```bash
quickshell -c daemon-dashboard
```

---

# Entwicklungsphasen

## Version 0.1

Foundation

- Repository Struktur
- Theme Engine
- Shared Components
- Greeter

---

## Version 0.2

Authentication

- Benutzerwahl
- Sessionwahl
- Multi-Monitor Support

---

## Version 0.3

Lockscreen

- PAM
- Wallpaper Blur
- Uhr
- Notifications

---

## Version 0.4

Bar

- Workspaces
- Netzwerkanzeige
- Audio
- Batterie

---

## Version 0.5

Dashboard

- Suche
- App Launcher
- Widgets

---

## Version 0.6

Notification Center

- Historie
- Aktionen
- Gruppen

---

## Version 0.7

Control Center

- WLAN
- Bluetooth
- Lautstärke
- Helligkeit

---

## Version 1.0

Full Desktop Experience

- Vollständige Integration aller Komponenten
- Plugin-System
- Profile-System
- Backup & Restore
- Theme Marketplace

---

# Geplante Features

## Profile System

Vordefinierte Profile:

- Minimal
- Laptop
- Desktop
- Gaming
- Creator
- Developer

---

## Installer

Grafischer Installationsassistent für:

- Theme Auswahl
- Profil Auswahl
- greetd Einrichtung
- Hyprland Integration

---

## Backup System

Geplante Befehle:

```bash
daemon backup create

daemon backup restore
```

---

## Theme Marketplace

Langfristige Vision:

```bash
daemon theme install nord

daemon theme install catppuccin

daemon theme install daemon-dark
```

---

## Plugin Marketplace

Langfristige Vision:

```bash
daemon install weather-widget

daemon install calendar-widget

daemon install media-widget
```

---

# Inspirationsquellen

Die folgenden Projekte dienen als Inspirationsquelle für Architektur, Design und Konzepte:

## Technologien

- Hyprland
- Quickshell
- greetd

## Login & Lockscreen

- qylock
- greetd-qsgreeter
- SDDM

## Desktop Shells

- Caelestia Shell
- DankMaterialShell
- NibrasShell
- dots-hyprland

## Themes

- Astronaut Theme
- Catppuccin SDDM
- Pixie SDDM
- SilentSDDM
- Aerial SDDM

Es werden keine fremden Assets oder Quellcodes kopiert.

---

# Mitwirken

Beiträge sind willkommen.

Bitte vor größeren Änderungen folgende Dokumente lesen:

- AGENT.md
- ARCHITECTURE.md
- CONTRIBUTING.md
- CODING_GUIDELINES.md

---

# Lizenz

MIT License

---

# Status

🚧 Aktive Entwicklung

Daemon-Core befindet sich aktuell in der Planungs- und Architekturphase.
