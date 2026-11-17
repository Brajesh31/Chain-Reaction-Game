# 🧱 Component Architecture

| Component/module | Responsibility | State/input boundary |
|---|---|---|
| App | Screen selection, initial settings and shared theme | Top-level screen/theme state |
| FloatingBubblesPage | Animated title/start presentation | Receives theme and start callback |
| WelcomePage | Player/grid setup and rule preview | Owns setup selections |
| Game | Match orchestration, board, turns and winner | Owns active match state |
| Board | Grid rendering and keyboard focus movement | Receives grid and move callback |
| Cell | Cell button and orb/explosion visuals | Receives cell, owner and count |
| GameControls | Reset, theme and diagnostics controls | Receives action callbacks |
| PerformanceMonitor | Browser-side diagnostics | Receives measured metrics |
| game/rules.js | Pure board and progression rules | No React/DOM dependency |

Keep data flow unidirectional: action input, rules result, React state, rendered board. The rules module must not import UI or browser APIs.
