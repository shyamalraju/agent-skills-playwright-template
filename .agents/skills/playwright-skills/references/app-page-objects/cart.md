# Cart Page Object

Represents the cart page at `/cart.html`.

Responsibilities:

- Verify the cart page loaded.
- Verify expected products are present in the cart.
- Start checkout.

Locator notes:

- Scope item assertions to cart item rows when possible.
- Prefer button role for Checkout.
- Use app `data-test` contracts for cart structure if repeated text makes scoping unclear.

Boundaries:

- Do not add inventory products here.
- Do not enter checkout customer information here.
