# Service Specification

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Definiert alle offiziellen Daemon-Core Services.

---

# Core Services

## ConfigService

Verantwortlich für:

- config.json

---

## SettingsService

Verantwortlich für:

- settings.json

---

## StateService

Verantwortlich für:

- Runtime State

---

## ThemeService

Verantwortlich für:

- Theme Loading
- Theme Validation
- Theme Switching

---

## LoggerService

Verantwortlich für:

- Logging
- Error Reporting

---

## ProfileService

Verantwortlich für:

- Profile Loading
- Profile Switching

---

# System Services

## SessionService

Session Management.

---

## AudioService

Audio Geräte.

---

## NetworkService

WiFi
Ethernet
VPN.

---

## BluetoothService

Bluetooth Geräte.

---

## NotificationService

Benachrichtigungen.

---

## WallpaperService

Wallpaper Bereitstellung.

---

## PowerService

Energieverwaltung.

---

## WeatherService

Wetterdaten.

---

# Abhängigkeitsregel

Services dürfen:

- IPC verwenden

Services dürfen nicht:

- UI Komponenten importieren
- Feature Module importieren
