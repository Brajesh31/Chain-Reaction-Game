# ⚙️ Configuration Guide

The current frontend is configured through package.json, package-lock.json, browserslist, ESLint settings, .nvmrc and Create React App defaults. Public assets and application metadata live under public/.

The local game does not require an API base URL, database connection, authentication secret or third-party service key.

## Local setup
1. Install the Node.js version declared in .nvmrc.
2. Run npm ci.
3. Start with npm start.
4. Verify using npm test and npm run build.
5. Keep machine-specific values in ignored local files only when code actually consumes them.

Create React App embeds REACT_APP_ variables into the browser bundle. Treat every such value as public. Never put passwords or private keys in frontend configuration.
