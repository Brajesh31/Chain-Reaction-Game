# ♿ Accessibility Guidance

## Implemented interaction
The board is exposed as an accessible grid. Each cell is a native button with an accessible name describing row, column, owner, orb count and availability. Tab enters one active cell; arrow keys navigate the grid, Home/End move within a row, and Ctrl+Home/Ctrl+End move to the first/final cell.

The active turn and winner are announced through a polite live status. Invalid moves and rejected pathological cascades are announced through an assertive alert. Cells expose an unavailable state while another player owns them or a cascade is in progress.

## Motion
The global stylesheet respects `prefers-reduced-motion: reduce` by suppressing animation and transition duration. Game rules remain deterministic and do not depend on animation timing.

## Manual verification still required
- Complete keyboard-only match from setup to winner.
- Verify labels and live announcements using representative screen readers.
- Ensure ownership remains distinguishable without color alone.
- Check contrast in both themes and at 200% zoom.
- Test reduced-motion gameplay.

This documents implemented semantics and remaining checks. It is not a formal WCAG conformance statement.
