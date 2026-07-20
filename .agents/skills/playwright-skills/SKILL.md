---
name: playwright-skills
description: Plan, generate, maintain, and repair Playwright tests in this repo using live app context, validated locators, and page object conventions. Use when working on Playwright test planning, generation, maintenance, or repair.
---

# Playwright Skills

Use this skill for Playwright test planning, generation, maintenance, and repair in this repo.

This is the repo-preferred Playwright skill. It combines Playwright CLI command mechanics with this project's page object, locator validation, and repair practices. CLI command details are vendored into this skill under `references/shared/cli-command-reference.md`.

## Repository Scope

- Focus on Playwright tests and page objects under `tests/`.
- Treat `app/test/e2e/` as legacy WebdriverIO coverage. Do not add, repair, or copy patterns from those tests unless the user explicitly asks for WebdriverIO work or migration research.

## Constitution

- Use live application context before writing or changing test code.
- Validate locators against the active page before committing them.
- Prefer user-facing locators and Playwright web-first assertions.
- Do not use sleeps, fixed timeouts, or brittle CSS/XPath selectors.
- Keep tests isolated and runnable from a clean browser context.
- Reuse or extend existing page objects before creating new ones.
- Run the generated test before considering the work complete.

## Activity Routing

- Test planning: read `references/planning/test-planning.md`.
- Test generation: read `references/generation/test-generation.md`, `references/generation/page-object-conventions.md`, and `references/app-page-objects/index.md`.
- Test maintenance or repair: read `references/maintenance-repair/debugging-and-repair.md`.
- Page object changes: read `references/generation/page-object-conventions.md`, `references/app-page-objects/index.md`, and only the relevant app page object docs under `references/app-page-objects/`.
- Locator validation or hidden attributes: read `references/shared/element-inspection.md`.
- Running or debugging tests: read `references/shared/test-running.md`.
- Exact Playwright CLI command syntax: read `references/shared/cli-command-reference.md`.
- Browser session setup or cleanup: read `references/shared/browser-sessions.md`.
- Advanced Playwright CLI code: read `references/shared/custom-playwright-code.md`.
- Request mocking, storage state, or video capture: read the relevant doc under `references/shared/`.
- Style reference: read `references/examples/checkout.spec.example.ts` only when a concrete example is needed.

Read only the references needed for the current activity. Prefer activity docs for workflow and shared docs for reusable capabilities.

## Default Workflow

1. Translate the user's English scenario into a short user journey and expected outcomes.
2. Start or reuse the app at `http://127.0.0.1:3000`.
3. Open the app with Playwright CLI/browser tooling and inspect the real UI.
4. Before writing or modifying page objects, read `references/generation/page-object-conventions.md` and `references/app-page-objects/index.md`.
5. Read only the page-specific docs relevant to the scenario.
6. Inspect existing Playwright page object code under `tests/pages/` before creating new files.
7. Validate any new locator in the live browser session.
8. Write the smallest page object methods and test code that express the scenario clearly.
9. Run the test from a clean browser context and repair failures using `references/maintenance-repair/debugging-and-repair.md`.

## Locator Rules

Prefer locators in this order:

1. `getByRole()` with accessible name.
2. `getByLabel()`, `getByPlaceholder()`, `getByText()`, or `getByAltText()`.
3. `getByTestId()` for stable app-provided contracts.
4. CSS/XPath only with a short explanation.

Before committing a locator, validate that it targets the intended element, resolves uniquely when expected, is visible before interaction, is enabled or editable before click/fill, and causes the expected UI transition. For click targets, use `click({ trial: true })` where practical.

## Assertion Rules

Use Playwright web-first assertions such as `toBeVisible`, `toHaveText`, `toContainText`, and `toHaveURL`. Avoid manual polling and assertions on implementation details.
