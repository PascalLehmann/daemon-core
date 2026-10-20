# Project Structure

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Dieses Dokument beschreibt die offizielle Struktur des Daemon-Core Repositories.

---

# Repository Layout

daemon-core/

├── .github/
├── assets/
├── config/
├── docs/
├── ipc/
├── services/
├── themes/
│
├── daemon-shared/
├── daemon-theme/
├── daemon-greeter/
├── daemon-lockscreen/
├── daemon-bar/
├── daemon-dashboard/
├── daemon-notifications/
├── daemon-controlcenter/
├── daemon-wallpaper/

---

# Verantwortlichkeiten

## daemon-shared

Wiederverwendbare UI-Komponenten.

Darf enthalten:

- Buttons
- Cards
- Dialogs
- Inputs

Darf nicht enthalten:

- Business Logic
- Systemzugriffe

---

## services

Business Logic.

---

## ipc

Systemadapter.

---

## themes

Alle Themes.

---

## docs

Dokumentation.

---

## config

Schemas und Standardkonfigurationen.

---

## assets

Fonts, Icons, Wallpaper, Sounds.
