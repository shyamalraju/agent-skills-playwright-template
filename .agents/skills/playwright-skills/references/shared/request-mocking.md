# Request Mocking

Use request mocking only when the scenario requires controlled network behavior. Prefer testing real app behavior when practical.

## CLI Route Commands

```bash
playwright-cli route "**/*.jpg" --status=404
playwright-cli route "**/api/users" --body='[{"id":1,"name":"Alice"}]' --content-type=application/json
playwright-cli route-list
playwright-cli unroute "**/api/users"
playwright-cli unroute
```

## Advanced Cases

Use `custom-playwright-code.md` for conditional responses, response modification, request inspection, delays, or simulated failures.

Mock only the boundary needed by the test. Keep mocked data obvious and non-secret.
