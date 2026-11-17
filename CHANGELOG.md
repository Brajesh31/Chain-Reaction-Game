# Changelog

This changelog records the repository documentation, engineering and tooling improvements made during the current maintenance pass. Earlier gameplay history remains in Git.

## Unreleased

### Added
- Product, gameplay, architecture, design, quality, security and operations handbook pages.
- Reusable review templates for ADRs, features, bugs, tests, gameplay rules, architecture, accessibility, security, dependencies, risks, playtests, incidents and releases.
- Mermaid architecture/state/sequence diagrams and repository-owned SVG illustrations.
- GitHub issue forms, pull-request template, CI, documentation validation, CodeQL, dependency review, Dependabot and tagged-release workflow.
- Scripts to validate local Markdown links and tracked repository hygiene.

### Changed
- Extracted pure game-rule helpers and deterministic move/cascade resolution into `src/game/rules.js`.
- Replaced permanent cascade-coordinate suppression with a pending queue, allowing cells to be processed again after later hits.
- Added a burst safety limit that rejects pathological non-terminating cascades without committing partial board state.
- Updated turn progression to give each configured player an opening move, skip eliminated players and declare a winner only after all players have entered.
- Corrected the setup preview to use the same critical-mass helper as live gameplay.
- Expanded README with project diagrams, setup instructions, architecture, feature boundaries and documentation navigation.
- Removed the tracked `server/node_modules` dependency directory. Server package manifests remain, but no server application source has been added.

### Verification
- Documentation and repository validation workflow passed on the current branch before the latest game-engine change.
- Frontend Jest and production build checks are rerunning after the cascade resolver update.
