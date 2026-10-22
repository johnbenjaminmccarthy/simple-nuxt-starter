import type { OxfmtConfig } from "oxfmt";

const config: OxfmtConfig = {
  // Formatting style follows oxfmt's built-in (Prettier-compatible) defaults.
  // .vue files are formatted through oxfmt's embedded Prettier; their <script> blocks natively.
  jsdoc: true,
  sortImports: {
    // Type-only imports first, then oxfmt's default group order. Groups are
    // separated by blank lines (newlinesBetween defaults to true).
    groups: [
      "type",
      "builtin",
      "external",
      ["internal", "subpath"],
      ["parent", "sibling", "index"],
      "unknown",
    ],
  },
  ignorePatterns: [".nuxt", ".output", "dist", "node_modules", "pnpm-lock.yaml"],
};

export default config;
