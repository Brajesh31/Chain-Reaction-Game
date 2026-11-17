# 🐙 GitHub Actions Guide

The .github/workflows directory contains app CI, documentation/repository validation, CodeQL, dependency review, npm audit reporting, secret scanning, README maintenance and tagged-release automation.

Run equivalent checks locally:

~~~bash
npm ci
npm test -- --watchAll=false --runInBand
npm run build
python scripts/validate_docs.py
python scripts/validate_repository.py
python scripts/check_project_structure.py --check
python scripts/validate_svg.py
~~~

A green workflow does not replace code review or manual QA. Audit-report success means a report was generated, not that all dependency findings are fixed.
