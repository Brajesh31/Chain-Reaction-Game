# 🎮 Product Overview

Chain Reaction is a browser-based, turn-based grid strategy game for two to four people sharing one device. Players place orbs on a rectangular board. Each cell's critical mass equals its number of in-bounds orthogonal neighbors. Reaching that threshold causes a burst that distributes orbs and transfers ownership to adjacent cells.

## Product promise
Start a local match, understand whose turn it is, make a legal move, watch the complete cascade settle and continue until a winner remains. Tactical depth comes from board position and ownership changes, not accounts or remote services.

## Current delivery boundary
| Capability | Status |
|---|---|
| Local hot-seat play | Implemented |
| Two to four players | Setup UI implemented |
| Grid-size selection | Setup UI implemented |
| Pure move/cascade rules | Implemented in src/game/rules.js |
| Keyboard grid navigation | Implemented |
| Reduced-motion CSS | Implemented |
| Online rooms and matchmaking | Not implemented |
| AI opponents | Not implemented |
| Saved matches or cloud profiles | Not implemented |
| Backend, API and database | Not present |

The main product quality signals are deterministic rules, understandable turn feedback, accessible input, responsive presentation, reproducible tests and accurate documentation. The personas and success measures are planning assumptions, not user-research findings.
