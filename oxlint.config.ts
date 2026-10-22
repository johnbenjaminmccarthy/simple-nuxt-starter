import type { OxlintConfig } from "oxlint";

const config: OxlintConfig = {
  // Listing plugins replaces oxlint's default set (typescript, unicorn, oxc),
  // so the defaults are repeated here alongside the extras. The vue plugin lints
  // the <script> blocks of .vue files; template rules are left to ESLint
  // (eslint-plugin-vue), see eslint.config.ts.
  plugins: ["typescript", "unicorn", "oxc", "import", "promise", "node", "vitest", "vue"],
  categories: {
    // Errors block `pnpm lint`; warnings are advisory. Unlisted categories
    // (style, restriction, nursery) stay off — style in particular is noisy
    // (sort-keys, capitalized-comments, ...). Adjust levels per taste.
    correctness: "error",
    suspicious: "error",
    perf: "error",
    pedantic: "warn",
  },
  env: {
    builtin: true,
    browser: true,
  },
  ignorePatterns: [".nuxt/", ".output/", "dist/"],
  rules: {
    "no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    // Import hygiene: `import type` whenever possible, one import per module,
    // imports first in the file, blank line after the import block.
    "typescript/consistent-type-imports": "error",
    "typescript/no-import-type-side-effects": "error",
    "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    "import/no-duplicates": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
  },
  overrides: [
    {
      // Test suites are naturally long `describe` blocks.
      files: ["test/**"],
      rules: { "max-lines-per-function": "off" },
    },
  ],
};

export default config;
