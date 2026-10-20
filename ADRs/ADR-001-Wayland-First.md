# ADR-001

## Title

Wayland First Architecture

## Status

Accepted

## Decision Date

2026-10-20

---

## Context

Daemon-Core basiert auf:

- Hyprland
- Quickshell
- Qt6

Diese Technologien sind primär für Wayland entwickelt.

Eine parallele Unterstützung von X11 würde die Komplexität erheblich erhöhen.

---

## Options

### Option A

Wayland + X11

### Option B

Wayland Only

---

## Decision

Option B wurde gewählt.

Daemon-Core unterstützt ausschließlich Wayland.

---

## Rationale

Vorteile:

- Einfachere Architektur
- Weniger Wartungsaufwand
- Weniger Sonderfälle
- Bessere Integration mit Hyprland

---

## Consequences

### Positive

- Geringere Komplexität
- Schnellere Entwicklung
- Moderne Codebasis

### Negative

- Kein X11 Support

---

## Related Documents

- AGENT.md
- ARCHITECTURE.md
