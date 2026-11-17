# ♿ Accessibility Guidance

## Interaction requirements
- Make each cell keyboard reachable or provide an equivalent keyboard grid model.
- Prefer semantic controls for interactive cells.
- Give cells labels describing row, column, owner and orb count.
- Provide visible focus indicators.
- Announce active-player changes, invalid moves and match completion through a suitable live region.
- Do not rely on color alone for player ownership.
- Respect `prefers-reduced-motion` for floating and explosion effects.
- Check contrast in both themes.

## Grid navigation
Consider arrow-key navigation with a roving tab index rather than requiring Tab through every cell. Document key bindings visibly.

## Review
- [ ] Keyboard-only play
- [ ] Logical focus order
- [ ] Meaningful cell labels
- [ ] Turn and result announcements
- [ ] Non-color ownership cue
- [ ] Reduced motion
- [ ] Light/dark contrast

This is guidance for validation, not a claim that every current control already conforms.
