# ADR-006

## Title

Recovery And Safe Mode

## Status

Accepted

## Decision Date

2026-10-20

---

## Context

Ein fehlerhaftes Theme oder eine beschädigte Konfiguration darf das System nicht unbenutzbar machen.

---

## Decision

Ein integrierter Safe Mode ist verpflichtend.

---

## Recovery Flow

```text
User Theme
    ↓
Default Theme
    ↓
Safe Mode
```

---

## Consequences

### Positive

- System bleibt benutzbar
- Einfachere Fehleranalyse

### Negative

- Zusätzlicher Wartungsaufwand

---

## Related Documents

- ARCHITECTURE.md
- SECURITY.md
