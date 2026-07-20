# Playwright Best Practices For This Repo

These notes capture the conventions we want agents and humans to follow when adding Playwright tests to this repository.

## Testing Philosophy

- Test user-visible behavior, not implementation details. Prefer what a real user can see or operate over component names, CSS classes, internal functions, or DOM structure.
- Keep tests isolated. A test should not depend on state created by another test. Use `beforeEach`, fixtures, setup projects, or controlled test data instead.
- Test only what this repo controls. Mock or stub third-party services with Playwright's network APIs rather than depending on external sites or unstable external responses.
- A little duplication is acceptable when it keeps a test clearer. Avoid abstractions that hide the user journey or make failures harder to understand.

## Locator Conventions

Use Playwright locators, not raw element handles. Locators include auto-waiting and retry behavior.

Preferred locator order:

1. `getByRole()` with an accessible name.
2. `getByLabel()`, `getByPlaceholder()`, `getByText()`, or `getByAltText()` when they reflect user-facing UI.
3. `getByTestId()` for explicit test contracts when user-facing locators are not stable or expressive enough.
4. CSS/XPath only as a last resort.

Examples:

```ts
await page.getByRole('button', { name: 'Add to cart' }).click();
await page.getByLabel('Username').fill('standard_user');
await page.getByTestId('cart-badge').click();
```

Avoid brittle selectors:

```ts
await page.locator('.btn.primary:nth-child(2)').click();
await page.locator('//*[@id="root"]/div/div[2]/button').click();
```

Use chaining and filtering to express scope:

```ts
const product = page.getByRole('listitem').filter({ hasText: 'Sauce Labs Backpack' });
await product.getByRole('button', { name: 'Add to cart' }).click();
```

Keep locators strict and unique. If a locator matches multiple elements, refine it by role/name, parent scope, or `filter()` rather than using arbitrary indexes.

## Assertions

Use web-first assertions so Playwright waits for the expected UI state:

```ts
await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
await expect(page.getByTestId('cart-badge')).toHaveText('1');
```

Avoid manual assertions that do not retry:

```ts
expect(await page.getByText('Products').isVisible()).toBe(true);
```

## Abstractions And DRY Code

Prefer readable tests over premature abstraction. Introduce shared code when it removes meaningful duplication or encodes a stable domain concept.

Use these layers:

- Test files: describe user scenarios and assertions.
- Page objects: encapsulate page-specific locators and common page actions.
- Fixtures: compose reusable setup, authenticated states, page objects, and test data.
- Helpers: pure utilities only; avoid helpers that hide browser interactions better represented by page objects or fixtures.

Page objects should:

- Own locators for one page or cohesive UI area.
- Expose user-intent methods such as `addProductToCart(name)` instead of implementation steps like `clickThirdButton()`.
- Keep assertions in tests unless the assertion is part of a reusable domain expectation.
- Avoid becoming one giant application object.

Fixture guidance:

- Use fixtures for repeated setup and dependency injection, such as `inventoryPage`, `cartPage`, or authenticated storage state.
- Keep fixture setup isolated and deterministic.
- Prefer worker-scoped fixtures only for expensive setup that is safe to share.

Example shape:

```ts
// tests/fixtures.ts
import { test as base } from '@playwright/test';
import { InventoryPage } from './pages/inventory-page';

export const test = base.extend<{ inventoryPage: InventoryPage }>({
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.goto();
    await use(inventoryPage);
  },
});

export { expect } from '@playwright/test';
```

## Agent Authoring Rules

When an agent writes tests in this repo, it should:

- Start from the user journey and expected behavior.
- Use accessible locators first.
- Add `data-testid` only when the app lacks a stable user-facing contract.
- Prefer web-first assertions.
- Keep tests independent and parallel-safe.
- Add a page object or fixture only after the pattern appears more than once or clearly represents a stable app concept.
- Avoid sleeps, fixed timeouts, CSS/XPath selectors, and hidden shared state.

## Useful Commands

```sh
npm test
npm run test:ui
npm run test:headed
npx playwright codegen http://127.0.0.1:3000
npx playwright show-report
```

## Sources

- Playwright Best Practices: https://playwright.dev/docs/best-practices
- Playwright Locators: https://playwright.dev/docs/locators
- Playwright Page Object Models: https://playwright.dev/docs/pom
- Playwright Fixtures: https://playwright.dev/docs/test-fixtures
