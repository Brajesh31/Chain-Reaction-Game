# 🔗 Integrations

No runtime integration with an API, database, authentication provider, analytics platform, payment service, ad network or multiplayer service is present.

## Repository/build integrations
| Integration | Purpose | Data involved |
|---|---|---|
| GitHub Actions | Tests, build, docs and security automation | Source and workflow metadata |
| Dependabot | Dependency update pull requests | Package manifests and lockfile |
| CodeQL | Static code analysis | Repository source |
| npm registry | Install declared dependencies | Package artifacts during install |

Before adding a service, document business reason, data sent, credentials, endpoints, failure behavior, privacy impact, licensing and verification. A dependency declaration is not a working integration.
