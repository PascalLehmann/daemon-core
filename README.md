# Daemon-Core

> Eine moderne, modulare und vollständig integrierte Desktop-Plattform für Linux auf Basis von Hyprland, Quickshell, greetd und Wayland.

---

# Vision

Daemon-Core verfolgt das Ziel, eine vollständig integrierte Desktop-Erfahrung für Linux bereitzustellen.

Anstatt zahlreiche voneinander unabhängige Werkzeuge zu kombinieren, soll Daemon-Core eine gemeinsame Plattform bereitstellen, die Login-Manager, Lockscreen, Bar, Dashboard, Benachrichtigungen und Systemeinstellungen aus einer konsistenten Codebasis heraus bereitstellt.

Typische Linux-Setups bestehen heute oft aus:

- SDDM
- Hyprlock
- Waybar
- Wlogout
- Rofi
- Wofi
- Mako
- Dunst
- diversen Shell-Skripten

Jede dieser Komponenten besitzt:

- eigene Konfigurationen
- eigene Themes
- eigene Wartung
- eigene Designsprachen

Daemon-Core verfolgt einen anderen Ansatz:

**Eine Plattform.**

**Ein Theme-System.**

**Eine Designsprache.**

**Eine gemeinsame Architektur.**

---

# Mission

Daemon-Core soll langfristig eine moderne Linux-Plattform bereitstellen, die sich an den positiven Eigenschaften folgender Systeme orientiert:

- macOS
- Windows 11
- ChromeOS
- Material Design 3

ohne deren Designs direkt zu kopieren.

Das Projekt soll:

- modern
- performant
- modular
- erweiterbar
- wartbar
- entwicklerfreundlich
- benutzerfreundlich

sein.

---

# Warum Daemon-Core?

Aktuelle Hyprland-Setups bestehen häufig aus vielen voneinander unabhängigen Projekten.

Beispiel:

```text
Login         → SDDM
Lockscreen    → Hyprlock
Bar           → Waybar
Launcher      → Rofi
Notifications → Mako
Powermenu     → Wlogout
Settings      → Eigene Skripte
```

Das führt oft zu:

- unterschiedlichen Themes
- doppelten Konfigurationen
- inkonsistenter Bedienung
- hohem Wartungsaufwand

Daemon-Core soll stattdessen eine einheitliche Plattform bereitstellen.

---

# Projektziele

## Kurzfristige Ziele

- Theme Engine
- Shared Components
- Greeter
- Lockscreen

## Mittelfristige Ziele

- Statusleiste
- Dashboard
- Notification Center
- Control Center

## Langfristige Ziele

- Plugin-System
- Profil-System
- Backup & Restore
- Grafischer Installer
- Theme Marketplace
- Komponenten-Marktplatz

---

# Kernprinzipien

## Wayland First

Daemon-Core wird ausschließlich für Wayland entwickelt.

X11-Kompatibilität ist kein Projektziel.

---

## Quickshell First

Alle Oberflächen basieren auf:

- Quickshell
- Qt6
- QML

---

## Theme Driven Design

Komponenten besitzen keine fest hinterlegten Farben.

Farben, Schriftarten, Abstände und Effekte stammen ausschließlich aus der Theme Engine.

---

## Modularity First

Jede Komponente muss unabhängig funktionieren.

Beispiele:

- Greeter
- Lockscreen
- Dashboard
- Notification Center

dürfen nur minimale Abhängigkeiten besitzen.

---

## Shared Components

Benutzerschnittstellen werden nur einmal entwickelt.

Beispiele:

- Button
- Card
- Dialog
- Avatar
- SearchField
- NotificationCard

Alle Module greifen auf dieselben Komponenten zurück.

---

# Hauptkomponenten

## Daemon Greeter

Moderner Login-Manager auf Basis von:

- greetd
- Quickshell

Funktionen:

- User Auswahl
- Password Login
- Session Auswahl
- Multi Monitor Support
- Theme Support

---

## Daemon Lockscreen

Moderner Sperrbildschirm mit:

- PAM Authentifizierung
- Wallpaper Blur
- Uhr
- Datum
- Medieninformationen
- Benachrichtigungen

Langfristige Erweiterungen:

- Fingerprint Authentication
- Smart Unlock

---

## Daemon Bar

Statusleiste für:

- Workspaces
- Fenstertitel
- Audio
- Bluetooth
- Netzwerk
- Akku
- Wetter
- Uhr

---

## Daemon Dashboard

Zentrale Oberfläche für:

- App Launcher
- Dateisuche
- Schnellaktionen
- Widgets

---

## Daemon Control Center

Schnelleinstellungen für:

- WLAN
- Bluetooth
- Lautstärke
- Helligkeit
- VPN
- Energieprofile

---

## Daemon Notification Center

Verwaltet:

- Benachrichtigungshistorie
- Prioritäten
- Aktionen
- Gruppierungen

---

## Daemon Wallpaper Engine

Verwaltet:

- Bilder
- Videos

Langfristig:

- Dynamische Wallpaper
- Themeabhängige Wallpaper

