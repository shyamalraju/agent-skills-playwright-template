# Inventory Page Object

Represents the inventory page at `/inventory.html`.

Responsibilities:

- Verify the product listing loaded.
- Scope interactions to a product by visible product name.
- Add or remove products from the inventory list.
- Open the cart.

Locator notes:

- Product actions must be scoped to the product card containing the product name.
- Prefer visible product text plus button role.
- Use app `data-test` contracts for repeated inventory structures when role/text alone is ambiguous.

Boundaries:

- Do not assert cart-page contents here.
- Do not perform checkout behavior here.
