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

| Level | Command | What it runs |
| ----- | ------- | ------------ |
| Unit | `pnpm test:unit` | Unit suite (`vitest run src/domain`) |
| Functional | `pnpm test:functional` | Functional suite (`vitest run src/server`) |
| Component | `pnpm test:component` | Component suite (`vitest run src/components`) |
| End-to-end | `pnpm test:e2e` | End-to-end suite (`playwright test`) |


## Test environment

## What runs -> Against what

Vitest (functional) -> API, DB, HTTP requests, routes...
Vitest (unit) -> Domain rules
Component -> Frontend component
e2e -> User process and pathing. When he perform an action, does it perform, and does he have the intended result ? (Example : When he create a form, save it with the button, is he redirected at home page and does he sees the newly saved form)

## Table  of covering
| Level                   | What It Covers                                                                      | Which Tool            | Expected Number of Tests |
|:------------------------|:------------------------------------------------------------------------------------|:----------------------|:-------------------------|
| **Level 1: Unit**       | Individual domain logics.                                                           | Vitest                | 50                       |
| **Level 2: Component**  | Interactions between multiple components, database queries, and service boundaries. | React-Testing Library | 40                       |
| **Level 3: Functional** | Full user workflows from the UI layer down to the database/external APIs.           | Vitest                | 20                       |
| **Level 4: End-to-End** | Interactions between multiple components, database queries, and service boundaries. | Playwright            | 6                        |

## Table of exclusion
| Level | What Will Not Be Tested Here                                                                                                               | 
| :--- |:-------------------------------------------------------------------------------------------------------------------------------------------|
| **Level 1: Unit** | Value display (if we display the right value)                                                                                              | 
| **Level 2: Component** | Whole page rendering, component behavior suite. We will not test if component A save form, only if it display and display the chosen view. | 
| **Level 3: Functional** | Single functions and domain logic. Belongs to unit.                                                                                        |
| **Level 4: End-to-End** | Single component rendering, route return and status.                                                                                       |

## Poisition on the effort.

- e2e and functional should test critical part of the app (important route, form saving for e2e... Prevent user from locating equipment for too long...)
- unit should test domain rules, answering "is this rules respected".
- Component should be responsible of unique component rendering. While e2e ensure the process (When saving document, are we redirected to the document page and is the document visible with all its informations ?), component focus on (is the page rendering and is it displaying these other components).