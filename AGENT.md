# AGENT.md

# Daemon-Core AI Agent Guidelines

## Zweck

Dieses Dokument definiert die verbindlichen Regeln für KI-Agenten, Copilot-Systeme, Claude Code, Cursor, Aider und zukünftige Automatisierungswerkzeuge, die am Daemon-Core Projekt arbeiten.

Alle Änderungen müssen mit den Zielen, Prinzipien und Architekturentscheidungen dieses Dokuments übereinstimmen.

---

# Projektübersicht

## Projektname

Daemon-Core

## Ziel

Daemon-Core ist ein modernes Linux Desktop Framework auf Basis von:

- Hyprland
- Quickshell
- greetd
- Qt6
- QML
- Wayland

Das Projekt verfolgt das Ziel, eine vollständig integrierte Desktop-Plattform bereitzustellen.

---

# Vision

Anstatt mehrere getrennte Lösungen einzusetzen:

- SDDM
- Hyprlock
- Waybar
- Wlogout
- Rofi
- Wofi
- Mako
- Dunst

soll eine einzige gemeinsame Plattform geschaffen werden.

---

# Langfristige Ziele

Daemon-Core soll langfristig folgende Bereiche vollständig übernehmen:

## Authentication

- Login Manager
- Session Management
- User Management

---

## Security

- Lockscreen
- PAM Integration
- Fingerprint Authentication
- Smart Unlock

---

## User Interface

- Bar
- Dashboard
- Launcher
- Notification Center
- Control Center

---

## Personalization

- Theme Engine
- Wallpaper Engine
- Profile System

---

## Extensibility

- Plugin API
- Theme API
- Component Marketplace
- Theme Marketplace

---

# Zielplattform

## Betriebssystem

Primär:

- Arch Linux

Sekundär:

- CachyOS
- EndeavourOS

Geplant:

- Fedora
- NixOS

---

## Display Server

Ausschließlich:

- Wayland

---

## Compositor

Primär:

- Hyprland

---

## Display Manager

- greetd

---

## UI Framework

- Quickshell
- Qt6
- QML

---

# Technische Prinzipien

## Prinzip 1

Wayland First

Keine neuen Features dürfen von X11 abhängig sein.

---

## Prinzip 2

Quickshell First

Alle Oberflächen basieren auf:

- Quickshell
- QtQuick
- QML

---

## Prinzip 3

Modular First

Jede Komponente muss möglichst unabhängig funktionieren.

---

## Prinzip 4

Theme Driven Design

Farben dürfen niemals fest hinterlegt werden.

Schlecht:

```qml
color: "#ffffff"
```

Gut:

```qml
color: Theme.colors.text
```

---

## Prinzip 5

Shared Components

Komponenten werden nur einmal entwickelt.

Beispiele:

- Button
- Card
- Dialog
- Avatar
- TextField

dürfen nicht mehrfach implementiert werden.

---

## Prinzip 6

Service Separation

Business-Logik gehört niemals direkt in UI-Komponenten.

Schlecht:

```qml
Button {
    onClicked: system("nmcli ...")
}
```

Gut:

```qml
Button {
    onClicked: NetworkService.connect()
}
```

---

# Prioritätenmodell

Jede Aufgabe wird nach folgender Priorität bewertet.

---

## P0 Kritisch

Sofort bearbeiten.

Beispiele:

- Abstürze
- Login Fehler
- Session Fehler
- PAM Fehler
- Datenverlust
- Sicherheitsprobleme

Neue Features sind solange verboten.

---

## P1 Architektur

Höchste Entwicklungspriorität.

Beispiele:

- Theme Engine
- Config Layer
- State Management
- Shared Components
- Service Layer

---

## P2 Kernfunktionen

Beispiele:

- Greeter
- Lockscreen
- Bar
- Dashboard
- Notifications

---

## P3 Komfortfunktionen

Beispiele:

- Animationen
- Zusätzliche Widgets
- Zusätzliche Themes

---

## P4 Kosmetik

Beispiele:

- Farbänderungen
- Mikroanimationen
- Optische Anpassungen

---

# Entscheidungsregeln

Wenn mehrere Lösungen möglich sind:

1. Wartbarkeit
2. Erweiterbarkeit
3. Lesbarkeit
4. Testbarkeit
5. Performance
6. Optik

immer in dieser Reihenfolge bewerten.

---

# Projektstruktur

```text
daemon-core/

├── .github/
├── assets/
├── docs/
├── services/
├── themes/

├── daemon-shared/
├── daemon-theme/

├── daemon-greeter/
├── daemon-lockscreen/

├── daemon-bar/
├── daemon-dashboard/

├── daemon-controlcenter/
├── daemon-notifications/

├── daemon-wallpaper/

├── README.md
├── AGENT.md
└── ARCHITECTURE.md
```

---

# Verzeichnisregeln

## daemon-shared

Enthält ausschließlich wiederverwendbare Komponenten.

Erlaubt:

```text
Button.qml
Card.qml
Avatar.qml
TextField.qml
Dialog.qml
```

---

## services

Enthält ausschließlich Logik.

Beispiele:

```text
AudioService.qml
NetworkService.qml
ThemeService.qml
PowerService.qml
```

---

## themes

Enthält ausschließlich Themes.

Keine Logik.

Keine Services.

Keine Widgets.

---

## docs

Dokumentation.

Keine Produktivlogik.

---

# Design System

## Verpflichtende Design Tokens

Alle visuellen Komponenten müssen folgende Tokens verwenden:

```text
Colors
Spacing
Radius
Typography
Icons
Blur
Animations
```

