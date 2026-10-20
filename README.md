# Daemon-Core

Daemon-Core is a modular Linux desktop shell framework built on Wayland, Hyprland, Quickshell, Qt 6, and greetd.

## Goals

- Unified desktop shell experience
- Theme-driven design
- Service-based architecture
- Modular feature development
- Safe fallback behavior
- Clear configuration and state model

## Stack

- Wayland
- Hyprland
- greetd
- Quickshell
- QtQuick
- QML
- JavaScript
- JSON
- TypeScript for tooling only

## Repository structure

```text
daemon-core/
├── config/
├── docs/
├── ipc/
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
├── tools/
├── README.md
├── AGENT.md
├── ARCHITECTURE.md
├── LICENSE
├── CHANGELOG.md
└── .markdownlint.json
```

## Development rules

- QML is the primary UI language.
- JavaScript is used for logic and services.
- TypeScript is only for validation and tooling.
- No UI component may directly access the filesystem or system APIs.
- All system logic must go via services and IPC adapters.

## Quick start

```bash
git clone https://github.com/PascalLehmann/daemon-core.git
cd daemon-core
```

## License

MIT
