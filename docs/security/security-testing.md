# 🧪 Security Testing

| Check | Workflow/tool | Purpose |
|---|---|---|
| Static code analysis | CodeQL | Analyze source for security patterns |
| Dependency changes | Dependency Review | Review introduced advisories |
| Dependency graph audit | npm audit workflow | Record direct/transitive findings |
| Secret detection | Gitleaks | Scan repository changes/history |
| Repository hygiene | validate_repository.py | Check generated files, env files and lockfile consistency |

Manual review should cover frontend secrets, SVG active/external references, new network calls, browser storage, malformed board state, repeated cascades and workflow permissions.

Passing automation is not a penetration test or certification. Record findings and accepted exceptions in the risk register.
