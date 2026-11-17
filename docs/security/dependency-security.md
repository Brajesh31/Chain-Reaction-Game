# 🔍 Dependency Security

## Current controls
- Install from the committed package lockfile with npm ci.
- Review Dependabot changes and package release notes.
- Inspect transitive changes for unexpected additions.
- Run the scheduled [dependency audit workflow](../../.github/workflows/dependency-audit.yml).
- Review package source, maintenance status, compatibility and licenses.
- Remove unused packages only after checking imports and clean-install behavior.

## Current audit snapshot

The dependency-audit workflow on commit \`a046164c6588e0ea37a9e4056757178e2de814ee\` completed successfully and uploaded a report containing **65 advisories**:

| Severity | Count |
|---|---:|
| Critical | 3 |
| High | 35 |
| Moderate | 15 |
| Low | 12 |
| **Total** | **65** |

The three critical findings in that report were transitive packages:
- \`proxy-addr\`, affected range 1.1.0–2.0.7, advisory [GHSA-jqcg-44mw-7w3h](https://github.com/advisories/GHSA-jqcg-44mw-7w3h)
- \`shell-quote\`, affected range through 1.8.4, advisories [GHSA-w7jw-789q-3m8p](https://github.com/advisories/GHSA-w7jw-789q-3m8p) and [GHSA-395f-4hp3-45gv](https://github.com/advisories/GHSA-395f-4hp3-45gv)
- \`websocket-driver\`, affected range through 0.7.4, advisories [GHSA-mp7j-qc5w-4988](https://github.com/advisories/GHSA-mp7j-qc5w-4988) and [GHSA-xv26-6w52-cph6](https://github.com/advisories/GHSA-xv26-6w52-cph6)

This is an installation-graph report, not proof that every finding is exploitable in the production browser bundle. Reachability and exposure still need package-path review. The successful workflow means the report was generated and uploaded; it does **not** mean the dependency graph is vulnerability-free.

The earlier 70-finding result was the pre-cleanup baseline. It is retained as historical context only. Use the newest [Dependency Security Audit run](https://github.com/Brajesh31/Chain-Reaction-Game/actions/workflows/dependency-audit.yml) and its artifact for future decisions.

## Required triage record

For each confirmed vulnerable dependency, record:
1. Package, affected version and dependency path.
2. Advisory identifier, severity and affected range.
3. Whether the vulnerable code is bundled, executed in CI only or not reachable.
4. Fixed version, breaking-change risk and migration option.
5. Test/build evidence and deployment plan.
6. Owner, decision date and expiry for any accepted risk.

## Release policy
- Do not suppress critical or high findings without a documented owner and rationale.
- Do not force major upgrades solely to make the audit count disappear.
- Keep application CI separate from advisory reporting until an explicit security gate is agreed.
- Re-run the audit after dependency updates and before publishing a release.
