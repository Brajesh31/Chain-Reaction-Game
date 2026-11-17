# ⚙️ Cascade Resolution

## Current implementation boundary
Cascade orchestration currently lives in the React Game component. This page defines the rule contract and safe target architecture, not a claim that the engine has already been extracted.

## Resolution contract
1. Validate row, column and active-player ownership.
2. Produce the next board state without mutating the prior state.
3. Add one orb to the selected cell and assign its owner.
4. Add unstable coordinates to a work queue.
5. Read the latest state for each queued coordinate.
6. When the cell reaches its local critical mass, remove the bursting mass and distribute one orb to every in-bounds orthogonal neighbor.
7. Transfer each affected neighbor to the initiating player.
8. Queue neighbors that have become unstable.
9. Continue until the queue is empty.
10. Evaluate eliminations and terminal state, then advance the turn once.

## Critical mass
For row r, column c, board rows R and columns C:

    criticalMass(r,c) = [r>0] + [r<R-1] + [c>0] + [c<C-1]

Each bracket is 1 when true and 0 otherwise. The result is 2 at corners, 3 on non-corner edges and 4 in interior cells.

## Queue requirements
- Queue coordinates, not stale cell object references.
- Read the latest board state when processing a coordinate.
- A coordinate may be queued again if it becomes unstable again.
- Never drop a burst merely because that coordinate was previously processed.
- Guard malformed dimensions and coordinates.
- Disable new user moves until the cascade is committed.

## Invariants and failure cases
| Case | Expected protection |
|---|---|
| Opponent-owned target | Reject before mutation |
| Out-of-range coordinate | Reject safely |
| Revisited unstable cell | Re-evaluate current count |
| Long cascade | Deterministic processing |
| Input during animation | Ignore or disable duplicate action |
| Terminal board | Reject further moves |

Extract critical-mass calculation, move validation, move resolution and winner evaluation into a pure rules module only after deterministic fixtures preserve current behavior.
