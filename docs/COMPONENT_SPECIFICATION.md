
# Component Specification

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Dieses Dokument definiert die Architektur, Struktur und Qualitätsanforderungen für alle UI-Komponenten innerhalb von Daemon-Core.

Ziel ist:

- Konsistenz
- Wiederverwendbarkeit
- Testbarkeit
- Wartbarkeit
- Theme-Kompatibilität

Alle Komponenten müssen dieser Spezifikation entsprechen.

---

# Grundprinzipien

## Komponenten sind Bausteine

Komponenten sollen kleine, wiederverwendbare Bausteine sein.

Eine Komponente sollte genau eine Aufgabe erfüllen.

---

## Keine Geschäftslogik

Komponenten dürfen:

- Daten anzeigen
- Events auslösen
- Services konsumieren

Komponenten dürfen nicht:

- Systemkommandos ausführen
- Dateien schreiben
- Netzwerkzugriffe durchführen
- Konfigurationen speichern

---

## Theme First

Komponenten beziehen alle visuellen Eigenschaften über:

```qml
Theme
```

Direkte Werte sind verboten.

---

# Komponentenhierarchie

```text
Theme Engine
       │
       ▼

Shared Components
       │
       ▼

Feature Components
       │
       ▼

Applications
```

---

# Verzeichnisstruktur

## Shared Components

```text
daemon-shared/

buttons/
cards/
dialogs/
forms/
icons/
inputs/
layout/
lists/
navigation/
overlays/
typography/
```

---

## Beispiel

```text
daemon-shared/

buttons/
└── Button.qml

cards/
└── Card.qml

dialogs/
└── Dialog.qml

inputs/
└── TextField.qml
```

---

# Komponentenklassen

Daemon-Core unterscheidet mehrere Komponententypen.

---

## Primitive Components

Kleinste UI-Bausteine.

Beispiele:

```text
Text.qml
Icon.qml
Divider.qml
Badge.qml
Spacer.qml
```

---

## Input Components

Benutzereingaben.

Beispiele:

```text
Button.qml
Switch.qml
Slider.qml
Checkbox.qml
TextField.qml
SearchField.qml
ComboBox.qml
```

---

## Layout Components

Strukturieren Oberflächen.

Beispiele:

```text
Card.qml
Panel.qml
Container.qml
Section.qml
Grid.qml
```

---

## Composite Components

Kombinieren mehrere Komponenten.

Beispiele:

```text
LoginCard.qml
NotificationCard.qml
MediaWidget.qml
WeatherWidget.qml
```

---

## Application Components

Komplette Anwendungen.

Beispiele:

```text
Greeter
Lockscreen
Dashboard
ControlCenter
```

---

# Benennung

Alle Komponenten verwenden:

```text
PascalCase.qml
```

Beispiele:

```text
Button.qml
Card.qml
NotificationCard.qml
WeatherWidget.qml
```

---

# Verbotene Namen

```text
button.qml
mycard.qml
test1.qml
component_final.qml
```

---

# Dateiregeln

Eine Hauptkomponente pro Datei.

Erlaubt:

```text
Button.qml
```

Nicht:

```text
Common.qml

Button
Card
Dialog
Input
...
```

---

# Component API

Jede wiederverwendbare Komponente benötigt:

- Properties
- Signals
- Dokumentation

---

## Beispiel

```qml
Item {

    property string text

    signal clicked()

}
```

---

# Standard Properties

Folgende Properties sollen möglichst einheitlich verwendet werden.

---

## Sichtbarkeit

```qml
property bool visible
```

---

## Aktivierung

```qml
property bool enabled
```

---

## Fokus

```qml
property bool focused
```

---

## Größe

```qml
property int width
property int height
```

---

# Signals

Komponenten kommunizieren über Signals.

---

## Beispiel

```qml
signal clicked()

signal accepted()

signal rejected()

signal changed()
```

---

# Theme Integration

Jede Komponente muss Theme-kompatibel sein.

---

## Verboten

```qml
color: "#ffffff"
```

```qml
radius: 12
```

---

## Erlaubt

```qml
color: Theme.colors.text
```

```qml
radius: Theme.radius.md
```

---

# Typography Regeln

Schriftgrößen stammen ausschließlich aus:

```qml
Theme.typography
```

---

## Beispiel

```qml
font.pixelSize:
    Theme.typography.sizes.body
```

---

# Spacing Regeln

Abstände stammen ausschließlich aus:

```qml
Theme.spacing
```

---

## Beispiel

```qml
spacing: Theme.spacing.md
```

---

# Radius Regeln

Rundungen stammen ausschließlich aus:

```qml
Theme.radius
```

---

## Beispiel

```qml
radius: Theme.radius.lg
```

---

# Component States

Standardzustände:

```text
Normal
Hover
Pressed
Focused
Disabled
Selected
```

Jede interaktive Komponente muss diese Zustände berücksichtigen.

---

# Accessibility

Komponenten sollen unterstützen:

- Tastaturbedienung
- Fokusnavigation
- Screenreader-Unterstützung
- Skalierbare Schriftgrößen

---

# Service Integration

Komponenten dürfen Services verwenden.

---

## Erlaubt

```qml
ThemeService

ConfigService

NotificationService
```

---

## Verboten

Direkte Systemzugriffe.

---

# Datenfluss

Grundregel:

```text
Service
   │
   ▼
Component
   │
   ▼
Signal
   │
   ▼
Application
```

---

# Fehlerbehandlung

Komponenten dürfen niemals abstürzen wegen:

- fehlender Daten
- leerer Strings
- ungültiger Werte

---

## Beispiel

Schlecht:

```qml
text: model.name
```

Gut:

```qml
text: model?.name ?? ""
```

---

# Shared Component Library

## Phase 1

Pflichtkomponenten.

---

### Inputs

```text
Button
IconButton
TextField
SearchField
Checkbox
RadioButton
ComboBox
Switch
Slider
```

---

### Layout

```text
Card
Panel
Container
Section
Divider
```

---

### Typography

```text
Text
Heading
Caption
Label
```

---

### Media

```text
Avatar
ImageFrame
WallpaperView
```

---

### Feedback

```text
Tooltip
Toast
ProgressBar
Spinner
```

---

### Navigation

```text
Tabs
NavigationRail
NavigationButton
```

---

# Composite Components

## Authentication

```text
LoginCard
PasswordField
UserAvatar
SessionSelector
```

---

## Notifications

```text
NotificationCard
NotificationList
NotificationPopup
```

---

## Dashboard

```text
SearchPanel
QuickActions
WidgetGrid
```

---

## System

```text
VolumeWidget
BatteryWidget
NetworkWidget
BluetoothWidget
WeatherWidget
```

---

# Dokumentation

Jede öffentliche Komponente benötigt:

```qml
/*
Purpose:
    Displays a themed button.

Properties:
    text
    enabled

Signals:
    clicked()
*/
```

---

# Testing Requirements

Jede Komponente muss:

- isoliert testbar sein
- Theme-kompatibel sein
- auf HiDPI funktionieren
- auf mehreren Auflösungen funktionieren

---

# Definition of Done

Eine Komponente gilt als abgeschlossen wenn:

- sie dokumentiert ist
- Theme Tokens verwendet werden
- keine Hardcodes existieren
- Signale definiert sind
- Wiederverwendbarkeit gegeben ist
- Tests erfolgreich sind
- Architekturregeln eingehalten werden

---

# Architekturregel Nummer 1

Wenn eine Komponente auch nur möglicherweise mehrfach verwendet werden kann:

Dann gehört sie in:

```text
daemon-shared/
```

und nicht in ein einzelnes Modul.
