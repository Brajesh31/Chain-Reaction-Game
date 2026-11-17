# 🔍 Dependency Security

- Install from the committed package lockfile.
- Review Dependabot changes and package release notes.
- Inspect transitive changes for unexpected additions.
- Use npm audit as an advisory signal; assess severity and reachability rather than forcing upgrades blindly.
- Confirm package source and license.
- Remove unused packages only after checking imports and build behavior.

The nested server manifest is not backed by server source. Those packages are not an active production service.

For a confirmed vulnerable dependency, record affected versions, usage path, advisory, remediation version, tests/build evidence and deployment plan. Accepted exceptions need expiry dates.
