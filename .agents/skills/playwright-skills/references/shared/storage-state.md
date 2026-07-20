# Storage State

Use storage state for scenarios that explicitly need cookies, localStorage, sessionStorage, or restored authentication. Do not use it to hide missing setup in ordinary tests.

## Commands

```bash
playwright-cli state-save auth-state.json
playwright-cli state-load auth-state.json
playwright-cli cookie-list
playwright-cli localstorage-list
playwright-cli sessionstorage-list
```

## Security Notes

- Treat saved storage state as sensitive.
- Do not commit real session cookies, tokens, or private user data.
- Prefer placeholder/example state files in docs.
- Review diffs before committing any storage-related artifact.

For isolated browser sessions, see `browser-sessions.md`.
