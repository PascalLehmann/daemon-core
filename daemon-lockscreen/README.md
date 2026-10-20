# daemon-lockscreen

This module contains the lockscreen experience.

## Responsibilities

- lockscreen rendering
- media status display
- quick information summary
- authentication coordination

## Rules

- No direct system calls in UI code.
- Delegate state access to services.
