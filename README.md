# Simple Nuxt starter static website

This is a very bare-bones template for a Nuxt static website.

It comes preconfigured with:

- TypeScript 7 (type checking via [Golar](https://golar.dev), the typescript-go based checker
  that `nuxt typecheck` supports)
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) and
  [oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) for linting and formatting, with ESLint
  (`eslint-plugin-vue`) running on `.vue` files only for the template rules oxlint cannot cover
- Tailwind integration
- Vitest integration for unit, nuxt, and e2e tests

The website has basic dark mode handling configured by default using
[Nuxt Colour Mode](https://color-mode.nuxtjs.org/) and Tailwind.

For an example, see [the playground](https://jmccarthy.au/playground/simple-nuxt-starter/).

## Getting started

Requires Node 24+ and pnpm 12+. To begin, run

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
pnpm lint # oxlint (type-aware) + ESLint on .vue files
pnpm lint:fix # Same, with autofix
pnpm format # oxfmt check
pnpm format:fix # oxfmt write
pnpm test:unit # Unit tests
pnpm test:nuxt # Nuxt tests
pnpm test # All tests
pnpm typecheck # Typechecking on all .ts and .vue files (Golar)
pnpm check # Lint, format check, typecheck, and run all tests
pnpm check:fix # Same, but with lint and format autofix
```

### TypeScript 7 notes

TypeScript 7 (`tsc`, the native Go compiler) is installed under the alias `@typescript/native`,
following the
[official side-by-side guidance](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0).
The `typescript` package name resolves to `@typescript/typescript6`, the TypeScript 6 JS API, which
is still required by `@typescript-eslint/parser` (used to parse `<script lang="ts">` for
`eslint-plugin-vue`) and by the Vue VS Code extension. All actual type checking runs on the
TypeScript 7 engine: `pnpm typecheck` uses Golar and `oxlint --type-aware` uses `oxlint-tsgolint`.

`vue-tsc` and Nuxt's build-time `typescript.typeCheck` option need the TypeScript JS API and are
not used.

### Adding tests

This template comes pre-configured with vitest and nuxt integrations. Unit tests run with node as
usual, whilst Nuxt tests run in a simulated Nuxt environment for testing complex reactive behaviour.
See [Nuxt Testing](https://nuxt.com/docs/4.x/getting-started/testing) for more information about
Nuxt tests and E2E testing with Nuxt and Playwright.

#### Unit tests

Add unit tests (e.g. for composables or other runtime code) in `/test/unit`.

#### Nuxt tests

Add tests using the mocked Nuxt runtime, including `happy-dom` for DOM emulation, in `/test/nuxt`.
