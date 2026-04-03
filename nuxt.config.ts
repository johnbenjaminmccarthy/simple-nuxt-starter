export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: "/",
    head: {
      title: "Nuxt Minimal Starter",
      meta: [{ name: "description", content: "Nuxt Minimal Starter" }],
    },
  },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@nuxt/test-utils/module",
    "@nuxt/icon",
    "@nuxt/eslint",
  ],
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: true,
    typeCheck: true,
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
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            background: "var(--background)",
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
          },
        },
      },
    },
  },
  eslint: {
    config: {
      typescript: {
        strict: true,
      },
    },
  },
});
