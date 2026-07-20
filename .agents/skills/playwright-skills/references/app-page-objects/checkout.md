# Checkout Page Object

Represents checkout information, overview, and completion pages.

Responsibilities:

- Enter customer information.
- Continue to checkout overview.
- Verify overview contains expected product and totals.
- Finish the order.
- Verify the order completion message.

Locator notes:

- Prefer placeholders for customer information fields.
- Prefer button role for Continue and Finish actions.
- Use `data-test` for summary labels and completion text when those are stable app contracts.

Boundaries:

- Do not add products or open the cart here.
