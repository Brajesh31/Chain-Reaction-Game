# 🔎 Threat Assessment

| Threat | Scenario | Current mitigation | Remaining concern |
|---|---|---|---|
| Malformed move | Invalid coordinates/player reaches rules module | Rules validation and immutable rejection | Keep tests aligned with rule changes |
| Cascade denial of service | Pathological board bursts repeatedly | 10,000-burst ceiling | Benchmark supported boards |
| Client tampering | User edits React state in browser tools | Product is explicitly local-only | Online play needs server authority |
| Secret exposure | Key placed in public build variable | Documentation and secret scan | Review scanner findings |
| Dependency compromise | Vulnerable package enters build | Lockfile, Dependabot, review and npm audit | Legacy CRA findings need remediation |
| Malicious contribution | Change adds unsafe source/workflow | PR review, CI and CodeQL | Maintainer review remains essential |
| Misleading privacy claim | Docs imply remote collection or persistence | Local-only scope is documented | Recheck network behavior after integrations |

Browser state is controlled by the local user. npm packages and GitHub Actions are external supply-chain inputs. Reassess after adding networking, browser storage, identity, analytics, user-generated content or online rooms.
