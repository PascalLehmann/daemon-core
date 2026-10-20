# Contributing

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Willkommen

Vielen Dank für dein Interesse an Daemon-Core.

Bitte lies vor dem ersten Beitrag:

- README.md
- AGENT.md
- ARCHITECTURE.md

---

# Entwicklungsprinzipien

Priorität:

1. Wartbarkeit
2. Erweiterbarkeit
3. Lesbarkeit
4. Performance
5. Optik

---

# Workflow

## Schritt 1

Repository forken.

---

## Schritt 2

Feature Branch erstellen.

Beispiel:

```bash
git checkout -b feature/theme-loader
```

---

## Schritt 3

Änderung implementieren.

---

## Schritt 4

Tests ausführen.

---

## Schritt 5

Dokumentation aktualisieren.

---

## Schritt 6

Pull Request erstellen.

---

# Pull Request Regeln

Jeder Pull Request muss:

- Kompilieren
- Tests bestehen
- Dokumentation aktualisieren
- Architekturregeln einhalten

---

# Architekturänderungen

Folgende Änderungen benötigen ein ADR:

- Neue Services
- Neue Layer
- Theme Änderungen
- Plugin Änderungen
- Authentifizierungsänderungen

---

# Coding Style

## Dateinamen

```text
PascalCase.qml
```

Beispiele:

```text
Button.qml
Card.qml
WeatherWidget.qml
```

---

# Komponenten

Wiederverwendbare Komponenten gehören nach:

```text
daemon-shared/
```

---

# Themes

Themes müssen:

- THEME_SPECIFICATION.md folgen
- validierbar sein
- fallbackfähig sein

---

# Commit Nachrichten

Empfohlen:

```text
feat:
fix:
refactor:
docs:
test:
ci:
```

Beispiele:

```text
feat: add theme loader

fix: handle missing wallpaper

docs: update architecture
```

---

# Code of Conduct

- Respektvoll bleiben
- Konstruktive Kritik
- Architektur priorisieren

---

# Definition of Done

Beitrag ist akzeptabel wenn:

- CI erfolgreich
- Dokumentation vorhanden
- Tests erfolgreich
- Architektur eingehalten
