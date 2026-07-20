# Element Inspection

Use this when a snapshot does not show the id, class, `data-*`, ARIA attributes, or DOM state needed to validate a locator.

## Attribute Checks

```bash
playwright-cli snapshot
playwright-cli eval "el => el.id" e7
playwright-cli eval "el => el.className" e7
playwright-cli eval "el => el.getAttribute('data-testid')" e7
playwright-cli eval "el => el.getAttribute('aria-label')" e7
playwright-cli eval "el => getComputedStyle(el).display" e7
```

## Locator Validation

Before writing a locator into a test or page object, confirm that it targets the intended element, resolves uniquely when expected, is visible before interaction, and is enabled or editable before click/fill. For click targets, use `click({ trial: true })` where practical.

Prefer user-facing locators first. Use attributes to confirm behavior or stability, not as a default replacement for accessible locators.
