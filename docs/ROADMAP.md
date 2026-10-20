# Daemon-Core Roadmap

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Einführung

Dieses Dokument beschreibt die geplante Entwicklung von Daemon-Core.

Die Roadmap dient als Orientierung für Entwickler, Mitwirkende und KI-Agenten.

Wichtig:

Die Reihenfolge der Meilensteine ist bewusst gewählt.

Architektur hat immer Vorrang vor Features.

Stabile Grundlagen sind wichtiger als neue Funktionalität.

---

# Entwicklungsstrategie

Daemon-Core wird in mehreren Phasen entwickelt.

Jede Phase baut auf der vorherigen auf.

```text
Foundation
    ↓
Authentication
    ↓
Lockscreen
    ↓
Desktop Shell
    ↓
User Experience
    ↓
Extensibility
```

Neue Features dürfen bestehende Architekturentscheidungen nicht verletzen.

---

# Aktueller Status

Projektphase:

```text
Planung & Architektur
```

Abgeschlossen:

- README.md
- AGENT.md
- ARCHITECTURE.md

In Arbeit:

- Roadmap
- Spezifikationen
- ADRs

Noch nicht begonnen:

- Implementierung

---

# Milestone M1

## Foundation

Status:

```text
In Progress
```

Ziel:

Technische Grundlage des gesamten Projekts schaffen.

---

### Aufgaben

#### Repository

- [ ] Repository Struktur erstellen
- [ ] GitHub Workflows erstellen
- [ ] Issue Templates erstellen
- [ ] Pull Request Templates erstellen

---

#### Dokumentation

- [ ] ROADMAP.md
- [ ] CONTRIBUTING.md
- [ ] TESTING.md
- [ ] SECURITY.md
- [ ] THEME_SPECIFICATION.md
- [ ] COMPONENT_SPECIFICATION.md
- [ ] CONFIGURATION_SPECIFICATION.md

---

#### Core

- [ ] ConfigService
- [ ] ThemeService
- [ ] StateService
- [ ] LoggerService
- [ ] SettingsService

---

#### Theme Engine

- [ ] Theme Loader
- [ ] Theme Validator
- [ ] Theme Schema
- [ ] Theme Hot Reload

---

### Definition of Done

- Dokumentation vorhanden
- Core Services vorhanden
- Theme Engine lauffähig

---

# Milestone M2

## Authentication

Status:

```text
Planned
```

Ziel:

Vollständige greetd Integration.

---

### Aufgaben

#### Session Service

- [ ] SessionService erstellen
- [ ] Session Discovery
- [ ] Session Start
- [ ] Session Validation

---

#### Greeter

- [ ] Login Oberfläche
- [ ] Passwortfeld
- [ ] Benutzerliste
- [ ] Session Auswahl
- [ ] Fehlermeldungen

---

#### Monitor Support

- [ ] Single Monitor
- [ ] Dual Monitor
- [ ] Triple Monitor

---

### Definition of Done

Benutzer kann:

- Login durchführen
- Session auswählen
- Hyprland starten

---

# Milestone M3

## Theme System

Status:

```text
Planned
```

Ziel:

Vollständiges Theme Framework.

---

### Aufgaben

#### Design Tokens

- [ ] Colors
- [ ] Spacing
- [ ] Radius
- [ ] Typography
- [ ] Animations

---

#### Theme API

- [ ] Theme Loader
- [ ] Theme Manager
- [ ] Theme Validation
- [ ] Theme Switching

---

#### Standard Themes

- [ ] Daemon Dark
- [ ] Daemon Light

---

### Definition of Done

Themewechsel ohne Neustart.

---

# Milestone M4

## Shared Component Library

Status:

```text
Planned
```

Ziel:

Zentrale Komponentenbibliothek.

---

### Aufgaben

#### Inputs

- [ ] Button
- [ ] TextField
- [ ] SearchField
- [ ] ComboBox
- [ ] Switch

---

#### Layout

- [ ] Card
- [ ] Dialog
- [ ] ListView
- [ ] Navigation Container

---

#### Visual

- [ ] Avatar
- [ ] Icon
- [ ] Badge
- [ ] Tooltip

---

### Definition of Done

Keine doppelten UI-Komponenten.

---

# Milestone M5

## Lockscreen

Status:

```text
Planned
```

Ziel:

Moderner Sperrbildschirm.

---

### Aufgaben

- [ ] Wallpaper Blur
- [ ] Uhr
- [ ] Datum
- [ ] Medienanzeige
- [ ] Mehrmonitorbetrieb
- [ ] PAM Integration

---

### Erweiterungen

- [ ] Notification Preview
- [ ] Schnellaktionen

---

### Definition of Done

Sperren und Entsperren funktionieren stabil.

---

# Milestone M6

## Daemon Bar

Status:

```text
Planned
```

Ziel:

Moderne Quickshell-Bar.

---

### Aufgaben

#### Workspaces

