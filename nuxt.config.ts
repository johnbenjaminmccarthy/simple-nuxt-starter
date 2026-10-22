import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-23",
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: "/",
    head: {
      title: "Nuxt Minimal Starter",
      meta: [{ name: "description", content: "Nuxt Minimal Starter" }],
    },
  },
  modules: ["@nuxtjs/color-mode", "@nuxt/test-utils/module", "@nuxt/icon"],
  vite: { plugins: [tailwindcss()] },
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: true,
    // Build-time type checking (vite-plugin-checker) requires vue-tsc, which needs the
    // TypeScript 6 JS API. Type checking runs with Golar (TypeScript 7 engine) via
    // `pnpm typecheck` instead.
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        noEmit: true,
        noUncheckedIndexedAccess: true,
        noImplicitOverride: true,
        noPropertyAccessFromIndexSignature: true,
        exactOptionalPropertyTypes: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        noImplicitReturns: true,
        noFallthroughCasesInSwitch: true,
      },
    },
  },
  colorMode: {
    preference: "system",
    fallback: "light",
  },
});
