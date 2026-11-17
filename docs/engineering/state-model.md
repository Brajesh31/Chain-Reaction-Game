# 🧩 Game State Model

## Current ownership
Match state is managed inside `src/components/Game.js` with React hooks. Screen flow and shared theme are managed by `src/App.js`.

## Conceptual model
```text
Match
 ├── grid: Cell[][]
 │    └── Cell { owner: PlayerId | 0, count: non-negative integer }
 ├── currentPlayer: PlayerId
 ├── playerCount: 2 | 3 | 4
 ├── gameOver: boolean
 ├── winner: PlayerId | null
 └── presentation: animation/loading/theme
```
This is a conceptual description. Check exact runtime fields in source before changing serialization.

## Invariants
- Row/column dimensions remain stable within a match.
- Counts are non-negative integers.
- Empty ownership and zero count remain consistent.
- Owners are valid configured players or the empty sentinel.
- Only the active player moves into empty/self-owned cells.
- Cascades settle before turn advancement.
- Terminal matches reject further moves.

## Transition boundary
Prefer one deterministic transition function accepting immutable state and an action, returning new state or a structured rejection. Keep presentation-only state out of serialized board state.

## Future type model
A TypeScript migration could define `PlayerId`, `CellState`, `BoardState`, `MatchStatus` and discriminated `MoveResult`. Do not add persistence formats without an approved save/load feature.
