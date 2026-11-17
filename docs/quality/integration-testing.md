# 🔗 Integration Testing

The repository includes App and component tests, including a Game regression test for cascade input locking. Complete match-level integration coverage for every player count and terminal outcome is not yet complete.

Scenarios to add:
1. Two-player match through winner.
2. Three-player match with eliminated participant skipped.
3. Four-player match with multiple ownership changes.
4. Reset during a pending cascade presentation.
5. Rapid cell activation during cascade.
6. Theme toggle without board-state loss.
7. Large-grid initialization interrupted by a newer reset.

Assert full settled board, active player, participation list, input lock, terminal flag and winner. A screenshot alone does not prove rules correctness.
