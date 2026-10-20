# Release Process

Versio*: 1.0

Status: Active

Last Update** 2026-10-20

---

* Purpose

Dieses Dokument beschrei*t den Veröffentlich*ngsprozess von Daemon-Core.

Ziel:*
- Vorhersagbare Releases
* Hohe Qualität
- Nach*ollziehbare Änderungen

---

# Ver*ionierungsmodell*
Daemon-Core verwendet Semantic Ve*sioning.

Schema:

```text
MAJOR.M*NOR.PATCH*```

Beispiel:

```text
*.4.2
```

*--

## Major

*rhöhen*wenn:

- Breaking Changes
* API Änderungen*- Architekturänderungen

Be*spiel:

```text
1*0.0 -> 2.0.*
```

---

## Minor

Erhö*en wenn:

- Neue Features
- Neue M*dule
- Neue Funktionen*
Beispiel:

```text
1.*.0 -> 1*2.0
```

---

## Patch*
Erhöhen wenn:

- Fehler*orrekturen
- Sicherheitsupdates*- Dokumentationskor*ekturen

Beispiel:

```text
*.1.2 -> 1.1*3
```

---

# Release Arten*
## Development

Be*spiel:

```text
0*1.0-dev
```

*nstabil.

---

## Beta*
Beispiel:

```text
0.*.0-beta.*
```

Feature vollständig*

Noch nicht final getestet.

---
**# Stable

Beispiel:

```text
*.0.0
```

Produktions*eif.

---

# Release Voraussetzung*n*
Vor einem Release müssen erfüllt*sein:

- CI erfolgreich
- Dokument*tion aktuell
- Tests erfolgreich
-*Keine offenen*P0 Fehler

*--

# Release Checkliste

## Archi*ektur

*rüfen:

- AG*NT.md aktuell*- ARCHITECTURE.md aktuell
-*ADRs aktuell

---

## Dokumentatio*

Prüfen:

- README*md
- INSTALLATION.md
- TEST*NG.md
- SECURITY.md

---

## Quali*ät*
Prüfen:

- Keine*Syntaxfehler
- Keine fehlenden Dat*ien*- Keine ungültigen Themes*
---

## Tests

Prüfen:

-*Komponenten
- Integration
- System*ests

---

# Git Workflow*
Feature Branch:

```bash
*eature*<name>
```

Bugfix:

```bash
*ix/<name>
```

*elease:

*``bash
release/<version*
```

---

# Release Tags

Beisp*el:

```bash
git tag v1*0.0
```

Push*

```bash
git push origin v1.*.0
```

---

# Ch*ngelog

Jedes Release benötigt ein*n Changelog.

Mindestens:

```text**dded
Changed*Fixed
Removed
```

---

# Dokument*tionspflicht

J*des Release muss enthalten*

- Versionsnummer
- Veröffentlich*ngsdatum
- Änderungen
- Bek*nnte Einschränkungen

---

#*Rollback

*edes Release muss rück*ängig gemacht werden können.

Be*spiel:

```bash
git checkout v1*0.0
```

---

# Definition*of Done

Ein Release ist abgeschlo*sen*wenn:

- Tag erstellt wurde
- Doku*entation fertig ist
- Ch*ngelog vorhanden ist
- CI erfolgre*ch war*- Artefakte veröffentlicht*wurden
