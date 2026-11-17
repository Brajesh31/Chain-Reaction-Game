# 🔑 Environment Variables

The local game has no required runtime environment variables. No API URL, database URL, login secret or analytics key is required.

.env.example is an example/configuration placeholder, not evidence that the application consumes a variable. Inspect source before adding values.

| Variable category | Convention | Exposure |
|---|---|---|
| Public build setting | REACT_APP_PUBLIC_SETTING | Visible in compiled browser assets |
| Server-only secret | SERVER_SECRET | Would belong only in a future server runtime |
| Test-only setting | TEST_FIXTURE_MODE | Must not contain credentials |

Never commit .env or local secret files. Update .env.example and this guide with safe placeholders only. Add server-side configuration validation if a backend is introduced.
