# 🔊 Screen Reader Support

The board is exposed as a grid, rows as row elements, cells as gridcell containers and interactive surfaces as buttons. Each button name includes cell position, owner and orb count. Turn/winner state uses a polite live region; rejected actions use an alert/live region.

## Manual test sequence
1. Navigate from title to setup.
2. Select player count and board size without a mouse.
3. Enter the board using Tab.
4. Confirm the focused cell name includes row, column, owner and count.
5. Move with arrow keys.
6. Activate legal and illegal cells.
7. Trigger a cascade and verify input remains unavailable until settled.
8. Confirm next-turn or winner announcement.

Component tests cover accessible names and keyboard focus. Manual screen-reader verification on representative browser/OS combinations remains outstanding.
