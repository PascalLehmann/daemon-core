# Security

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Dieses Dokument definiert die Sicherheitsprinzipien von Daemon-Core.

---

# Sicherheitsziele

Daemon-Core soll:

- Passwörter schützen
- Sessions schützen
- Konfiguration absichern
- Sicheren Code fördern

---

# Authentifizierung

Daemon-Core implementiert keine eigene Authentifizierung.

Authentifizierung erfolgt über:

```text
greetd
PAM
```

---

# Passwörter

Verboten:

- Passwörter speichern
- Passwörter loggen
- Passwörter cachen

---

# Secrets

Geheimnisse dürfen niemals gespeichert werden in:

```text
theme.json
config.json
settings.json
state.json
```

---

# Logs

Logs dürfen niemals enthalten:

- Passwörter
- Tokens
- API Keys
- Cookies

---

# Mindestprinzip

Least Privilege Principle.

Komponenten erhalten nur die Rechte die benötigt werden.

---

# Theme Sicherheit

Themes dürfen:

- Farben definieren
- Fonts definieren
- Assets referenzieren

Themes dürfen nicht:

- Code ausführen
- Shell Befehle ausführen
- Dateien schreiben

---

# Plugin Sicherheit

Zukünftige Plugins dürfen nicht:

- Core Services überschreiben
- Authentifizierung umgehen
- Konfiguration manipulieren

---

# Externe Abhängigkeiten

Neue Abhängigkeiten benötigen:

- Lizenzprüfung
- Wartungsprüfung
- Sicherheitsbewertung

---

# Disclosure Policy

Sicherheitsprobleme bitte nicht öffentlich melden.

Stattdessen:

- Maintainer kontaktieren
- Reproduktionsschritte liefern
- Auswirkungen beschreiben

---

# Recovery

Bei Sicherheitsproblemen:

1. Problem isolieren
2. Ursache analysieren
3. Patch erstellen
4. Dokumentation aktualisieren

---

# Sichere Entwicklung

Vor jedem Release prüfen:

- Keine Secrets eingecheckt
- Keine Debug Passwörter
- Keine Hardcoded Credentials
- Keine unnötigen Rechte

---

# Definition of Done

Ein Sicherheitsproblem gilt als gelöst wenn:

- Ursache behoben
- Test vorhanden
- Dokumentation aktualisiert
- Regression ausgeschlossen
