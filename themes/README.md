# Themes

This directory contains all installed themes for Daemon-Core.

## Required structure

```text
themes/
├── daemon-dark/
├── daemon-light/
└── ...
```

## Theme requirements

Each theme directory must contain:

- `theme.json`
- optional asset folders such as `wallpapers/`, `icons/`, `fonts/`, and `sounds/`

## Validation

Theme loading must validate the manifest before activation.
