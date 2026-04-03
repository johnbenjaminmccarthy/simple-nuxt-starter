import tailwindcss from "@tailwindcss/vite";

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
  modules: ["@nuxtjs/color-mode", "@nuxt/test-utils/module", "@nuxt/icon", "@nuxt/eslint"],
  vite: { plugins: [tailwindcss()] },
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
  eslint: {
    config: {
      typescript: {
        strict: true,
      },
    },
  },
});
