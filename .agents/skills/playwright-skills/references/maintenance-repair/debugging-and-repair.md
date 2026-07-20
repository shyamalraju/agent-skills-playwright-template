# Debugging And Repair

Use this after a generated or existing Playwright test fails.

## Repair Loop

1. Read the failure message and identify the failing step.
2. Reproduce the failure from a clean browser context.
3. Run the failing test with `--debug=cli` and attach using `playwright-cli`.
4. Inspect the live page before editing code.
5. Repair the smallest locator, assertion, or page object method that explains the failure.
6. Re-run the failing test.
7. Stop when the test passes twice without changing app state manually.

## Guardrails

- Do not add `waitForTimeout` to hide synchronization issues.
- Do not weaken assertions just to pass.
- Do not replace scoped locators with broad CSS/XPath selectors.
- If an existing page object method is flaky, repair it in place and keep callers unchanged when possible.
- If the app behavior changed, update the test or page object to match observable behavior and note the reason.

## Context Pointers

- Running and debug attach mechanics: `../shared/test-running.md`.
- Exact CLI command syntax: `../shared/cli-command-reference.md`.
- Hidden attributes or locator investigation: `../shared/element-inspection.md`.
- Trace capture: `tracing.md`.
- Advanced page/context probing: `../shared/custom-playwright-code.md`.
