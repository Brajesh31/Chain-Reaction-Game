# 📱 Responsive Design Guidelines

| Class | Suggested viewport | Primary checks |
|---|---:|---|
| Small mobile | 320 × 640 | No clipped controls or horizontal overflow |
| Common mobile | 375 × 812 | Touch targets and readable status |
| Large mobile | 430 × 932 | Grid centered and controls usable |
| Tablet | 768 × 1024 | Controls wrap without covering board |
| Laptop | 1366 × 768 | Board and actions visible |
| Desktop | 1920 × 1080 | Content remains bounded |

## Requirements
- Controls wrap before they collide with the board.
- Active player and turn status remain visible.
- The board must not cause accidental horizontal scrolling.
- Fullscreen mode has a discoverable exit action.
- Touch targets support repeated cell selection.
- Text remains usable at 200% zoom.

Capture identical configurations at small, medium and large widths. Record browser, device emulation, grid dimensions and any clipping.
