# Daemon-Core Architecture

Version: 1.1

Status: Draft

Last Updated: 2026-10-20

---

# Overview

Daemon-Core is a modular desktop shell framework for Linux.

It is built on top of:

- Wayland
- Hyprland
- Quickshell
- greetd
- Qt6
- QML

Daemon-Core is not a distribution, compositor, desktop environment, or window manager.

Daemon-Core provides the shell layer that sits between the user and the operating system.

---

# Architecture Goals

The architecture is designed around the following goals:

- Maintainability
- Extensibility
- Reusability
- Consistency
- Reliability
- Simplicity

---

# Core Principles

## Separation of Concerns

Every layer has a single responsibility.

Examples:

- Services provide data
- Components render data
- Themes provide styling
- Features orchestrate workflows

---

## Single Source of Truth

Data must have exactly one authoritative owner.

Examples:

- ThemeService owns themes
- ConfigService owns configuration
- StateService owns runtime state

---

## Composition over Duplication

Components should be assembled.

Components should never be copied.

---

## Service Driven Architecture

Business logic belongs to services.

User interface components consume services.

User interface components must not become services.

---

## Theme First

No visual values are hardcoded inside components.

All styling comes from the active theme.

---

# Layer Model

```text
┌───────────────────────────────┐
│ User Interface Layer          │
├───────────────────────────────┤
│ Feature Layer                 │
├───────────────────────────────┤
│ Shared Component Layer        │
├───────────────────────────────┤
│ Service Layer                 │
├───────────────────────────────┤
│ IPC Layer                     │
├───────────────────────────────┤
│ System Integration Layer      │
├───────────────────────────────┤
│ Linux / Wayland               │
└───────────────────────────────┘
```

---

# Repository Structure

```text
daemon-core/

├── .github/
│
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── wallpapers/
│   └── sounds/
│
├── config/
│   ├── defaults/
│   └── schemas/
│
├── docs/
│
├── services/
│
├── ipc/
│
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
└── ARCHITECTURE.md
```

---

# Layer Definitions

## Layer 1 - System Integration

Responsible for direct communication with:

- Hyprland
- greetd
- PAM
- PipeWire
- NetworkManager
- BlueZ
- systemd
- DBus

Only this layer may directly communicate with external system resources.

---

## Layer 2 - IPC Layer

Provides communication bridges between Daemon-Core and external systems.

Examples:

```text
HyprlandIPC
DBusIPC
PipeWireIPC
NetworkManagerIPC
BluezIPC
```

Any protocol-specific code belongs here.

---

## Layer 3 - Service Layer

Provides business logic.

Services convert low-level data into application models.

Examples:

```text
AudioService
BluetoothService
ConfigService
LoggerService
NetworkService
NotificationService
PowerService
ProfileService
SessionService
SettingsService
StateService
StorageService
ThemeService
UpdateService
WallpaperService
WeatherService
```

---

## Layer 4 - Shared Components

Contains reusable UI elements.

Examples:

```text
Button.qml
Avatar.qml
Card.qml
Dialog.qml
TextField.qml
ListItem.qml
SearchField.qml
```

Shared components must not contain business logic.

---

## Layer 5 - Feature Layer

Complete user-facing applications.

Examples:

```text
Daemon Greeter
Daemon Lockscreen
Daemon Bar
Daemon Dashboard
Daemon Notifications
Daemon Control Center
```

---

## Layer 6 - User Interface Layer

Visible interface presented on screen.

Rendered through Quickshell and QtQuick.

---

# Dependency Rules

Dependencies may only point downward.

Allowed:

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

Forbidden:

```text
Service → Dashboard
Service → Bar
Service → Greeter

IPC → UI
IPC → Components

System → Services
```

---

# Import Rules

Allowed:

```text
Greeter
  └─ imports Shared Components

Greeter
  └─ imports Services
```

Forbidden:

```text
Bar imports Greeter

Dashboard imports Lockscreen

NotificationCenter imports Greeter
```

Feature modules must remain independent.

---

# Authentication Architecture

Daemon-Core delegates authentication to greetd.

Daemon-Core does not implement authentication itself.

Login Flow:

```text
greetd
  │
  ▼
Daemon Greeter
  │
  ▼
SessionService
  │
  ▼
Hyprland
```

Responsibilities:

```text
greetd
  Authentication

Daemon Greeter
  User Interface

SessionService
  Session Handling

Hyprland
  Desktop Session
```

---

# IPC Architecture

## Hyprland IPC

Used for:

- Workspaces
- Windows
- Active Workspace
- Window Information

---

