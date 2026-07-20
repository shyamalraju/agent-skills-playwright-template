# Page Object Index

Use this index to decide which page object docs and files to inspect. Keep this file compact; route-specific details belong in the linked docs.

## LoginPage

Represents the login route.

Use when the scenario involves signing in or verifying login errors.

Do not use for inventory, cart, or checkout assertions after login.

Read next: `login.md`.

## InventoryPage

Represents the product inventory route.

Use when the scenario involves viewing products, adding or removing products from the listing, or opening the cart from inventory.

Do not use for cart-page item assertions or checkout behavior.

Read next: `inventory.md`.

## CartPage

Represents the cart route.

Use when the scenario involves verifying cart contents, removing cart items, continuing shopping, or starting checkout.

Do not use for inventory-list interactions or checkout forms.

Read next: `cart.md`.

## CheckoutPage

Represents checkout information, overview, and completion routes.

Use when the scenario involves entering customer information, verifying checkout overview, finishing an order, or asserting order completion.

Do not use for adding products to the cart.

Read next: `checkout.md`.
