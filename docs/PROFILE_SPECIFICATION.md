# Profile Specification

Version: 1.0

Status: Active

---

# Purpose

Definiert Profile innerhalb von Daemon-Core.

---

# Profile

## Minimal

Enthält:

- Greeter
- Lockscreen
- Bar

---

## Laptop

Enthält:

- Bar
- Dashboard
- Battery Widgets

---

## Desktop

Standardprofil.

---

## Gaming

Optimiert für:

- Vollbild
- Wenige Hintergrunddienste

---

## Creator

Zusätzliche Produktivitäts-Widgets.

---

## Developer

Debug Werkzeuge.

Logging aktiv.

---

# Profil Struktur

profile.json

{
  "name": "developer",

  "modules": [
    "bar",
    "dashboard",
    "notifications"
  ]
}

---

# ProfileService

Verantwortlich für:

- Laden
- Wechseln
- Validieren