## DBus IPC

Used for:

- Notifications
- System Services
- Session Events
- Power Management

---

## PipeWire IPC

Used for:

- Audio
- Media Sessions
- Device Management

---

## BlueZ IPC

Used for:

- Bluetooth Devices
- Bluetooth State

---

## NetworkManager IPC

Used for:

- WiFi
- Ethernet
- VPN

---

# Configuration Architecture

Configuration is centralized.

Users must never edit random files spread throughout the repository.

Location:

```text
~/.config/daemon-core/
```

---

# Configuration Files

```text
~/.config/daemon-core/

config.json
settings.json
state.json
profile.json
theme.json
```

---

## config.json

System level configuration.

Example:

```json
{
  "version": "1.0",
  "profile": "desktop",
  "theme": "daemon-dark"
}
```

---

## settings.json

User configurable preferences.

Example:

```json
{
  "animations": true,
  "blur": true,
  "showWeather": true
}
```

---

## state.json

Runtime persistence.

Example:

```json
{
  "lastWorkspace": 2,
  "lastTheme": "daemon-dark"
}
```

---

## profile.json

Selected profile.

Example:

```json
{
  "profile": "developer"
}
```

---

## theme.json

Selected theme reference.

Example:

```json
{
  "theme": "daemon-dark"
}
```

---

# Theme Architecture

Every theme lives in:

```text
themes/<theme-name>/
```

Example:

```text
themes/

daemon-dark/
daemon-light/
catppuccin/
nord/
```

---

# Theme Structure

```text
themes/daemon-dark/

theme.json

wallpapers/
icons/
fonts/
sounds/
```

---

# Theme Schema

Required structure:

```json
{
  "name": "Daemon Dark",
  "version": "1.0",

  "colors": {},
  "spacing": {},
  "radius": {},
  "typography": {},

  "animations": {},
  "effects": {},

  "wallpaper": {},
  "icons": {}
}
```

---

# Theme Tokens

## Colors

```json
{
  "primary": "",
  "secondary": "",
  "background": "",
  "surface": "",
  "text": "",
  "error": "",
  "warning": "",
  "success": ""
}
```

---

## Radius

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

## Spacing

```json
{
  "xs": 4,
  "sm": 8,
  "md": 16,
  "lg": 24,
  "xl": 32
}
```

---

## Typography

```json
{
  "caption": 12,
  "body": 14,
  "title": 24,
  "heading": 32
}
```

---

# State Management

## ConfigService

Persistent application configuration.

Stores:

- Theme
- Language
- Profiles
- Layout

---

## SettingsService

User preferences.

Stores:

- Animation settings
- Blur settings
- Widget preferences

---

## StateService

Runtime state.

Stores:

- Current workspace
- Current media state
- Active window
- Current session status

---

# Profile Architecture

Profiles provide predefined experiences.

Supported profiles:

```text
Minimal
Laptop
Desktop
Gaming
Creator
Developer
```

Each profile defines:

- active modules
- default layout
- default theme
- enabled widgets

---

# Notification Architecture

```text
Application
      │
      ▼

NotificationDaemon
      │
      ▼

NotificationService
      │
      ▼

NotificationCenter
      │
 ┌────┴─────┐
 ▼          ▼

Popup    History
```

---

# Wallpaper Architecture

```text
Wallpaper Files
        │
        ▼

WallpaperService
        │
        ▼

BackgroundRenderer
        │
┌───────┼────────┐
▼       ▼        ▼

Greeter Lock Dashboard
```

---

# Recovery Architecture

Daemon-Core must always remain usable.

Recovery Levels:

```text
User Theme
    │
Failure
    ▼

Default Theme
    │
Failure
    ▼

Safe Mode
```

Safe Mode uses:

- default theme
- default profile
- minimal services
- enhanced logging

Safe Mode must always work.

---

# Logging Architecture

All logging is centralized.

Service:

```text
LoggerService
```

Levels:

```text
DEBUG
INFO
WARNING
ERROR
CRITICAL
```

Direct print statements should be avoided.

---

# Future Plugin Architecture

Target Version:

```text
2.x
```

Directory:

```text
plugins/

weather/
calendar/
rss/
ai-assistant/
media/
```

Plugins may:

- use shared components
- use services

Plugins may not:

- replace core services
- modify framework internals

---

# Security Principles

Rules:

- Never store passwords
- Never bypass PAM
- Never store secrets in themes
- Use least privilege
- Validate external input

---

# Architecture Rule #1

New features must never reduce architectural quality.

When in doubt:

Choose fewer features.

Choose better architecture.
