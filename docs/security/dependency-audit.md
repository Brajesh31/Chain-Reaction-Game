# 🔐 Dependency Audit Report

## Purpose
The scheduled dependency audit runs npm audit --json against the committed root lockfile, summarizes direct and transitive findings, and stores the complete JSON as a GitHub Actions artifact.

## Latest verified snapshot

The audit run on commit \`a046164c6588e0ea37a9e4056757178e2de814ee\` completed successfully and reported:

| Severity | Count |
|---|---:|
| Critical | 3 |
| High | 35 |
| Moderate | 15 |
| Low | 12 |
| **Total** | **65** |

The three critical packages in that report were \`proxy-addr\`, \`shell-quote\` and \`websocket-driver\`. They were transitive dependencies. See [Dependency Security](dependency-security.md) for the affected ranges and advisory links. This is the latest verified snapshot for the commit above, not a promise that a later dependency change has the same count.

## How to read the report
- **Direct** means the package is declared in the root project manifest.
- **Transitive** means another package in the dependency graph introduces it.
- **Affected range** and advisory links come from npm's audit response.
- **Fix available** is npm's suggested remediation metadata. It does not guarantee a non-breaking upgrade.

The installed dependency graph is not identical to the shipped browser bundle. Development tools, test tools and runtime packages need different exposure assessments.

## Workflow behavior
The workflow runs on pushes, pull requests, a weekly schedule and manual dispatch. It is advisory-only while the legacy Create React App 5 transitive graph is triaged. It uploads:
- \`npm-audit.json\`: complete npm audit response.
- \`npm-audit-summary.md\`: severity and package summary.

Application CI remains a separate mandatory quality gate. High and critical advisory findings still require an owner, impact assessment and remediation decision. The advisory-only workflow is not approval to ignore them.

## Remediation procedure
1. Identify the advisory and exact dependency path.
2. Determine whether the vulnerable code is shipped, executed in CI, or unreachable.
3. Prefer a supported patch/minor update when compatible.
4. Plan a major toolchain migration separately, with clean-lockfile, test and build evidence.
5. Update the dependency review template and record owner/date for deferred risks.