---

## Daemon Theme Engine

Verwaltet:

- Farben
- Abstände
- Rundungen
- Blur-Werte
- Schriftarten
- Icons
- Wallpaper

Themewechsel sollen ohne Neustart der Shell möglich sein.

---

# Zielarchitektur

```text
Boot
 ↓

systemd
 ↓

greetd
 ↓

Daemon Greeter
 ↓

Hyprland
 ↓

Daemon Services
 ↓

Daemon Bar
 ↓

Dashboard
 ↓

Notifications
 ↓

Control Center
```

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
├── daemon-theme/
├── daemon-greeter/
├── daemon-lockscreen/
├── daemon-bar/
├── daemon-dashboard/
├── daemon-controlcenter/
├── daemon-notifications/
├── daemon-wallpaper/
│
├── services/
├── themes/
│
├── README.md
├── AGENT.md
└── ARCHITECTURE.md
```

---

# Voraussetzungen

Aktuell wird als Zielplattform angenommen:

- Arch Linux
- Hyprland
- greetd
- Quickshell
- Qt6

---

# Installation

## Systempakete

```bash
sudo pacman -S \
hyprland \
greetd \
cage \
qt6-base \
qt6-declarative \
networkmanager \
pipewire \
wireplumber \
brightnessctl \
bluez \
playerctl \
grim \
slurp
```

---

## Quickshell installieren

AUR:

```bash
yay -S quickshell
```

oder

```bash
yay -S quickshell-git
```

---

## Dienste aktivieren

NetworkManager:

```bash
sudo systemctl enable NetworkManager.service
```

Bluetooth:

```bash
sudo systemctl enable bluetooth.service
```

greetd:

```bash
sudo systemctl enable greetd.service
```

---

## Repository klonen

```bash
git clone https://github.com/<username>/daemon-core.git

cd daemon-core
```

---

## Repository prüfen

```bash
tree -L 2
```

Sollte ungefähr ergeben:

```text
daemon-core/
├── daemon-shared
├── daemon-theme
├── daemon-greeter
├── docs
├── services
└── themes
```

---

# greetd Konfiguration

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

Hinweis:

Diese Konfiguration dient aktuell als Zielarchitektur und wird später durch den Daemon Greeter konkret umgesetzt.

---

# Entwicklungsumgebung

Empfohlene Werkzeuge:

- VSCode
- Qt Creator
- Git

VSCode Erweiterungen:

- QML
- GitLens
- Error Lens
- Markdown All In One
- Even Better TOML

---

# Entwicklung

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

Lockscreen starten:

```bash
quickshell -c daemon-lockscreen
```

---

# Troubleshooting

## Quickshell startet nicht

Version prüfen:

```bash
quickshell --version
```

---

## greetd startet nicht

Logs ansehen:

```bash
journalctl -u greetd -b
```

---

## Hyprland startet nicht

Direkt testen:

```bash
Hyprland
```

---

## Schwarzer Bildschirm

Testen:

```bash
cage -- quickshell
```

Fehlerausgaben analysieren.

---

# Entwicklungsphasen

## Version 0.1

Foundation

- Repository Struktur
- Theme Engine
- Shared Components
- Greeter MVP

---

## Version 0.2

Authentication

- Benutzerverwaltung
- Session Auswahl
- Multi Monitor Support

---

## Version 0.3

Lockscreen

- PAM
- Wallpaper Blur
- Benachrichtigungen

---

## Version 0.4

Bar

- Workspaces
- Audio
- Netzwerk
- Batterie

---

## Version 0.5

Dashboard

- Suche
- Launcher
- Widgets

---

## Version 0.6

Notification Center

- Historie
- Aktionen
- Gruppierung

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

- Vollständige Shell
- Profil-System
- Plugin-Schnittstelle
- Backup & Restore

---

# Geplante Features

## Profile System

Verfügbare Profile:

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

## Backup & Restore

Langfristige Ziele:

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

## Component Marketplace

Langfristige Vision:

```bash
daemon install weather-widget

daemon install calendar-widget

daemon install media-widget
```

---

# Inspirationsquellen

Technologien:

- Hyprland
- Quickshell
- greetd

Login & Lockscreen:

- qylock
- greetd-qsgreeter
- SDDM

Desktop Shells:

- Caelestia Shell
- DankMaterialShell
- NibrasShell
- dots-hyprland
- ML4W

Themes:

- Astronaut Theme
- Catppuccin SDDM
- Pixie SDDM
- SilentSDDM
- Aerial SDDM

Architekturen, Konzepte und Designideen dienen als Inspiration.

Es werden keine fremden Quellcodes oder Assets kopiert.

---

# Mitwirken

Vor Änderungen bitte lesen:

- README.md
- AGENT.md
- ARCHITECTURE.md
- CONTRIBUTING.md
- CODING_GUIDELINES.md

---

# Lizenz

MIT License

---

# Projektstatus

🚧 Architektur- und Planungsphase

Aktuell werden:

- Architektur
- Theme Engine
- Greeter
- Shared Components

definiert und dokumentiert.
``
