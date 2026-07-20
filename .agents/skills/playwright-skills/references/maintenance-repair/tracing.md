# Tracing

Use tracing when a failure depends on timing, navigation, network activity, DOM changes, or a sequence that is hard to infer from the final error.

## Basic Flow

```bash
playwright-cli tracing-start
# Reproduce the failing flow.
playwright-cli tracing-stop
```

Traces can capture DOM snapshots, screenshots, console output, network activity, and action timing. Start tracing before the suspected failure point so the lead-up is visible.

## Use Cases

- Debugging failed clicks, fills, or navigations.
- Understanding unexpected redirects or loading states.
- Capturing evidence for a suspected app bug.
- Comparing visible UI state with network or console events.

## Context Pointers

- Debug loop: `debugging-and-repair.md`.
- Test debug attach mechanics: `../shared/test-running.md`.
