# ADR-009

## Title

Configuration And Update Strategy

## Status

Accepted

## Decision Date

2026-10-20

---

## Context

Updates dürfen Benutzerkonfigurationen nicht zerstören.

---

## Decision

Konfigurationsmigrationen werden explizit unterstützt.

---

## Regeln

- Keine stillen Breaking Changes
- Automatische Migrationen
- Backup vor Migration

---

## Consequences

### Positive

- Zuverlässige Updates
- Weniger Supportaufwand

### Negative

- Mehr Entwicklungsaufwand

---

## Related Documents

- CONFIGURATION_SPECIFICATION.md
- RELEASE_PROCESS.md