---

## Verboten

```qml
radius: 17
```

```qml
font.pixelSize: 31
```

```qml
color: "#123456"
```

---

## Erlaubt

```qml
radius: Theme.radius.md
```

```qml
font.pixelSize: Theme.typography.body
```

```qml
color: Theme.colors.surface
```

---

# Theme Engine Vorgaben

Jedes Theme besitzt:

```text
theme.json
```

Beispiel:

```json
{
  "name": "Daemon Dark",
  "version": "1.0",

  "colors": {},
  "spacing": {},
  "radius": {},
  "typography": {},

  "wallpaper": {},
  "icons": {}
}
```

---

# Testregeln

Keine Änderung gilt als abgeschlossen ohne Tests.

---

## Test Level 1

Syntax

Prüfen:

- QML
- JSON
- YAML
- TOML

---

## Test Level 2

Komponenten

Neue Komponenten müssen isoliert getestet werden.

Beispiel:

```text
Button.qml
```

muss einzeln funktionieren.

---

## Test Level 3

Integration

Prüfen:

- Theme Integration
- Services
- Shared Components

---

## Test Level 4

System

Prüfen:

- greetd
- Login
- Session Start
- Hyprland

---

# Pflichttests

Vor jedem Commit:

- Keine Syntaxfehler
- Keine fehlenden Imports
- Keine toten Komponenten
- Keine Duplikate

---

# Login Testmatrix

## Muss funktionieren

- Gültiger Benutzer
- Ungültiges Passwort
- Benutzerwechsel
- Sessionwechsel
- Logout/Login
- Neustart

---

# Theme Testmatrix

## Muss funktionieren

- Dark Theme
- Light Theme
- Single Monitor
- Dual Monitor
- UltraWide
- HiDPI

---

# Performance Ziele

## Greeter

```text
< 500 ms
```

---

## Login

```text
< 2 Sekunden
```

---

## Bar

```text
< 100 MB RAM
```

---

# CI/CD Regeln

Kein Merge ohne erfolgreiche CI.

---

# Release Kriterien

Vor jedem Release:

- CI erfolgreich
- Dokumentation aktuell
- Keine bekannten kritischen Bugs
- Architektur konsistent

---

# Aktuelle Roadmap

## M1 Foundation

Status:

In Arbeit

Tasks:

- Repository Struktur
- Theme Engine
- Shared Components
- Service Layer

---

## M2 Greeter

Tasks:

- greetd Integration
- Login Fenster
- Benutzerliste
- Passwortfeld
- Session Auswahl

Definition of Done:

Benutzer kann Hyprland starten.

---

## M3 Theme Engine

Tasks:

- Farben
- Typography
- Radius
- Blur
- Wallpaper

Definition of Done:

Themewechsel ohne Komponentenänderung.

---

## M4 Lockscreen

Tasks:

- PAM
- Wallpaper Blur
- Uhr
- Notifications

---

## M5 Bar

Tasks:

- Workspaces
- Netzwerk
- Audio
- Batterie
- Bluetooth

---

## M6 Dashboard

Tasks:

- Suche
- Launcher
- Widgets

---

## M7 Notifications

Tasks:

- Verlauf
- Aktionen
- Gruppierung

---

## M8 Control Center

Tasks:

- Netzwerk
- Bluetooth
- Audio
- Display
- Energie

---

# Referenzprojekte

Diese Projekte dürfen analysiert werden.

Architektur und Ideen dürfen übernommen werden.

Code und Assets dürfen nicht kopiert werden.

---

## Kerntechnologien

- HyprWM / Hyprland
- kennylevinsen / greetd
- quickshell-mirror / quickshell

---

## Login

- taleroangel / greetd-qsgreeter
- Darkkal44 / qylock
- sddm / sddm

---

## Desktop Shells

- caelestia-dots / shell
- AvengeMedia / DankMaterialShell
- AhmedSaadi0 / NibrasShell
- end-4 / dots-hyprland
- ekremx25 / quickshell
- tripathiji1312 / quickshell
- singhashu23 / hypr-quickshell

---

## ML4W Inspiration

Folgende Konzepte sollen berücksichtigt werden:

- Installer
- Presets
- Benutzerprofile
- Update Strategie
- Backup & Restore
- Benutzerfreundlichkeit
- Progressive Komplexität

---

## Theme Inspiration

- Keyitdev / sddm-astronaut-theme
- catppuccin / sddm
- xCaptaiN09 / pixie-sddm
- 3ximus / aerial-sddm-theme
- uiriansan / SilentSDDM
- stepanzubkov / where-is-my-sddm-theme

---

## UI Inspiration

- ArchEclipse
- Tide-island
- Ambxst
- iNiR
- serpantinum
- thyx
- linux-retroism

---

# Definition of Done

Eine Aufgabe ist abgeschlossen wenn:

- Code funktioniert
- Dokumentation vorhanden ist
- Tests erfolgreich sind
- Theme System unterstützt wird
- Fehlermeldungen behandelt werden
- Mehrmonitorbetrieb berücksichtigt wurde
- Keine Architekturregeln verletzt werden

---

# Agent Verhalten

Bei Unklarheiten:

1. README.md lesen
2. ARCHITECTURE.md lesen
3. ADRs lesen
4. Bestehende Komponenten wiederverwenden
5. Erst danach neuen Code erstellen

Neue Architekturentscheidungen müssen als ADR dokumentiert werden.

---

# Letzte Regel

Wartbarkeit ist wichtiger als Features.

Architektur ist wichtiger als Optik.

Konsistenz ist wichtiger als Geschwindigkeit.
