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
- [x] Add a cascade burst limit so a pathological cycle is rejected without freezing the browser.
- [x] Prevent premature winner declarations before every configured player has taken an opening move.
- [x] Skip players who have already been eliminated.

## Near-term quality work
- [ ] Add complete two-, three- and four-player match integration tests.
- [ ] Verify reset and restart behavior after a completed match.
- [ ] Complete keyboard, screen-reader, contrast and reduced-motion testing.
- [ ] Add browser automation for the supported viewport matrix if it can be maintained reliably.
- [ ] Decide whether the unused nested server package should become a real backend or be removed.

## Possible future features
- Save and restore local match state.
- Undo/replay and deterministic match history.
- Optional AI opponents.
- Online rooms backed by an authoritative server and documented Socket.IO protocol.
- Persistent player accounts, ranking or hosted services only after a privacy and security design.

## Propose work
Open an issue describing the player problem, expected behavior, rule impacts, acceptance criteria and test strategy. See [CONTRIBUTING.md](CONTRIBUTING.md).
