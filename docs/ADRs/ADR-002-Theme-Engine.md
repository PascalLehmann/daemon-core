# ADR-002

## Title

Central Theme Engine

## Status

Accepted

## Decision Date

2026-10-20

---

## Context

Alle Module sollen dieselbe Designsprache verwenden.

Farben und Designwerte dürfen nicht mehrfach definiert werden.

---

## Decision

Alle visuellen Werte werden über ThemeService bereitgestellt.

Komponenten verwenden ausschließlich Theme Tokens.

---

## Theme Tokens

- Colors
- Radius
- Spacing
- Typography
- Animations
- Effects

---

## Consequences

### Positive

- Konsistentes Design
- Themewechsel ohne Codeänderungen
- Wiederverwendbarkeit

### Negative

- Höherer Initialaufwand

---

## Related Documents

- THEME_SPECIFICATION.md
- ARCHITECTURE.md
