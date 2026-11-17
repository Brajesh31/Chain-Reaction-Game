# 🔑 Secret Management

The frontend game does not require private secret values. There is no server-only environment in the repository.

## Rules
1. Never commit .env, .env.local, private keys, tokens or passwords.
2. Never put secrets in REACT_APP_ variables; CRA embeds those values in public browser assets.
3. Keep test fixtures synthetic.
4. Use repository secrets only for genuine CI credentials.
5. Limit workflow permissions to the minimum required.
6. Revoke and rotate any exposed credential. Removing it from Git history does not revoke it.

A future server needs a dedicated secret store, separate environments, startup validation, secret rotation and safe logging.
