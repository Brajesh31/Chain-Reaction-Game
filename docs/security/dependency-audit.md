# 🔐 Dependency Audit Report

## Purpose
The scheduled dependency audit runs npm audit --json against the committed root lockfile, summarizes direct and transitive findings, and stores the complete JSON as a GitHub Actions artifact.

## How to read the report
- **Direct** means the package is declared in the root project manifest.
- **Transitive** means another package in the dependency graph introduces it.
- **Affected range** and advisory links come from npm's audit response.
- **Fix available** is npm's suggested remediation metadata. It does not guarantee a non-breaking upgrade.

The installed dependency graph is not identical to the shipped browser bundle. Development tools, test tools, and runtime packages need different exposure assessments.

## Historical pre-cleanup baseline
The npm CI install on 17 November 2026, before unused frontend networking dependencies and the empty nested server manifests were removed, reported 70 advisories: 12 low, 17 moderate, 37 high and 4 critical. This is a historical installation summary, not the current post-cleanup count. The current workflow generates the new count and exact package findings from the updated lockfile.

Do not infer that each finding is exploitable in production solely from the total count.

## Workflow behavior
The workflow runs on pushes, pull requests, a weekly schedule and manual dispatch. It is advisory-only while the legacy Create React App 5 transitive graph is triaged. It uploads:
- npm-audit.json: complete npm audit response.
- npm-audit-summary.md: severity and package summary.

Application CI remains a separate mandatory quality gate. High and critical advisory findings still require an owner, impact assessment and remediation decision. The advisory-only workflow is not approval to ignore them.

## Remediation procedure
1. Identify the advisory and exact dependency path.
2. Determine whether the vulnerable code is shipped, executed in CI, or unreachable.
3. Prefer a supported patch/minor update when compatible.
4. Plan a major toolchain migration separately, with clean-lockfile, test and build evidence.
5. Update the dependency review template and record owner/date for deferred risks.
