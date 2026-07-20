# Page Object Conventions

Page objects capture stable user capabilities for one page, route, or cohesive UI area.

## Rules

- Page objects live in `tests/pages/`.
- Constructors only accept and store `page`.
- Define locators inside methods, not as constructor fields or class properties.
- Method names should describe user intent, such as `loginAs`, `addProductToCart`, or `completeOrder`.
- Reuse or extend existing page objects before creating new ones.
- Do not create duplicate page objects for the same route or page concept.
- Keep assertions in tests unless the assertion is a reusable page/domain expectation.
- Exact method signatures in code are authoritative; docs describe responsibility and common capabilities.

## Extension Guidance

When a scenario needs behavior missing from an existing page object, add the smallest public method that fits that page object's responsibility. If the behavior belongs to a different page, create or extend that page object instead.

Validate new locators with the live UI before storing them in methods. If the snapshot omits useful attributes, use `../shared/element-inspection.md`.
