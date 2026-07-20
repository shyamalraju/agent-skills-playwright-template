# Custom Playwright Code

Use `run-code` for advanced inspection or setup that is not covered by direct `playwright-cli` commands.

```bash
playwright-cli run-code "async page => {
  return page.url();
}"
```

The code must be a single function expression. It is wrapped and evaluated by the CLI, so `import`, `export`, and `require` syntax are not supported.

## Common Uses

- Grant permissions or emulate media.
- Inspect page state, frames, downloads, or clipboard behavior.
- Run targeted checks while repairing a failing test.
- Prototype a complex interaction before moving it into a page object method.

Keep generated code small. If the logic belongs in a test, convert it into clear Playwright test or page object code.
