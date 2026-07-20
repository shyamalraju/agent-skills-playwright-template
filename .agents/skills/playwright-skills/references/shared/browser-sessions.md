# Browser Sessions

Use isolated browser sessions when planning, generating, or repairing tests that need separate users, clean state, or persistent state.

## Named Sessions

```bash
playwright-cli -s=auth open http://127.0.0.1:3000
playwright-cli -s=public open http://127.0.0.1:3000
playwright-cli -s=auth snapshot
```

Named sessions isolate cookies, storage, cache, tabs, and history.

## Cleanup

```bash
playwright-cli close
playwright-cli -s=auth close
playwright-cli close-all
playwright-cli kill-all
```

Prefer clean browser contexts for final verification. Delete stale data when a persistent profile may be influencing behavior.
