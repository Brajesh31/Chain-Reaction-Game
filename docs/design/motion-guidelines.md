# 🌀 Motion and Animation Guidelines

Animations should explain a game event, not control authoritative game state.

## Implemented
- The global stylesheet respects `prefers-reduced-motion: reduce` by reducing animation and transition durations.
- The cell explosion effect clears its timer when the effect is interrupted or the component unmounts.
- The cascade resolver computes the settled board independently from the animation presentation.

## Requirements
- Keep burst animations short and predictable.
- Do not wait indefinitely for an animation before resolving a move.
- Preserve a clear static representation of ownership and orb counts.
- Avoid flashing effects that may create photosensitivity risk.
- Do not use animation as the only indication of ownership change.

## Validation
- [x] Reduced-motion preference is honored in CSS.
- [x] Board state is resolved separately from decorative animation.
- [ ] Verify reduced-motion play with representative devices and assistive technology.
- [ ] Confirm rapid cascades do not create confusing stale visuals.
