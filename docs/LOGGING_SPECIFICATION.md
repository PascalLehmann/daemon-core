# Logging Specification

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Dieses Dokument definiert das Logging-System von Daemon-Core.

---

# Goals

- Nachvollziehbarkeit
- Fehleranalyse
- Debugging
- Unterstützung für CI und Entwicklung

---

# LoggerService

Alle Logs laufen über:

```text
LoggerService
```

---

# Log Levels

## DEBUG

Entwicklungsinformationen.

Beispiele:

- Theme geladen
- Signal empfangen

---

## INFO

Normale Systeminformationen.

Beispiele:

- Profil gewechselt
- Session gestartet

---

## WARNING

Unerwartete Zustände.

Beispiele:

- Theme Wert fehlt
- Wallpaper nicht gefunden

---

## ERROR

Fehlerhafte Zustände.

Beispiele:

- Datei kann nicht geladen werden
- Service startet nicht

---

## CRITICAL

Schwerwiegende Fehler.

Beispiele:

- Konfiguration beschädigt
- Recovery Mode aktiviert

---

# Format

Empfohlenes Format:

```text
2026-10-20T12:00:00Z
INFO
ThemeService
Theme loaded successfully
```

---

# Structured Format

Langfristiges Ziel:

```json
{
  "timestamp": "2026-10-20T12:00:00Z",
  "level": "INFO",
  "service": "ThemeService",
  "message": "Theme loaded"
}
```

---

# Log Storage

Geplanter Speicherort:

```text
~/.local/share/daemon-core/logs/
```

---

# Retention Strategy

Geplante Regeln:

- Maximale Dateigröße
- Rotation
- Archivierung

---

# Security Rules

Logs dürfen niemals enthalten:

- Passwörter
- Tokens
- API Keys
- Cookies
- Session Secrets

---

# Recovery Logging

Safe Mode muss immer protokollieren:

- Ursache
- Zeitpunkt
- Betroffene Dienste

---

# CI Logging

CI Ausgaben sollen enthalten:

- Teststatus
- Fehler
- Validierungsfehler

---

# Definition of Done

Logging gilt als vollständig wenn:

- LoggerService verwendet wird
- Log-Level korrekt genutzt werden
- Sicherheitsregeln eingehalten werden
- Fehler nachvollziehbar sind
