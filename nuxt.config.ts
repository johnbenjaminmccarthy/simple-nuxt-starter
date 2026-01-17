export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  app: {
    baseURL: "/playground/simple-nuxt-starter/",
    head: {
      title: "Nuxt Minimal Starter",
      meta: [{ name: "description", content: "Nuxt Minimal Starter" }],
    },
  },
  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        noEmit: true,
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
