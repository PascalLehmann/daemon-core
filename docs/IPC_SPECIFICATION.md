# IPC Specification

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Dieses Dokument definiert die Kommunikation zwischen Daemon-Core und externen Systemen.

---

# Principles

## Isolation

Externe Systeme werden ausschließlich über die IPC-Schicht angesprochen.

---

## Encapsulation

Features und UI kennen keine Protokolldetails.

---

## Service Access Only

Nur Services dürfen IPC verwenden.

---

# IPC Layer

```text
Feature
   ↓
Service
   ↓
IPC
   ↓
System
```

---

# Hyprland IPC

## Purpose

Kommunikation mit Hyprland.

---

## Daten

- Workspaces
- Fenster
- Monitore
- Aktiver Workspace

---

## Konsumenten

- Bar
- Dashboard
- SessionService

---

# DBus IPC

## Purpose

Systemkommunikation.

---

## Daten

- Notifications
- Session Events
- Energieereignisse

---

## Konsumenten

- NotificationService
- SessionService
- PowerService

---

# PipeWire IPC

## Purpose

Audio Kommunikation.

---

## Daten

- Lautstärke
- Geräte
- Medieninformationen

---

## Konsumenten

- AudioService

---

# BlueZ IPC

## Purpose

Bluetooth Integration.

---

## Daten

- Geräte
- Status
- Pairing

---

## Konsumenten

- BluetoothService

---

# NetworkManager IPC

## Purpose

Netzwerkverwaltung.

---

## Daten

- WLAN
- Ethernet
- VPN

---

## Konsumenten

- NetworkService

---

# Future IPC

Geplante Integrationen:

```text
Portal APIs
Systemd User Services
Power Profiles
```

---

# Security Rules

IPC Layer darf:

- Daten lesen
- Zustände überwachen

IPC Layer darf nicht:

- UI rendern
- Konfiguration speichern

---

# Definition of Done

Eine IPC Integration gilt als abgeschlossen wenn:

- Stabil verbunden
- Fehler behandelt
- Logging integriert
- Service dokumentiert
