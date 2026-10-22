# Simple Nuxt Starter

Nuxt 4 template for static (SSG) or SPA projects. SSR is disabled by default (`ssr: false` in
`nuxt.config.ts`). To enable SSR, set `ssr: true`.

## Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm generate         # Static site generation
pnpm preview          # Preview production build
pnpm lint             # oxlint (type-aware) + ESLint on .vue files
pnpm lint:fix         # Same, with autofix
pnpm format           # oxfmt check
pnpm format:fix       # oxfmt write
pnpm typecheck        # Golar (TypeScript 7 engine) over Nuxt's generated project references
pnpm test             # Run all tests
pnpm test:unit        # Unit tests only (Node.js env)
pnpm test:nuxt        # Component tests (Nuxt env with happy-dom)
pnpm check            # Full check: lint + format check + typecheck + test
pnpm check:fix        # Full check with lint/format autofix
```

Run `pnpm check` (or `pnpm check:fix`) before committing. Requires Node 24+ and pnpm 12+.

## Project Structure

```
app/
  app.vue              # Root layout
  pages/               # File-based routing
  components/          # Auto-imported components
  assets/css/main.css  # Global styles and CSS variables
test/
  unit/                # Pure unit tests (Node.js)
  nuxt/                # Component tests (Nuxt runtime)
public/                # Static assets served at /
nuxt.config.ts         # Nuxt configuration
golar.config.ts        # Golar type checker (registers @golar/vue)
oxlint.config.ts       # oxlint rules
oxfmt.config.ts        # oxfmt formatting (import sorting)
eslint.config.ts       # ESLint, scoped to .vue files (eslint-plugin-vue)
vitest.config.ts       # Test runner configuration
```

## Modules

- **@tailwindcss/vite** - Tailwind v4 via the Vite plugin. Theme colors (`background`, `primary`,
  `secondary`) are mapped to CSS variables in `main.css`.
- **@nuxtjs/color-mode** - Dark/light mode. Uses system preference with light fallback. Toggle via
  `useColorMode()`.
- **@nuxt/icon** - Icons via `<Icon>` component. Uses `@iconify-json/material-symbols` icon set.

## Tooling

- **TypeScript 7**: the native `tsc` is installed as `@typescript/native`; the `typescript`
  package name is aliased to `@typescript/typescript6` because `@typescript-eslint/parser` and the
  Vue VS Code extension still need the TypeScript 6 JS API. Do not "fix" this by installing plain
  `typescript@7` under its own name - ESLint will stop working on `.vue` files. Type checking
  (`pnpm typecheck`) runs `nuxt typecheck --checker golar`; `vue-tsc` is not installed and
  `typescript.typeCheck` in `nuxt.config.ts` must stay off.
- **oxlint** (`oxlint.config.ts`) is category-based: correctness/suspicious/perf are errors,
  pedantic is warnings, style is deliberately off. Type-aware rules run via `oxlint-tsgolint`
  (`--type-aware`); they only see `.ts` files, so types imported from `.vue` files are `error`
  typed there. Prefer adjusting category levels over adding individual rules.
- **ESLint** (`eslint.config.ts`) runs only on `.vue` files with `eslint-plugin-vue`'s recommended
  rules minus layout rules (formatting is oxfmt's job). Do not add JS/TS rules to ESLint; they
  belong in oxlint.
- **oxfmt** (`oxfmt.config.ts`) uses built-in Prettier-compatible defaults plus import sorting
  (type imports first, then builtin/external/internal/relative groups) and `package.json` key
  sorting. `.vue` files are formatted through oxfmt's embedded Prettier.
- **pnpm**: `pnpm-workspace.yaml` sets `minimumReleaseAge` (2 days), so a just-published version
  may be refused; pick the previous one. Build scripts are opt-in via `allowBuilds`.

## Code Style

- oxfmt defaults: double quotes, semicolons, 100 char line width, trailing commas
- Config files follow `const config: SomeConfigType = {...}; export default config;`
- TypeScript strict mode plus the extra strictness flags in `nuxt.config.ts`

## Testing

Vitest with two project environments defined in `vitest.config.ts`:

- **unit** (`test/unit/`) - Node.js environment for composables and utilities
- **nuxt** (`test/nuxt/`) - Nuxt runtime via `@nuxt/test-utils` with happy-dom for component tests

Nuxt test setup file (`test/nuxt/setup.ts`) polyfills `__NUXT_COLOR_MODE__`. Follow this pattern
when adding modules that inject runtime globals.

## Adding Pages and Components

Nuxt auto-imports components from `app/components/` and composables from `app/composables/`. No
manual imports needed. Add new pages as `.vue` files in `app/pages/` - routing is file-based.
