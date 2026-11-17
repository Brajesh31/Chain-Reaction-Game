# 🔁 CI/CD Pipeline

| Workflow | Trigger | Purpose |
|---|---|---|
| Game CI | Push, pull request, manual | npm ci, Jest, production build |
| Documentation validation | Push, pull request, manual | Markdown links, repository hygiene, tree and SVG |
| CodeQL | Push/PR and configured schedule | Static analysis |
| Dependency review | Dependency pull request | Review introduced advisories |
| Dependency Security Audit | Push/PR and weekly | npm audit report artifact |
| Secret scanning | Push and pull request | Gitleaks scan |
| README update | Manual and schedule | Repository metadata maintenance |
| Release | Tag/manual | Build and publish static artifact |

A release builds the static frontend; it does not deploy a server or database. Review action permissions and third-party action versions regularly.
