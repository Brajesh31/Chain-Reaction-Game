# 🧰 Repository Scripts

| Script | Command | Purpose |
|---|---|---|
| Markdown links | python scripts/validate_docs.py | Resolve relative Markdown links |
| Repository hygiene | python scripts/validate_repository.py | Check generated files, env files and npm lockfile consistency |
| Project structure | python scripts/check_project_structure.py --check | Compare Git tree with docs/project-structure.md |
| SVG assets | python scripts/validate_svg.py | Parse SVG XML and reject active/external resource patterns |
| Audit summary | python scripts/summarize_npm_audit.py npm-audit.json | Summarize npm audit findings |

Run from repository root. These scripts perform checks and return non-zero on failure. They do not create credentials or connect to an application backend.
