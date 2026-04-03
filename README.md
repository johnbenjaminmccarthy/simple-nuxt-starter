# Simple Nuxt starter static website

This is a very bare-bones template for a Nuxt static website.

It comes preconfigured with:

- TypeScript integration
- ESLint and Pretter integration
- Tailwind integration
- Vitest integration for unit, nuxt, and e2e tests

The website has basic dark mode handling configured by default using
[Nuxt Colour Mode](https://color-mode.nuxtjs.org/) and Tailwind.

For an example, see [the playground](https://jmccarthy.au/playground/simple-nuxt-starter/).

## Getting started

To begin, run

```
pnpm i
```

To test the website in local dev, run

```
pnpm dev
```

For generating a static site, run

```
pnpm generate
```

For typechecking and linting run

```bash
pnpm lint # ESLint
pnpm lint:fix # ESLint with autofix
pnpm format # Prettier
pnpm format:fix # Prettier with autofix
pnpm test:unit # Unit tests
pnpm test:nuxt # Nuxt tests
pnpm test # All tests
pnpm typecheck # Typechecking on all .ts and .vue files
pnpm check # Lint and format with autofix, typecheck, and run all tests
```

### Adding tests

This template comes pre-configured with vitest and nuxt integrations. Unit tests run with node as
usual, whilst Nuxt tests run in a simulated Nuxt environment for testing complex reactive behaviour.
See [Nuxt Testing](https://nuxt.com/docs/4.x/getting-started/testing) for more information about
Nuxt tests and E2E testing with Nuxt and Playwright.

#### Unit tests

Add unit tests (e.g. for composables or other runtime code) in `/test/unit`.

#### Nuxt tests

Add tests using the mocked Nuxt runtime, including `happy-dom` for DOM emulation, in `/test/nuxt`.
