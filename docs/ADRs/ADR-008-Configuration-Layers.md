# ADR-008

## Title

Configuration Separation

## Status

Accepted

## Decision Date

2026-10-20

---

## Context

Konfiguration, Einstellungen und Laufzeitzustand haben unterschiedliche Aufgaben.

---

## Decision

Trennung in mehrere Ebenen.

---

## Verantwortlichkeiten

### ConfigService

Systemkonfiguration

### SettingsService

Benutzereinstellungen

### StateService

Laufzeitdaten

---

## Consequences

### Positive

- Klare Zuständigkeiten
- Einfachere Migrationen

### Negative

- Mehr Dateien

---

## Related Documents

- CONFIGURATION_SPECIFICATION.md
- ARCHITECTURE.md
