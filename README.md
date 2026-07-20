# Agent Skills Example For Playwright

A working draft example for QA engineers using agent skills to generate Playwright tests.

It includes a sample app, root-level Playwright tests, page object models, and local agent skills for planning, generating, running, debugging, and repairing tests.

The skills are adapted from the Playwright CLI skills, but shaped around this repo's opinionated framework conventions. The repo is currently optimised for the generate component first.

## Getting Started

Install the root dependencies:

```sh
npm install
```

Install the sample app dependencies:

```sh
npm run app:install
```

Start the sample app:

```sh
npm run app:start
```

In another terminal, run the Playwright tests:

```sh
npx playwright test
```

## Example Agent Commands

These examples assume you have the app running with `npm run app:start`.

The checkout flow is the recommended generation exercise. Some checkout page object methods and checkout tests have been intentionally omitted so you can test how well the agent generates the missing framework code.

Generate a new test with Codex:

```sh
codex "Create a Playwright test for adding a backpack to the cart. Use the existing page object model and run the test."
```

Generate a new test with Claude:

```sh
claude "Create a Playwright test for adding a backpack to the cart. Use the existing page object model and run the test."
```

Repair a failing test with Codex:

```sh
codex "Run the Playwright tests, inspect any failure, and repair the test using the existing page object model."
```

Repair a failing test with Claude:

```sh
claude "Run the Playwright tests, inspect any failure, and repair the test using the existing page object model."
```

## Agent Skill And Framework Conventions

The local skill gives the agent repo-specific instructions for Playwright work. It is intentionally opinionated, so generated tests follow the same framework conventions each time.

The skill tells the agent how to:

- inspect the live app before writing tests
- choose stable user-facing locators
- follow the page object model used in `tests/pages/`
- generate clear Playwright specs
- run the generated test
- debug and repair failures

The framework prefers:

- page objects under `tests/pages/`
- specs under `tests/`
- `getByRole`, `getByLabel`, `getByText`, and other user-facing locators
- Playwright web-first assertions like `toBeVisible`, `toHaveText`, and `toHaveURL`
- clear test steps that describe the user journey
- no fixed sleeps or brittle selectors unless there is a strong reason

## Project Structure

```text
.
├── app/                         # Sauce Labs sample app used as the test target
│   └── test/e2e/                # Legacy WebdriverIO tests, useful as reference material
├── docs/                        # Supporting Playwright guidance
├── tests/                       # Root-level Playwright specs
│   └── pages/                   # Page object models for the sample app
├── .agents/
│   └── skills/
│       └── playwright-skills/   # Local agent skill for Playwright work
│           └── references/      # Skill docs for planning, generation, repair, and shared workflows
├── package.json                 # Root dependencies and app helper scripts
└── playwright.config.ts         # Playwright config for running against the local app
```

The main framework in this template is the root-level Playwright setup under `tests/`.

## Working With The Agent

A typical generate flow looks like this:

1. Ask the agent to create a test for a user journey.
2. The agent reads the local Playwright skill.
3. The agent inspects the running app.
4. The agent updates or reuses page objects.
5. The agent writes the Playwright spec.
6. The agent runs the test and repairs failures.

Example prompt:

```text
Create a Playwright test for adding a backpack to the cart and checking out.
Use the existing page object model.
```

## Current Status

This repo is a working draft.

The generate workflow is the most developed part. The planning and repair docs are included so the harness can grow into a fuller test automation assistant over time.

Expect the structure and skill guidance to evolve as the framework becomes more useful.