- [ ] Workspace Anzeige
- [ ] Workspace Wechsel

---

#### System

- [ ] Uhr
- [ ] Audio
- [ ] Netzwerk
- [ ] Bluetooth

---

#### Laptop

- [ ] Batterie
- [ ] Energieprofil

---

### Definition of Done

Bar ersetzt externe Statusleisten.

---

# Milestone M7

## Notification System

Status:

```text
Planned
```

Ziel:

Eigenständiges Benachrichtigungssystem.

---

### Aufgaben

#### NotificationDaemon

- [ ] DBus Integration
- [ ] Popup Rendering

---

#### Notification Center

- [ ] Historie
- [ ] Aktionen
- [ ] Gruppierung

---

### Definition of Done

System kann externe Notification Daemons ersetzen.

---

# Milestone M8

## Dashboard

Status:

```text
Planned
```

Ziel:

Zentrale Benutzeroberfläche.

---

### Aufgaben

#### Suche

- [ ] App Suche
- [ ] Datei Suche
- [ ] Aktionen

---

#### Widgets

- [ ] Wetter
- [ ] Kalender
- [ ] Medien

---

#### Navigation

- [ ] Keyboard Navigation
- [ ] Maus Navigation

---

### Definition of Done

Dashboard ersetzt Launcher und Startmenü.

---

# Milestone M9

## Control Center

Status:

```text
Planned
```

Ziel:

Systemsteuerung.

---

### Aufgaben

#### Netzwerk

- [ ] WLAN
- [ ] Ethernet
- [ ] VPN

---

#### Bluetooth

- [ ] Geräte
- [ ] Pairing

---

#### Audio

- [ ] Lautstärke
- [ ] Geräte

---

#### Display

- [ ] Helligkeit
- [ ] Night Mode

---

### Definition of Done

Control Center ersetzt externe Quick-Settings.

---

# Milestone M10

## Wallpaper Engine

Status:

```text
Planned
```

Ziel:

Zentrale Wallpaper Verwaltung.

---

### Aufgaben

- [ ] Wallpaper Browser
- [ ] Wallpaper Auswahl
- [ ] Video Wallpaper
- [ ] Multi Monitor Wallpaper

---

### Erweiterungen

- [ ] Dynamische Wallpaper
- [ ] Tageszeit Profile

---

### Definition of Done

Greeter, Lockscreen und Desktop verwenden dieselbe Wallpaper Infrastruktur.

---

# Milestone M11

## Profiles

Status:

```text
Planned
```

Ziel:

Vordefinierte Nutzungsprofile.

---

### Profile

- [ ] Minimal
- [ ] Laptop
- [ ] Desktop
- [ ] Gaming
- [ ] Creator
- [ ] Developer

---

### Definition of Done

Profile können vollständig gewechselt werden.

---

# Milestone M12

## Installer

Status:

```text
Future
```

Ziel:

Benutzerfreundliche Einrichtung.

---

### Aufgaben

- [ ] Hardware Prüfung
- [ ] Theme Auswahl
- [ ] Profil Auswahl
- [ ] greetd Setup
- [ ] Hyprland Setup

---

### Definition of Done

Neue Nutzer können Daemon-Core ohne manuelle Konfiguration installieren.

---

# Milestone M13

## Plugin API

Status:

```text
Future
```

Ziel:

Erweiterbares Framework.

---

### Aufgaben

- [ ] Plugin Loader
- [ ] Plugin API
- [ ] Plugin Lifecycle

---

### Beispiel Plugins

- [ ] Wetter
- [ ] RSS
- [ ] Kalender
- [ ] AI Assistant

---

### Definition of Done

Externe Entwickler können eigene Module entwickeln.

---

# Version Roadmap

## v0.1

Foundation

- Architektur
- Core Services
- Theme Engine
- Greeter

---

## v0.2

Authentication

- greetd Integration
- Session Service

---

## v0.3

Lockscreen

---

## v0.4

Bar

---

## v0.5

Notifications

---

## v0.6

Dashboard

---

## v0.7

Control Center

---

## v0.8

Wallpaper Engine

---

## v0.9

Profiles

---

## v1.0

Stable Release

Enthält:

- Greeter
- Lockscreen
- Bar
- Notifications
- Dashboard
- Control Center
- Theme System
- Profile System

---

# Nach Version 1.0

## Version 2.x

Geplant:

- Plugin System
- Theme Marketplace
- Component Marketplace
- Cloud Sync
- Setup Wizard
- Backup & Restore

---

# Erfolgsdefinition

Daemon-Core ist erfolgreich wenn:

- Login funktioniert
- Lockscreen funktioniert
- Bar funktioniert
- Dashboard funktioniert
- Benachrichtigungen funktionieren
- Theme-System funktioniert
- Profile funktionieren

und Nutzer keine Sammlung unabhängiger Tools mehr benötigen, um eine moderne Desktop-Shell auf Hyprland zu betreiben.
