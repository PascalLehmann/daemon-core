# daemon-shared

Shared UI elements live here.

## Allowed content

- reusable widgets
- shared primitives
- generic UI components
- shared style and theming primitives

## Prohibited content

- business logic
- IPC code
- direct system calls
- service-state ownership

## Shared style contract

Use `Style.qml` or `StylePalette.qml` for consistent colors, spacing, radii, and typography across all modules.
