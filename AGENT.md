# AGENT.md

# Daemon-Core AI Agent Guidelines

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

This document defines the mandatory development rules, architectural principles, priorities, and engineering standards for all AI agents working on the Daemon-Core project.

Applicable to:

- Claude Code
- GitHub Copilot
- Cursor
- Aider
- OpenCode
- Custom Agents
- Future AI Development Tools

This document is authoritative.

If conflicts occur between files:

```text
AGENT.md
↓
ARCHITECTURE.md
↓
ADR Documents
↓
README.md
```

The higher document takes precedence.

---

# Project Overview

## Project Name

Daemon-Core

## Mission

Daemon-Core is a modern desktop shell framework built around:

- Hyprland
- Quickshell
- greetd
- Qt6
- QML
- Wayland

The goal is to provide a fully integrated desktop experience through a single architecture, design language, and theme system.

---

# Vision

Most Linux systems are assembled from many independent projects:

```text
Login          → SDDM
Lockscreen     → Hyprlock
Panel          → Waybar
Launcher       → Rofi
Notifications  → Mako
Power Menu     → Wlogout
Settings       → Custom Scripts
```

Every application introduces:

- different configurations
- different design systems
- different dependencies
- different update cycles

Daemon-Core aims to provide:

```text
One Platform
One Theme Engine
One Design Language
One Architecture
```

---

# Long-Term Vision

Daemon-Core should become a unified shell ecosystem including:

## Authentication

- Login Manager
- Session Manager
- User Selection

---

## Security

- Lockscreen
- PAM Integration
- Session Security
- Future Authentication Extensions

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
- Component API

---

# Non Goals

Daemon-Core is NOT:

- A Linux Distribution
- A Desktop Environment
- A Hyprland Fork
- A Wayland Compositor
- A Window Manager
- A Theme Collection

Daemon-Core is a shell framework built on top of existing technologies.

---

# Supported Platforms

## Primary Target

- Arch Linux

---

## Secondary Targets

- CachyOS
- EndeavourOS

---

## Future Targets

- Fedora
- NixOS

---

# Technology Stack

## Display Protocol

- Wayland Only

---

## Window Management

- Hyprland

---

## Login Management

- greetd

---

## UI Framework

- Quickshell
- QtQuick
- Qt6
- QML

---

## Primary Languages

- QML
- JavaScript
- JSON
- YAML
- Bash

---

# Engineering Principles

## Principle 1

Wayland First

New features must not depend on X11.

---

## Principle 2

Quickshell First

All graphical interfaces must use:

- Quickshell
- QtQuick
- QML

---

## Principle 3

Modularity First

Every subsystem must be independently maintainable.

Examples:

- Greeter
- Lockscreen
- Dashboard
- Notification Center

should remain loosely coupled.

---

## Principle 4

Architecture Over Features

Good architecture is more important than feature count.

---

## Principle 5

Maintainability Over Cleverness

Prefer simple code over clever code.

---

## Principle 6

Reuse Over Duplication

Never duplicate an existing component.

Search before creating.

---

## Principle 7

Services Over Scripts

Business logic belongs in services.

Never implement system logic directly in UI components.

Bad:

```qml
Button {
    onClicked: system("nmcli ...")
}
```

Good:

```qml
Button {
    onClicked: NetworkService.connect()
}
```

---

# Priority Model

Tasks must always be evaluated in this order.

---

## P0 Critical

Must be resolved immediately.

Examples:

- Crashes
- Security issues
- Authentication failures
- Data loss
- Session failures
- PAM failures

No feature work may be done while unresolved P0 issues exist.

---

## P1 Architecture

Highest development priority.

Examples:

- Theme Engine
- Services
- Configuration Layer
- State Management
- Shared Components

---

## P2 Core Features

Examples:

- Greeter
- Lockscreen
- Bar
- Dashboard
- Notifications

---

## P3 User Experience

