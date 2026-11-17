# 🗺️ Roadmap

This is a directional plan for the current React game prototype. It has no delivery dates and does not promise that every proposal will be implemented.

## Completed foundation
- [x] Expand the repository handbook with product, architecture, design, security, quality and operations documentation.
- [x] Add reusable issue, pull-request, architecture, QA, security, accessibility and release templates.
- [x] Add editable Mermaid diagrams and repository-owned SVG illustrations.
- [x] Add documentation-link and repository-hygiene validation.
- [x] Remove tracked generated dependency installation artifacts.
- [x] Extract shared pure board rules and use one critical-mass helper in the live game and setup preview.
- [x] Add deterministic tests for critical mass, move ownership, corner/edge/interior bursts and multi-wave cascades.
- [x] Add a cascade burst limit so pathological cycles are rejected without partial board state.
- [x] Prevent premature winner declarations before every configured player has taken an opening move.
- [x] Skip players who have already been eliminated.
- [x] Expose board cells as named native buttons.
- [x] Implement one-tab-stop grid navigation with arrow, Home and End keys.
- [x] Announce turn/winner status and rejected moves through live regions.
- [x] Respect the operating-system reduced-motion preference.
- [x] Add component tests for cell labeling and grid keyboard navigation.
- [x] Use semantic row and gridcell elements without relying on `display: contents`.

## Near-term quality work
- [ ] Add complete two-, three- and four-player match integration tests.
- [ ] Verify reset/restart behavior after a completed match.
- [ ] Perform manual screen-reader, contrast, zoom and reflow testing.
- [ ] Add browser automation for the viewport matrix if it can be maintained reliably.
- [ ] Decide whether the unused nested server package should become a real backend or be removed.

## Possible future features
- Save and restore local match state.
- Undo/replay and deterministic match history.
- Optional AI opponents.
- Online rooms backed by an authoritative server and documented Socket.IO protocol.
- Persistent player accounts, rankings or hosted services only after privacy and security design.

## Propose work
Open an issue describing the player problem, expected behavior, rule impacts, acceptance criteria and test strategy. See [CONTRIBUTING.md](CONTRIBUTING.md).
