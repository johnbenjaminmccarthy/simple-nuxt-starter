// @nuxtjs/color-mode plugin.client.js reads window.__NUXT_COLOR_MODE__ which
// is normally set by the module's inline <script> injected into the HTML <head>
// before Vue hydrates. In the nuxt test environment no HTML is served, so the
// script never runs and the global is undefined.
//
// The plugin has a built-in guard (`if (import.meta.test && !helper)`) that is
// supposed to provide a fallback, but @nuxt/test-utils explicitly sets
// `import.meta.vitest = "undefined"` in its Vite define config and does not
// set `import.meta.test`, so the guard never fires.
//
// This setup file replicates the minimal shape that the inline script would
// have provided, silencing the "error caught during app initialization" stderr
// noise without affecting any real test behaviour.

if (typeof window !== "undefined") {
  (window as unknown as Record<string, unknown>)["__NUXT_COLOR_MODE__"] = {
    preference: "system",
    value: "light",
    getColorScheme: () => "light",
    addColorScheme: () => {},
    removeColorScheme: () => {},
  };
}

// Vue 3 emits this via console.info the first time a Suspense boundary is
// created. @nuxt/test-utils wraps every app mount in Suspense internally
// (see nuxt-root.mjs), so the warning fires for every test file.
//
// @nuxt/test-utils/vitest-environment.mjs already patches console.info to
// suppress it, but it restores the original before tests run — so the patch
// is gone by the time the first Suspense is actually mounted. This setup file
// runs after the environment restore and re-applies the suppression.
const _consoleInfo = console.info;
console.info = (...args: unknown[]) => {
  if (args[0] === "<Suspense> is an experimental feature and its API will likely change.") {
    return;
  }
  return _consoleInfo(...args);
};
