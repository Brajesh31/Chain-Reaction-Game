# 🏛️ Project Governance

## Maintainers
The repository owner manages project direction, releases and repository settings. Contributors propose changes through issues and pull requests.

## Change review
- Rule changes must include deterministic examples and regression tests.
- Architecture changes should include an ADR when trade-offs are material.
- Security and accessibility impact must be reviewed for affected features.
- Documentation must describe shipped behavior separately from proposals.

## Decisions
Record consequential technical decisions in `docs/templates/adr.md`. Keep issue/PR links and decision status current.

## Releases
Use the release checklist and notes template. Do not publish a release with unresolved critical gameplay corruption or security defects.