Examples:

- Setup Wizard
- Profiles
- Recovery Features
- Import/Export

---

## P4 Cosmetics

Examples:

- Animations
- Additional Theme Variants
- Micro-interactions

---

# Decision Hierarchy

When multiple solutions exist:

```text
1. Maintainability
2. Extensibility
3. Readability
4. Testability
5. Reliability
6. Performance
7. Appearance
```

Always evaluate in that order.

---

# Repository Structure

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

# Folder Rules

## daemon-shared

Reusable UI components only.

Examples:

```text
Button.qml
Card.qml
Avatar.qml
Dialog.qml
TextField.qml
```

No business logic.

---

## services

Contains system integration and business logic.

Examples:

```text
AudioService.qml
BluetoothService.qml
ConfigService.qml
LoggerService.qml
NetworkService.qml
NotificationService.qml
PowerService.qml
SessionService.qml
SettingsService.qml
StorageService.qml
ThemeService.qml
UpdateService.qml
WallpaperService.qml
WeatherService.qml
```

---

## themes

Theme resources only.

No business logic.

No services.

No executable scripts.

---

## docs

Documentation only.

---

# Design System Rules

## Required Design Tokens

Every visual property must be provided through design tokens.

Supported categories:

```text
Colors
Spacing
Radius
Typography
Icons
Animations
Effects
Blur
Shadows
```

---

## Forbidden

```qml
color: "#ffffff"
```

```qml
radius: 13
```

```qml
font.pixelSize: 29
```

---

## Allowed

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

# Theme Engine Requirements

Every theme must provide:

```text
theme.json
```

Minimum structure:

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

# State Management

## Persistent State

Managed by:

```text
ConfigService
```

Examples:

- Theme
- User Preferences
- Layout Settings

---

## Runtime State

Managed by:

```text
StateService
```

Examples:

- Current Workspace
- Current Window
- Active Media Session

---

## Rule

UI components must never directly persist state.

All persistence goes through services.

---

# Configuration Rules

All user-modifiable settings must be centralized.

No component may create its own configuration file.

Centralized through:

```text
ConfigService
```

---

# Recovery System

Daemon-Core must never become unusable because of:

- Invalid Themes
- Corrupt Configuration
- Missing Assets

Fallback strategy:

```text
Attempt 1
↓
User Configuration

Attempt 2
↓
Default Theme

Attempt 3
↓
Safe Mode
```

Safe Mode must always remain operational.

---

# Dependency Policy

Before introducing a new dependency, verify:

- License Compatibility
- Active Maintenance
- Security History
- Long-Term Necessity

A new dependency should be the last option.

Major dependencies require an ADR.

---

# ADR Requirements

An ADR is required for:

- New Services
- New System Layers
- Plugin Architecture Changes
- Theme Architecture Changes
- Session Flow Changes
- Authentication Changes
- Major Dependencies

No exception.

---

# Versioning Strategy

Daemon-Core follows Semantic Versioning.

```text
MAJOR.MINOR.PATCH
```

Example:

```text
1.2.3
```

Where:

```text
1 = Breaking Changes
2 = New Features
3 = Bug Fixes
```

---

# Testing Rules

No work is considered complete without validation.

---

## Test Level 1

Syntax Validation

Required:

- QML
- JSON
- YAML
- TOML

---

## Test Level 2

Component Testing

Every component must work in isolation.

Examples:

```text
Button.qml
Card.qml
Avatar.qml
```

---

## Test Level 3

Integration Testing

Validate:

- Themes
- Services
- Shared Components

---

## Test Level 4

System Testing

Validate:

- greetd
- Authentication
- Session Launch
- Hyprland Startup

---

# Required Test Matrix

## Login

Must validate:

- Valid User
- Invalid Password
- Session Change
- Logout
- Reboot
- Cold Boot

---

## Themes

Must validate:

