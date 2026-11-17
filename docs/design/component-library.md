# 🧩 Component Library

| Component | Purpose | Behavior |
|---|---|---|
| FloatingBubblesPage | Title/start | Animated visual entry |
| WelcomePage | Match setup | Player count, grid selection and rules preview |
| Game | Match orchestration | Board, turn, reset, winner and animation lock |
| Board | Grid composition | Semantic grid and directional focus |
| Cell | One position | Accessible button, owner and orb count |
| GameControls | Match controls | Reset, theme and diagnostics |
| PerformanceMonitor | Diagnostics | Optional browser metrics panel |

This is the application's component set, not a separately versioned component library or Storybook package. Keep rule logic out of Cell presentation and document props/events, accessibility names, theme behavior and tests for new reusable components.
