# Testing

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Dieses Dokument definiert die Teststrategie von Daemon-Core.

Kein Feature gilt als fertig ohne Tests.

---

# Teststufen

## Level 1

Syntax Tests

Prüfen:

- JSON
- YAML
- TOML
- QML

---

## Level 2

Component Tests

Ziel:

Jede Komponente isoliert testen.

Beispiele:

```text
Button.qml
Card.qml
Avatar.qml
```

---

## Level 3

Integration Tests

Prüfen:

- Services
- Komponenten
- Themes

---

## Level 4

System Tests

Prüfen:

- Greeting
- Login
- Session Start
- Hyprland

---

# Testmatrix

## Display

- Single Monitor
- Dual Monitor
- Triple Monitor

---

## Auflösung

- 1080p
- 1440p
- 4K

---

## Formate

- 16:9
- 21:9
- 32:9

---

## Skalierung

- 100 %
- 125 %
- 150 %
- 200 %

---

# Login Tests

Prüfen:

- Korrektes Passwort
- Falsches Passwort
- Leeres Passwort
- Benutzerwechsel
- Sessionwechsel

---

# Theme Tests

Prüfen:

- Dark
- Light
- Themewechsel
- Hot Reload

---

# Recovery Tests

Prüfen:

- Defekte Konfiguration
- Fehlendes Theme
- Fehlende Assets

---

# Performance Tests

Prüfen:

- Startup
- Login
- Speicherverbrauch

---

# Regression Tests

Nach jedem größeren Merge prüfen:

- Greeter
- Lockscreen
- Dashboard
- Notifications
- Bar

---

# CI Pflicht

Jeder Pull Request muss erfolgreich bestehen.

---

# Definition of Done

Tests erfolgreich:

- Syntax
- Komponente
- Integration
- System
