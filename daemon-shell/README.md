# daemon-shell

This module provides the shared shell container for the Dock/Bar and view orchestration layer.

## Responsibilities

- top-level screen shell composition
- theme propagation to all active submodules
- shared state and config wiring
- screen-level layout orchestration

## Rules

- Shell owns layout composition only.
- Feature modules remain responsible for feature logic.
- Theme and config data are supplied via services.
- System access is delegated to IPC bridges.
