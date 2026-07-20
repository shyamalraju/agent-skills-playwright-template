# Video Recording

Use video recording for demos, evidence, or visual review. It is optional for normal test generation and repair.

## Basic Flow

```bash
playwright-cli open http://127.0.0.1:3000
playwright-cli video-start demo.webm
# Perform the scenario.
playwright-cli video-stop
```

Use descriptive filenames and avoid committing large generated videos unless the repository explicitly expects them.

For complex scripted recordings, prototype the flow with `playwright-cli`, then use `custom-playwright-code.md` to run a small recording script.
