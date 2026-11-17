# 🚨 Incident Response

## Severity
- **SEV-1:** app unavailable or widespread game-state corruption.
- **SEV-2:** core gameplay broken for meaningful configuration set.
- **SEV-3:** degraded presentation or isolated browser issue.
- **SEV-4:** cosmetic/documentation defect with safe workaround.

## Response
Capture release SHA and reproduction; identify startup/validation/cascade/presentation impact; reproduce cleanly; roll back harmful release; preserve minimal evidence; fix root cause and add regression test; verify original case; publish summary.

## Diagnostic fixture
Record board dimensions, player count, active player, move coordinate and initial board fixture. Avoid real names/identifiers.

## Post-incident review
Document timeline, root cause, impact, detection gap, actions, owners and due dates. Focus on system improvements.
