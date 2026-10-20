# daemon-theme

This module hosts the theme engine and theme validation logic.

## Responsibilities

- theme loading
- theme validation
- token resolution
- hot reload support

## Rules

- UI components must not define static values.
- Theme data must be resolved through `ThemeService`.
- Fallback behavior must always remain safe.
