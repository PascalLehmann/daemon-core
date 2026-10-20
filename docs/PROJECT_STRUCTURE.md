# Project Structure

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Dieses Dokument definiert die offizielle Repository-Struktur von Daemon-Core.

Jeder Ordner besitzt eine klar definierte Verantwortung.

Dateien dürfen ausschließlich in den dafür vorgesehenen Bereichen abgelegt werden.

---

# Design Principles

## Separation of Concerns

Jeder Ordner besitzt genau einen definierten Zweck.

---

## Predictability

Neue Entwickler und KI-Agenten sollen die Repository-Struktur ohne zusätzliche Erklärungen verstehen können.

---

## Scalability

Die Struktur muss auch bei wachsender Codebasis übersichtlich bleiben.

---

# Repository Layout

```text
daemon-core/

├── .github/
├── assets/
├── config/
├── docs/
├── ipc/
├── services/
├── themes/
│
├── daemon-shared/
├── daemon-theme/
│
├── daemon-greeter/
├── daemon-lockscreen/
│
├── daemon-bar/
├── daemon-dashboard/
│
├── daemon-notifications/
├── daemon-controlcenter/
│
├── daemon-wallpaper/
│
├── README.md
├── AGENT.md
├── ARCHITECTURE.md
├── CHANGELOG.md
└── LICENSE
```

---

# Root Files

## README.md

Projektübersicht.

---

## AGENT.md

Regeln für KI-Agenten.

---

## ARCHITECTURE.md

Technische Architektur.

---

## CHANGELOG.md

Versionshistorie.

---

## LICENSE

Lizenzinformationen.

---

# .github

Verwaltet Repository-Automatisierung.

```text
.github/

├── CODEOWNERS
├── PULL_REQUEST_TEMPLATE.md
├── ISSUE_TEMPLATE/
└── workflows/
```

---

# assets

Gemeinsame Assets.

```text
assets/

fonts/
icons/
wallpapers/
sounds/
```

---

## Regeln

Darf enthalten:

- Schriftarten
- Icons
- Beispielbilder
- Audiodateien

Darf nicht enthalten:

- Geschäftslogik
- Konfiguration

---

# config

Konfigurationsschemas und Standardwerte.

```text
config/

├── defaults/
└── schemas/
```

---

## defaults

Standardkonfigurationen.

---

## schemas

JSON-Schemas.

---

# docs

Projekt- und Architektur-Dokumentation.

```text
docs/

adr/
specifications/
```

---

# ipc

Adapter für externe Systeme.

Beispiele:

```text
HyprlandIPC
DBusIPC
PipeWireIPC
BlueZIPC
NetworkManagerIPC
```

---

# services

Business-Logik.

---

## Core Services

```text
ConfigService
SettingsService
StateService
ThemeService
ProfileService
LoggerService
```

---

## System Services

```text
AudioService
NetworkService
BluetoothService
WallpaperService
NotificationService
SessionService
PowerService
WeatherService
```

---

# themes

Installierte Themes.

Beispiel:

```text
themes/

daemon-dark/
daemon-light/
catppuccin/
nord/
```

---

# daemon-shared

Wiederverwendbare UI-Komponenten.

---

## Erlaubte Inhalte

```text
Button.qml
Card.qml
Dialog.qml
Icon.qml
TextField.qml
```

---

## Verbotene Inhalte

- Business Logic
- IPC
- Systemzugriffe

---

# daemon-theme

Theme Engine.

Verantwortlich für:

- Theme Loading
- Theme Validation
- Theme Hot Reload

---

# daemon-greeter

Login Oberfläche.

---

# daemon-lockscreen

Sperrbildschirm.

---

# daemon-bar

Statusleiste.

---

# daemon-dashboard

Launcher und Dashboard.

---

# daemon-notifications

Notification Center.

---

# daemon-controlcenter

Quick Settings.

---

# daemon-wallpaper

Wallpaper Verwaltung.

---

# Dependency Rule

Die Abhängigkeiten dürfen nur in folgende Richtung verlaufen:

```text
UI
 ↓
Features
 ↓
Shared Components
 ↓
Services
 ↓
IPC
 ↓
System
```

Umgekehrte Abhängigkeiten sind verboten.

---

# Definition of Done

Die Repository-Struktur gilt als korrekt wenn:

- Jede Datei einen klaren Verantwortungsbereich besitzt
- Keine zyklischen Abhängigkeiten existieren
- Feature-Module voneinander unabhängig bleiben
