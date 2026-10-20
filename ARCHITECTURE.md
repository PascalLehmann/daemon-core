# Daemon-Core Architecture

## Stack

- Wayland
- Hyprland
- greetd
- Quickshell
- Qt 6
- QML
- JavaScript
- JSON

## Layer model

```text
User Interface
  ↓
Feature Modules
  ↓
Shared Components
  ↓
Services
  ↓
IPC Adapters
  ↓
System Integration
```

## Dependency direction

```text
UI -> Shared -> Services -> IPC -> System
```

## Rules

- UI components render only
- Services own logic
- Tooling is outside runtime
- Theme selection is centralized
- Recovery is mandatory
