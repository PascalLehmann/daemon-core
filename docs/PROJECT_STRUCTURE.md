# Logging Specification

Version: 1.0

Status: Active

---

# Purpose

Definiert Logging innerhalb von Daemon-Core.

---

# LoggerService

Alle Logs müssen LoggerService verwenden.

---

# Log Levels

DEBUG

Entwicklungsinformationen.

---

INFO

Normale Informationen.

---

WARNING

Unerwartete Zustände.

---

ERROR

Fehler.

---

CRITICAL

Schwerwiegende Fehler.

---

# Verboten

Passwörter loggen.

Tokens loggen.

API Keys loggen.

---

# Log Speicherort

Geplant:

~/.local/share/daemon-core/logs/

---

# Format

2026-10-20T12:00:00Z
INFO
ThemeService
Theme loaded

---

# Rotation

Zukünftig:

- maximale Dateigröße
- alte Logs archivieren
