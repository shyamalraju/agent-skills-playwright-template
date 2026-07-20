# Test Generation

Use this when writing or extending Playwright tests and page objects.

## Generation Loop

1. Start from scenario notes or create them from the user request.
2. Inspect the live page with `playwright-cli snapshot` before writing code.
3. Use generated Playwright code from `playwright-cli` as raw material, then adapt it to repo page objects.
4. Read `page-object-conventions.md` and the relevant app page object docs under `../app-page-objects/`.
5. Reuse or extend existing page objects before creating new ones.
6. Validate each new locator against the active page before committing it to test code.
7. Keep assertions in tests unless the assertion is a reusable page/domain expectation.
8. Run the generated test from a clean browser context.

## Locator Rules

Prefer locators in this order:

1. `getByRole()` with accessible name.
2. `getByLabel()`, `getByPlaceholder()`, `getByText()`, or `getByAltText()`.
3. `getByTestId()` for stable app-provided contracts.
4. CSS/XPath only with a short explanation.

For locator discovery or hidden attributes, use `../shared/element-inspection.md`.

## Assertion Rules

Use Playwright web-first assertions such as `toBeVisible`, `toHaveText`, `toContainText`, `toHaveValue`, `toBeChecked`, and `toHaveURL`. Avoid manual polling, sleeps, fixed timeouts, and implementation-detail assertions.

## Context Pointers

- Test execution mechanics: `../shared/test-running.md`.
- Exact CLI command syntax: `../shared/cli-command-reference.md`.
- Page object conventions: `page-object-conventions.md`.
- App page object index: `../app-page-objects/index.md`.
- Example test style: `../examples/checkout.spec.example.ts`.