- Dark Themes
- Light Themes
- Multi Monitor
- HiDPI
- Ultrawide

---

## Display Layouts

Must validate:

- Single Monitor
- Dual Monitor
- Triple Monitor
- Mixed Resolution
- HiDPI Scaled

---

# CI Rules

No merge without passing CI.

All Pull Requests must pass:

- Syntax Validation
- Documentation Validation
- Theme Validation
- Repository Structure Validation

---

# Performance Goals

Performance must be continuously measured.

Avoid hardcoded performance guarantees.

General targets:

- Fast startup
- Responsive UI
- Efficient memory usage
- Minimal unnecessary background activity

---

# Setup Wizard Strategy

Inspired by successful Linux onboarding workflows.

Future installer goals:

- Profile Selection
- Theme Selection
- Wallpaper Selection
- greetd Setup
- Hyprland Integration

---

# Preset Strategy

The platform should support full desktop presets.

Examples:

- Minimal
- Laptop
- Desktop
- Gaming
- Creator
- Developer

Presets must be reversible.

---

# Backup & Restore Strategy

Future functionality:

```bash
daemon backup create
daemon backup restore
```

The user must always be able to restore a working state.

---

# Active Milestones

## M1 Foundation

Status:

In Progress

Tasks:

- Repository Structure
- Theme Engine
- Shared Components
- Service Layer
- State Management

---

## M2 Greeter

Tasks:

- greetd Integration
- User Selection
- Password Input
- Session Selection

Definition of Done:

User can successfully launch Hyprland.

---

## M3 Theme System

Tasks:

- Color Tokens
- Typography Tokens
- Radius Tokens
- Spacing Tokens
- Wallpaper Support

Definition of Done:

Theme switching works without component rewrites.

---

## M4 Lockscreen

Tasks:

- PAM Integration
- Clock
- Wallpaper Blur
- Notifications

---

## M5 Bar

Tasks:

- Workspaces
- Audio
- Battery
- Network
- Bluetooth

---

## M6 Dashboard

Tasks:

- Search
- Launcher
- Quick Actions
- Widgets

---

## M7 Notification Center

Tasks:

- History
- Actions
- Grouping

---

## M8 Control Center

Tasks:

- Audio
- Network
- Bluetooth
- Display
- Power

---

# Reference Projects

These repositories may be studied for:

- Architecture
- Design Systems
- User Experience
- Component Structure

Code and assets must not be copied.

---

## Core Technology

- HyprWM / Hyprland
- kennylevinsen / greetd
- quickshell-mirror / quickshell

---

## Login & Authentication

- taleroangel / greetd-qsgreeter
- Darkkal44 / qylock
- sddm / sddm

---

## Shell Architecture

- caelestia-dots / shell
- end-4 / dots-hyprland
- ekremx25 / quickshell
- tripathiji1312 / quickshell
- singhashu23 / hypr-quickshell

---

## Desktop Experience

- AvengeMedia / DankMaterialShell
- AhmedSaadi0 / NibrasShell
- mylinuxforwork
- rhythmcreative / hyprland

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

## Theme Inspiration

- Keyitdev / sddm-astronaut-theme
- catppuccin / sddm
- xCaptaiN09 / pixie-sddm
- 3ximus / aerial-sddm-theme
- uiriansan / SilentSDDM
- stepanzubkov / where-is-my-sddm-theme

---

# Definition of Done

A task is complete when:

- Functionality works
- Documentation exists
- Tests pass
- Theme compatibility exists
- Multi-monitor support is considered
- Error handling exists
- Architecture rules are respected

---

# Agent Workflow

Before implementing anything:

```text
1. Read README.md
2. Read ARCHITECTURE.md
3. Read relevant ADRs
4. Reuse existing components
5. Design solution
6. Implement
7. Test
8. Document
```

---

# Final Rule

Maintainability is more important than features.

Architecture is more important than appearance.

Consistency is more important than speed.
