# Agent Orchestrated Test Automation

Experimental repository for scaffolding an agent harness for Playwright-based test automation.

## Repository Layout

- `app/` contains the Sauce Labs [`sample-app-web`](https://github.com/saucelabs/sample-app-web) application.
- `tests/` is reserved for root-level Playwright tests.
- `playwright.config.ts` configures root-level Playwright execution against the local app.

## Getting Started

Install root dependencies:

```sh
npm install
```

Install the app dependencies:

```sh
npm run app:install
```

Run Playwright tests:

```sh
npm test
```

No agent harness assets have been added yet.
