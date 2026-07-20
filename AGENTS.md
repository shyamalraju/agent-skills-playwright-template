# Agent Guidelines

- Do not expose secrets, tokens, API keys, credentials, or private environment values in code, logs, tests, docs, screenshots, or commit messages.
- Treat `.env` files and local configuration as private. Use example files with placeholder values when documenting required settings.
- Keep changes scoped to the task and preserve existing project conventions unless there is a clear reason to adjust them.
- Prefer readable, maintainable automation code over clever shortcuts. Add tests or examples when behavior changes.
- Before committing, review generated artifacts and diffs for accidental secrets, machine-specific paths, and unrelated changes.
