# ♿ Accessibility Overview

The board uses a semantic grid with named cell buttons, one tab stop and directional keyboard navigation. Turn/winner status and rejected actions are exposed through live regions. Global CSS respects prefers-reduced-motion.

## Implemented
- Native button semantics for cell actions.
- Cell names include position, owner and orb count.
- Arrow/Home/End keyboard navigation.
- Visible focus outline.
- Turn/winner status and rejected-move announcements.
- Reduced-motion stylesheet override.

## Not signed off
No formal WCAG 2.2 AA audit or complete manual screen-reader test is claimed. Contrast, focus visibility, 200% zoom, reflow and full keyboard-only match completion still need manual verification.

See [keyboard guidance](quality/keyboard-accessibility.md), [design accessibility](design/accessibility.md) and [audit status](quality/accessibility-audit.md).
