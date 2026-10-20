# Service Specification

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Dieses Dokument definiert sämtliche offiziellen Daemon-Core Services.

Services stellen die zentrale Business-Logik des Systems bereit.

---

# Service Principles

## Single Responsibility

Jeder Service besitzt genau eine Verantwortung.

---

## No UI

Services dürfen keine UI-Komponenten enthalten.

---

## Framework Neutrality

Services sollen unabhängig von einzelnen Anwendungen nutzbar sein.

---

# Core Services

## ConfigService

### Responsibility

Verwaltung von:

```text
config.json
```

### Aufgaben

- Laden
- Speichern
- Migrationen
- Validierung

---

## SettingsService

### Responsibility

Verwaltung von:

```text
settings.json
```

### Aufgaben

- Benutzereinstellungen
- Feature Toggles
- UI Einstellungen

---

## StateService

### Responsibility

Verwaltung des Laufzeitzustands.

### Beispiele

- Aktiver Workspace
- Aktives Fenster
- Medienstatus

---

## ThemeService

### Responsibility

Theme Verwaltung.

### Aufgaben

- Theme Loading
- Theme Validation
- Theme Switching
- Hot Reload

---

## ProfileService

### Responsibility

Profilverwaltung.

### Aufgaben

- Profile laden
- Profile validieren
- Profile wechseln

---

## LoggerService

### Responsibility

Zentrale Protokollierung.

### Aufgaben

- Logging
- Fehlerberichte
- Debugging

---

# System Services

## SessionService

### Responsibility

Desktop Session Management.

### Aufgaben

- Session Discovery
- Session Launch
- Session Information

---

## AudioService

### Responsibility

Audio Management.

### Datenquellen

- PipeWire

---

## NetworkService

### Responsibility

Netzwerkstatus.

### Datenquellen

- NetworkManager

---

## BluetoothService

### Responsibility

Bluetooth Geräte.

### Datenquellen

- BlueZ

---

## WallpaperService

### Responsibility

Wallpaper Bereitstellung.

---

## NotificationService

### Responsibility

Benachrichtigungen.

### Aufgaben

- Anzeigen
- Historie
- Priorisierung

---

## PowerService

### Responsibility

Energieverwaltung.

---

## WeatherService

### Responsibility

Wetterdaten.

---

# Service Communication

Erlaubt:

```text
Service
 ↓
Service
```

wenn keine zyklischen Abhängigkeiten entstehen.

---

# Forbidden Dependencies

Nicht erlaubt:

```text
Service
 ↓
Feature Module
```

```text
Service
 ↓
UI Component
```

---

# Public API Rules

Jeder Service muss bereitstellen:

- Properties
- Signals
- Methoden

---

# Error Handling

Jeder Service muss:

- Fehler erkennen
- Fehler protokollieren
- Sichere Rückgabewerte liefern

---

# Logging

Alle Services nutzen:

```text
LoggerService
```

Direkte Konsolenausgaben sind im Produktivbetrieb zu vermeiden.

---

# Definition of Done

Ein Service ist abgeschlossen wenn:

- Verantwortung klar definiert ist
- Dokumentation existiert
- Tests vorhanden sind
- Fehler behandelt werden
