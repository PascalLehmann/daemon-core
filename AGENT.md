# AGENT.md

This file is the authoritative operating guide for AI agents working on Daemon-Core.

## Priority order

1. AGENT.md
2. ARCHITECTURE.md
3. docs/adr/
4. docs/*.md
5. README.md

## Mission

Daemon-Core is a modular Linux desktop shell framework for Wayland, Hyprland, Quickshell, Qt 6, and greetd.

## Technology rules

- Wayland first
- Quickshell first
- QML + JavaScript for runtime logic
- TypeScript only for tooling and validation
- Services own business logic
- Theme values come from tokens

## Architecture rules

- UI must not do system calls
- services/ is the only place for data logic
- IPC adapters sit behind services
- Theme resolution is centralized
- Fallbacks are mandatory

## Configuration model

- config.json = active system selection
- profile.json = active profile definition
- settings.json = user preferences
- state.json = runtime persistence
- theme.json = active theme reference

## Required reading

- README.md
- ARCHITECTURE.md
- docs/PROJECT_STRUCTURE.md
- docs/CONFIGURATION_SPECIFICATION.md
- docs/THEME_SPECIFICATION.md
