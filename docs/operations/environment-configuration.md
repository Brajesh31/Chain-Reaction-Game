# ⚙️ Environment Configuration

The browser game has no documented runtime secret or backend URL requirement. Inspect source before assuming an environment variable is consumed.

Create React App exposes variables prefixed with REACT_APP_ in the compiled bundle. Treat every such value as public. Never put passwords, API secrets or private keys in frontend variables.

Keep real local values in ignored .env.local files. Do not commit them. Update .env.example only with variable names, safe descriptions and non-sensitive placeholders.

A future server-backed mode needs separate server-only configuration, schema validation, startup checks and secret rotation. Never reuse browser-exposed configuration for server secrets.
