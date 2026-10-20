#*Installation

Version: 1.0

Status* Draft

Last Updated: *026-10-20

---

# Überblick*
Diese Anleitung beschreibt die In*tallation der*Entwicklungsumgebung für Daemon-Co*e.

Aktuell*wird ausschließlich Arch Linux als*primäre Zielplattform unterstützt.*
---

# Voraussetzungen

Ben*tigt:

- Arch Linux
- Hypr*and
- greetd
- Qt*
- Quickshell

---

# System*Pakete

```bash
sudo pacman -* \
hyprland \
greetd \
*age \
qt6-base \
qt6-de*larative \
networkmanager \
pipewi*e \
wire*lumber \
playerctl \
brightness*tl \
bluez \
grim \
slurp
*``

---

# Quickshell

*nstallation über AUR:

```bash
yay*-S quickshell
``*

oder

*``bash
yay -S quickshell-git*```

---

# Dienste aktivieren

Ne*work*anager:

```bash
sudo systemctl en*ble Network*anager.service
```

Bluetooth:

*``bash
sudo systemctl enable bluet*oth.service
*``

greetd:

```bash
sudo systemct* enable greetd*service
```

---

# Repository kl*nen

```bash
git clone https://git*ub*com/PascalLehmann/daemon-core*git

cd daemon-core
```

---

#*Verzeichnisstruktur prüfen

```*ash
tree -L 2
```

*--

# Entwicklungsmodus*
Greeter:

```bash
quicks*ell -c daemon-greeter
```

*ockscreen*

```bash
quickshell -c daemon*lockscreen
```

Bar:

```bash
*uickshell -c daemon-bar
```

*ashboard:

```bash
quickshell -c d*emon-dashboard
```

*--

# greetd Beispielkon*iguration

Datei:

```text
*etc/greetd/config.toml
```

*eispiel:

```toml
[terminal*
vt = 1

[default_session*
command = "cage -- quickshell -c*daemon-greeter"
user = "greeter*
```

---

# Troubleshooting

##*Quickshell prüfen

```bash
qu*ckshell --version
*``

---

## greetd Logs*
```bash
journalctl -u greetd*-b
```

---

## Hyprland*testen

```bash
Hy*rland
```

---

## Schwarzer Bilds*hirm*
```bash
cage -- quickshell
*``

Fehlermeldungen analys*eren.

---

# Aktueller*Status

Die Install*tionsanleitung stellt aktuell die *eplante Zielarch*tektur dar.

Ein*automatischer Installer wird erst*in einer*späteren Version bereit*estellt.
