# Configuration Specification

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Dieses Dokument definiert die Konfigurationsarchitektur von Daemon-Core.

Ziele:

- Einheitliche Konfiguration
- Vorhersagbares Verhalten
- Versionierbarkeit
- Migrationen
- Sichere Updates

---

# Grundprinzipien

## Single Source of Truth

Jede Einstellung besitzt genau einen Speicherort.

Keine Duplikate.

---

## Zentralisierte Konfiguration

Alle Benutzereinstellungen befinden sich unter:

```text
~/.config/daemon-core/
```

---

## Versionskontrolle

Jede Konfigurationsdatei besitzt eine Versionsnummer.

---

## Migrationen

Alte Konfigurationen müssen automatisch aktualisiert werden können.

---

# Verzeichnisstruktur

```text
~/.config/daemon-core/

config.json
settings.json
state.json
profile.json
theme.json
```

---

# config.json

Enthält globale Konfiguration.

Beispiel:

```json
{
  "version": "1.0",
  "profile": "desktop",
  "theme": "daemon-dark",
  "locale": "de_DE"
}
```

---

# settings.json

Benutzeranpassungen.

Beispiel:

```json
{
  "animations": true,
  "blur": true,
  "showWeather": true,
  "showClockSeconds": false
}
```

---

# state.json

Laufzeitdaten.

Beispiel:

```json
{
  "lastWorkspace": 2,
  "lastTheme": "daemon-dark"
}
```

---

# profile.json

Aktives Profil.

```json
{
  "profile": "developer"
}
```

---

# theme.json

Aktives Theme.

```json
{
  "theme": "daemon-dark"
}
```

---

# Zuständigkeiten

## ConfigService

Verwaltet:

- config.json

---

## SettingsService

Verwaltet:

- settings.json

---

## StateService

Verwaltet:

- state.json

---

## ThemeService

Verwaltet:

- theme.json

---

## ProfileService

Verwaltet:

- profile.json

---

# Validierung

Vor dem Laden prüfen:

- JSON gültig
- Version vorhanden
- Pflichtfelder vorhanden

---

# Recovery

Fehlende Dateien:

→ Defaults erzeugen

Ungültige Dateien:

→ Backup erzeugen
→ Defaults erzeugen

---

# Verboten

Komponenten dürfen keine eigenen Konfigurationsdateien anlegen.

Beispiel:

```text
~/.config/button/
```

nicht erlaubt.

---

# Definition of Done

Konfiguration gilt als gültig wenn:

- Schema gültig
- Version vorhanden
- Validierung erfolgreich
- Migration möglich
