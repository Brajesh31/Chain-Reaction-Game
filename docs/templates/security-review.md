# 🔐 Security Review

## Scope and data flow
Components, inputs, network boundaries, dependencies and retained data.

## Threats and mitigations
| Asset | Threat | Mitigation | Evidence |
|---|---|---|---|
| Game state | Client tampering | Server authority if networked | Test |
| Dependencies | Vulnerable package | Lockfile/update review | Audit |

## Checklist
- [ ] No secrets committed.
- [ ] No unsafe HTML injection.
- [ ] Inputs/dimensions bounded.
- [ ] Future events authenticated and authorized.
- [ ] Server does not trust client owner/turn/winner.
- [ ] CORS/origins restricted.
- [ ] Logs exclude secrets and unnecessary personal data.

## Findings
Severity, evidence, exploitability and owner.

## Decision
Approve | accept tracked risks | block.
