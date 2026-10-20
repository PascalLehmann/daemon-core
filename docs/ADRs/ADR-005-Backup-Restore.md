# ADR-005

## Title

Backup And Restore System

## Status

Accepted

## Decision Date

2026-10-20

---

## Context

Benutzerkonfigurationen sollen sicher gespeichert werden können.

---

## Decision

Daemon-Core erhält ein integriertes Backup- und Wiederherstellungssystem.

---

## Geplante Befehle

```bash
daemon backup create
daemon backup restore
```

---

## Consequences

### Positive

- Schnelle Wiederherstellung
- Mehr Sicherheit

### Negative

- Zusätzliche Komplexität

---

## Related Documents

- ROADMAP.md
