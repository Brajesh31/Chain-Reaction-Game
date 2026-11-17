# 🖼️ Visual Regression Testing

## Screens to baseline
Title/entry, match setup with two and four players, empty board, mid-game board, cascade, winner screen and both themes.

## Viewports
Capture small mobile, common mobile, tablet, laptop and wide desktop. Keep board preset and viewport constant between comparisons.

## Review checklist
- [ ] No clipped cells or controls.
- [ ] No horizontal overflow.
- [ ] No missing icons or fonts.
- [ ] Active player is visible.
- [ ] Theme colors have usable contrast.
- [ ] Animations do not leave stale artifacts.
- [ ] Reduced-motion presentation remains understandable.

Store verified screenshots in docs/screenshots. Record browser, viewport, commit and board preset. Do not treat concept diagrams as runtime screenshots.
