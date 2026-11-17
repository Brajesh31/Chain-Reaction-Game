# 🌀 Motion and Animation Guidelines

Animations should explain a game event, not control authoritative game state.

- Keep burst animations short and predictable.
- Do not wait indefinitely for an animation before resolving a move.
- Respect the operating system reduced-motion preference.
- Preserve a clear static representation of ownership and orb counts.
- Avoid flashing effects that may create photosensitivity risk.
- Do not use animation as the only indication of ownership change.

## Validation
- [ ] Reduced motion supported
- [ ] Board understandable without animation
- [ ] Rapid cascades do not create stale visuals
- [ ] Animation does not block input unnecessarily
