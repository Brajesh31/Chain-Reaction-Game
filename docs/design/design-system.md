# 🎨 Design System

## Current visual language
The interface uses dark/light themes, cyan accents, colored player orbs, rounded surfaces, neumorphic shadows and animated transitions. This page describes the direction, not a claim that every component already follows a formal token system.

| Token | Current reference | Use |
|---|---|---|
| Accent | #61dafb | Primary actions and highlights |
| Secondary accent | #4fa8cc | Light-theme accent |
| Dark surface | #282c34 / #2c3138 | App and component backgrounds |
| Light surface | #f5f5f5 / #ffffff | Light backgrounds |
| Player 1 | #ff5252 | Red |
| Player 2 | #4285f4 | Blue |
| Player 3 | #8bc34a | Green |
| Player 4 | #ffeb3b | Yellow |

## Component principles
- Controls have clear labels and consistent hover, focus and disabled states.
- Board cells preserve stable hit areas.
- Player identity includes a non-color cue.
- Theme changes do not reset gameplay state.
- Shadows and gradients must not reduce text contrast.
- Animation communicates state and must not block input.

## Theme checklist
- [ ] Text and icons meet contrast targets in both themes.
- [ ] Focus indicators remain visible.
- [ ] Selected and disabled controls are distinguishable.
- [ ] Board and orb colors remain recognizable.
- [ ] Status text is readable without player color.
