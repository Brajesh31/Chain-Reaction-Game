# 🗺️ Player Journeys

## First local match
```mermaid
journey
  title First local match
  section Discover
    Open game: 5: Player
    Read rules: 4: Player
  section Configure
    Choose player count: 5: Host
    Choose board size: 4: Host
  section Play
    Place first orb: 5: Player
    Resolve cascade: 5: Player
    Continue turns: 5: Players
  section Finish
    Review winner: 5: Players
    Start another match: 4: Host
```

## Critical moments
1. Before the first move, clarify the legal-move rule and active player.
2. On selection, show accepted/rejected feedback.
3. During cascades, communicate resolution and prevent conflicting input.
4. After resolution, show ownership and next player.
5. At game end, clearly identify terminal state and restart action.

## Friction to evaluate
- Setup preview critical-mass values differ from the engine, as noted in README.
- Large grids may overflow narrow screens.
- Explosion animations may distract or discomfort some users.
- Color-only ownership is insufficient for some players.

No analytics system was identified. These are usability checks, not tracked metrics.
