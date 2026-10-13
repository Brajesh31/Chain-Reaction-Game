# Security Policy

## Supported versions

No release or support matrix is published. Reports should identify the affected commit or current default branch. This is a browser game prototype, not a security-reviewed service.

## Reporting a vulnerability

Do not publish exploit details, credentials, tokens, or private data in a public issue. Use GitHub's private vulnerability reporting for this repository when available. Otherwise, contact `@brajesh31` privately through the contact route on the GitHub profile. Include the affected file, impact, reproducible steps, and a safe way to follow up. A maintainer will respond and coordinate disclosure when possible; there is no guaranteed response time.

Ordinary gameplay bugs can be reported publicly. Never send real credentials as proof.

## Security notes

- The current frontend does not define an authentication system, API, or persistent data store.
- Do not add secrets to source or `REACT_APP_*` build variables; values embedded in a browser bundle are public to its users.
- The current game state is local browser memory and is not suitable for authoritative online play or trust-sensitive outcomes.
- The repository contains a `server` package manifest but no checked-in server application source. Do not assume the listed Express or Socket.IO packages provide a running service.
- Review dependency provenance and licenses before deployment or redistribution. No security audit is claimed here.
