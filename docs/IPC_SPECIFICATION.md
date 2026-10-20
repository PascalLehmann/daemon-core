# IPC Specification

Version: 1.0

Status: Active

---

# Purpose

Definiert die Kommunikation zwischen Daemon-Core und externen Systemen.

---

# Hyprland IPC

Verwendet für:

- Workspaces
- Fenster
- Monitor Informationen

Konsument:

- Bar
- Dashboard

---

# DBus

Verwendet für:

- Notifications
- System Events

Konsument:

- NotificationService
- SessionService

---

# PipeWire

Verwendet für:

- Lautstärke
- Devices
- Medien

Konsument:

- AudioService

---

# BlueZ

Verwendet für:

- Bluetooth

Konsument:

- BluetoothService

---

# NetworkManager

Verwendet für:

- WLAN
- Ethernet
- VPN

Konsument:

- NetworkService

---

# Regel

Nur Services dürfen IPC verwenden.

UI-Komponenten dürfen niemals direkt auf IPC zugreifen.
