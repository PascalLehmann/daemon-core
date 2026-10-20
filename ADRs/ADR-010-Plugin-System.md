# ADR-010

## Title

Plugin Architecture

## Status

Proposed

## Decision Date

2026-10-20

---

## Context

Benutzer sollen Funktionen erweitern können ohne Core-Komponenten anzupassen.

---

## Decision

Daemon-Core erhält langfristig ein Plugin-System.

---

## Plugin Beispiele

- Weather
- Calendar
- RSS
- Media
- AI Assistant

---

## Regeln

Plugins dürfen:

- Shared Components verwenden
- Services verwenden

Plugins dürfen nicht:

- Core Services ersetzen
- Core Framework verändern
- Authentifizierung beeinflussen

---

## Consequences

### Positive

- Hohe Erweiterbarkeit
- Community Contributions

### Negative

- Höhere Komplexität

---

## Related Documents

- ARCHITECTURE.md
- ROADMAP.md
