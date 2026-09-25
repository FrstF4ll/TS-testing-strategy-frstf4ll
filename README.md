# TS-testing-strategy-frstf4ll

Small equipment loaning app designed to learn TDD and explore different testing methodologies.

## Testing framework

* Vitest (Functional/Unit tests)
* Playwright (e2e)
* React testing library (Component testing)

## Running tests
First, run dep installation :
```bash
pnpm install
pnpm exec playwright install
```

Then, here's the list of command and their use case.
You can also use ```npm run``` instead of ```pnpm```

| Level | Command | What it runs |
| ----- | ------- | ------------ |
| Unit | `pnpm test:unit` | Unit suite (`vitest run src/domain`) |
| Functional | `pnpm test:functional` | Functional suite (`vitest run src/server`) |
| Component | `pnpm test:component` | Component suite (`vitest run src/components`) |
| End-to-end | `pnpm test:e2e` | End-to-end suite (`playwright test`) |


