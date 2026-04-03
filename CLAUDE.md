# Simple Nuxt Starter

Nuxt 4 template for static (SSG) or SPA projects. SSR is disabled by default (`ssr: false` in
`nuxt.config.ts`). To enable SSR, set `ssr: true`.

## Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm generate         # Static site generation
pnpm preview          # Preview production build
pnpm lint:fix         # Lint and autofix
pnpm format:fix       # Format with Prettier
pnpm typecheck        # TypeScript type checking
pnpm test             # Run all tests
pnpm test:unit        # Unit tests only (Node.js env)
pnpm test:nuxt        # Component tests (Nuxt env with happy-dom)
pnpm check            # Full check: lint + format + typecheck + test
```

Run `pnpm check` before committing.

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
vitest.config.ts       # Test runner configuration
```

## Modules

- **@nuxtjs/tailwindcss** - Utility-first CSS. Theme colors (`background`, `primary`, `secondary`)
  are mapped to CSS variables in `main.css`.
- **@nuxtjs/color-mode** - Dark/light mode. Uses system preference with light fallback. Toggle via
  `useColorMode()`.
- **@nuxt/icon** - Icons via `<Icon>` component. Uses `@iconify-json/material-symbols` icon set.
- **@nuxt/eslint** - Linting with strict TypeScript rules.

## Code Style

- Prettier: double quotes, 100 char line width, trailing commas
- Import sorting handled by `@trivago/prettier-plugin-sort-imports`
- ESLint extends Prettier config to avoid conflicts. Always run lint:fix first and then format:fix,
  to avoid having to re-format linted code.
- TypeScript strict mode enabled

## Testing

Vitest with two project environments defined in `vitest.config.ts`:

- **unit** (`test/unit/`) - Node.js environment for composables and utilities
- **nuxt** (`test/nuxt/`) - Nuxt runtime via `@nuxt/test-utils` with happy-dom for component tests

Nuxt test setup file (`test/nuxt/setup.ts`) polyfills `__NUXT_COLOR_MODE__`. Follow this pattern
when adding modules that inject runtime globals.

## Adding Pages and Components

Nuxt auto-imports components from `app/components/` and composables from `app/composables/`. No
manual imports needed. Add new pages as `.vue` files in `app/pages/` - routing is file-based.
