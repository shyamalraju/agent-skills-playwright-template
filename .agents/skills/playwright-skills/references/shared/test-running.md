# Test Running

Use `PLAYWRIGHT_HTML_OPEN=never` so automated runs do not open the HTML report.

```bash
PLAYWRIGHT_HTML_OPEN=never npx playwright test
PLAYWRIGHT_HTML_OPEN=never npx playwright test tests/login.spec.ts
```

## Debug With Playwright CLI

Run a failing test with `--debug=cli`, wait for the debugging instructions, then attach to the printed session name.

```bash
PLAYWRIGHT_HTML_OPEN=never npx playwright test --debug=cli
playwright-cli attach tw-abcdef
```

Keep the test process running while inspecting the paused page. Stop the background process when finished.

Every `playwright-cli` action emits equivalent Playwright TypeScript. Use that output as evidence and raw material, then adapt it to this repo's page object conventions.
