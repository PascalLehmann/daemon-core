# Coding Guidelines

Version: 1.0

Status: Active

Last Updated: 2026-10-20

---

# Purpose

Dieses Dokument definiert die Coding Standards für Daemon-Core.

Ziel:

- Konsistenz
- Lesbarkeit
- Wartbarkeit
- Erweiterbarkeit
- Vorhersagbarkeit

Alle Quelltexte müssen diesen Regeln folgen.

---

# Grundprinzipien

## Lesbarkeit vor Cleverness

Schlecht:

```qml
x?y:z
```

Gut:

```qml
if (isValid) {
    return success;
}

return failure;
```

---

## Explizit vor Implizit

Code soll leicht verständlich sein.

---

## Wartbarkeit vor Kürze

Wenige Zeilen sind nicht automatisch besser.

---

## Wiederverwendung vor Duplizierung

Vor jeder neuen Komponente prüfen:

```text
Existiert bereits etwas Vergleichbares?
```

---

# Namenskonventionen

## Dateien

Immer:

```text
PascalCase.qml
```

Beispiele:

```text
Button.qml
Card.qml
UserAvatar.qml
NotificationCard.qml
```

---

## Komponenten

Immer:

```qml
Card
Button
SearchField
```

---

## Properties

Immer:

```qml
property string title
property bool enabled
property int currentIndex
```

camelCase verwenden.

---

## Funktionen

Immer:

```qml
function loadTheme()
```

```qml
function refreshData()
```

---

## Signale

Immer:

```qml
signal clicked()
signal changed()
signal accepted()
```

---

# QML Struktur

Empfohlene Reihenfolge:

```qml
import ...

Item {
    id: root

    property ...

    signal ...

    readonly property ...

    function ...

    Component.onCompleted: {

    }

    Rectangle {

    }
}
```

---

# Theme Regeln

Verboten:

```qml
color: "#ff0000"
```

```qml
radius: 20
```

```qml
spacing: 15
```

---

Erlaubt:

```qml
color: Theme.colors.primary
```

```qml
radius: Theme.radius.md
```

```qml
spacing: Theme.spacing.md
```

---

# Komponentenregeln

Eine Komponente = eine Verantwortung.

Schlecht:

```text
LoginCard.qml

- Login
- Session Selection
- Theme Logic
- Network Logic
```

Gut:

```text
LoginCard.qml
```

zeigt Login an.

```text
SessionSelector.qml
```

wählt Sessions.

---

# Abhängigkeiten

Komponenten dürfen:

- Shared Components verwenden
- Services konsumieren

Komponenten dürfen nicht:

- andere Anwendungen importieren

---

# Logging

Immer LoggerService verwenden.

Verboten:

```qml
console.log(...)
```

Produktivcode:

```qml
LoggerService.info(...)
```

---

# Fehlerbehandlung

Fehler müssen behandelt werden.

Schlecht:

```qml
text: model.name
```

Gut:

```qml
text: model?.name ?? ""
```

---

# Kommentare

Kommentiere das "Warum".

Nicht das Offensichtliche.

Schlecht:

```qml
// Set text color
color: Theme.colors.text
```

Gut:

```qml
// Fallback auf Theme-Farbe falls kein Override konfiguriert wurde.
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

# Architekturregel

Business Logik gehört in Services.

UI bleibt UI.

Diese Regel darf niemals verletzt werden.
