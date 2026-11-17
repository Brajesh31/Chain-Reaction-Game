# 🧪 Testing Overview

Automated layers include pure rules tests, App/setup tests, Cell/Board accessibility tests and a Game regression test for cascade input locking. CI also builds the production bundle and validates documentation/repository hygiene.

~~~bash
npm ci
npm test -- --watchAll=false --runInBand
npm run build
python scripts/validate_docs.py
python scripts/validate_repository.py
python scripts/check_project_structure.py --check
python scripts/validate_svg.py
~~~

Full two-, three- and four-player match integration coverage and manual accessibility sign-off remain follow-up work. See [test strategy](quality/testing-strategy.md) and [coverage status](quality/test-coverage.md).
