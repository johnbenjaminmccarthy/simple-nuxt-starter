import type { Linter } from "eslint";

import tsParser from "@typescript-eslint/parser";
import pluginVue from "eslint-plugin-vue";
import { defineConfig, globalIgnores } from "eslint/config";

// ESLint only runs on .vue files, and only with eslint-plugin-vue's rules: everything else
// (JS/TS correctness, imports, promises, type-aware rules) is handled by oxlint, which can't lint
// Vue templates. Every config object is scoped to **/*.vue so that no other files are touched.
const vueRecommended: Linter.Config[] = [];
for (const entry of pluginVue.configs["flat/recommended"]) {
  vueRecommended.push({ ...entry, files: ["**/*.vue"] });
}

const config: Linter.Config[] = defineConfig([
  globalIgnores([".nuxt/", ".output/", "dist/", "node_modules/"]),
  ...vueRecommended,
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        // Parses <script lang="ts"> blocks and TypeScript in template expressions.
        // Requires the TypeScript 6 JS API, which is why `typescript` resolves to
        // @typescript/typescript6 in package.json.
        parser: tsParser,
        extraFileExtensions: [".vue"],
        sourceType: "module",
      },
    },
    // Formatting is oxfmt's job: turn off eslint-plugin-vue's layout rules so they
    // never disagree with it.
    rules: pluginVue.configs["no-layout-rules"].rules,
  },
  {
    // Nuxt's file-based routing and layouts dictate single-word names (index.vue, default.vue).
    files: ["app/app.vue", "app/error.vue", "app/pages/**/*.vue", "app/layouts/**/*.vue"],
    rules: { "vue/multi-word-component-names": "off" },
  },
]);

export default config;
