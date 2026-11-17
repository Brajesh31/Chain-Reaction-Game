# ⌨️ Keyboard Accessibility

## Board interaction
The board uses a grid interaction model with one tab stop. Tab enters the active cell. Arrow keys move focus up, down, left and right. Home and End move to the first and last column of the current row. Ctrl+Home and Ctrl+End move to the first and final cell of the board. Enter and Space use native button activation.

## Cell announcements
Each cell's accessible name includes row, column, owner, orb count and availability to the active player. Cells expose an unavailable state during opponent turns and while a cascade is being presented. Turn and winner changes are politely announced; rejected actions are assertively announced.

## Verification
- [x] Tab enters the active cell.
- [x] Arrow keys move focus between cells and stop at board edges.
- [x] Home/End move within a row.
- [x] Ctrl+Home/Ctrl+End move to board boundaries.
- [x] Enter/Space use native button behavior.
- [x] Cell names distinguish empty, own and opponent-owned cells.
- [ ] Screen-reader verification on representative browser/OS combinations.
- [ ] Full keyboard-only match through winner announcement.
- [ ] Reduced-motion match play with assistive technology.

Automated coverage is in `src/components/Cell.test.js`. Screen-reader testing remains a manual sign-off task.
