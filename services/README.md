# Services

This directory contains the logic layer for Daemon-Core.

## Responsibility

- config loading
- config saving
- profile access
- settings access
- runtime state
- theme switching
- logging
- IPC wrapper logic

## Rule

- No UI rendering
- No direct filesystem access from QML
- Services provide a clean data contract
