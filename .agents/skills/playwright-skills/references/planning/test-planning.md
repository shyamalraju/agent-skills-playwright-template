# Test Planning

Use this when turning an English testing request into scenarios before writing code.

## Planning Loop

1. Confirm the repo has Playwright configured with `playwright.config.ts` or `playwright.config.js`.
2. Translate the request into a user journey with expected outcomes.
3. Start or reuse the app at `http://127.0.0.1:3000`.
4. Inspect the live UI with `playwright-cli` before deciding locators or page object changes.
5. Identify likely page objects from `../app-page-objects/index.md`.
6. Write compact scenario notes that capture the starting state, actions, assertions, and page objects involved.

## Scenario Notes

Each planned scenario should include:

- User goal and starting state.
- Main actions in user language.
- Observable outcomes to assert.
- Relevant page objects or new methods likely needed.
- Any state setup, storage, network, or session assumptions.

## Context Pointers

- Test execution mechanics: `../shared/test-running.md`.
- Exact CLI command syntax: `../shared/cli-command-reference.md`.
- Browser sessions and clean contexts: `../shared/browser-sessions.md`.
- Hidden attributes or locator discovery: `../shared/element-inspection.md`.
- App page object boundaries: `../app-page-objects/index.md`.
