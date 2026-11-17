# 🧠 Design Patterns and Code Organization

## Patterns in use
- **Component composition:** screen components compose reusable Board, Cell and control components.
- **Unidirectional state:** parents own state and pass props/callbacks to children.
- **Pure domain functions:** src/game/rules.js returns result objects and does not mutate the input board.
- **Presentation separation:** the rules engine computes the final result; React presents animation and locks interaction until commit.

## Patterns not present
There is no HTTP service/repository layer, database adapter, event bus, dependency-injection container or server domain model. Do not add abstractions for systems that do not exist.

## Review questions
- Is state owned by the lowest common parent that needs it?
- Can the rule be tested without mounting React?
- Does animation remain separate from authoritative state?
- Are delayed callbacks and asynchronous resets cleaned up or invalidated?
