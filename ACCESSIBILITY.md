# ♿ Accessibility

Accessibility is a release requirement, not a later enhancement. The game must remain operable without relying exclusively on color, pointer precision or motion.

## Current review status
This file defines project expectations. It does not claim the current UI has passed a formal accessibility audit. Track findings in [the audit worksheet](docs/quality/accessibility-audit.md).

## Required behavior
- All gameplay controls are keyboard reachable and expose meaningful accessible names.
- Player identity is communicated by text, number or shape in addition to color.
- Focus remains visible and does not disappear during turn changes.
- Turn changes, invalid moves, cascade completion and winner state are announced.
- Non-essential animation respects `prefers-reduced-motion`.
- Layout remains usable at 200% zoom and narrow viewports.

## Review
Run keyboard-only and screen-reader walkthroughs, contrast measurements, reduced-motion checks and touch testing. Record browser/device, evidence, issue and retest date.
