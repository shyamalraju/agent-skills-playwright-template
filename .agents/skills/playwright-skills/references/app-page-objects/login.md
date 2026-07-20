# Login Page Object

Represents the login page at `/`.

Responsibilities:

- Navigate to the login page.
- Log in with provided credentials.
- Verify login errors when needed.

Locator notes:

- Prefer placeholders for username and password inputs.
- Prefer the Login button role when it is accessible.
- Use `data-test` only if user-facing locators are not stable enough.

Boundaries:

- Do not assert inventory state here after login; return to the test or use `InventoryPage`.
