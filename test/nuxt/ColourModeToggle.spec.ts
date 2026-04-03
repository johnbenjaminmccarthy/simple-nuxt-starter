import { mountSuspended } from "@nuxt/test-utils/runtime";
import { beforeEach, describe, expect, it } from "vitest";
import ColourModeToggle from "~/components/ColourModeToggle.vue";

describe("ColourModeToggle", () => {
  beforeEach(() => {
    // Reset to the default so each test starts from a clean state.
    // The nuxt.config.ts fallback is "light", which is what the test
    // environment resolves "system" to (see test/nuxt/setup.ts).
    useColorMode().preference = "system";
  });

  it("defaults to system preference which falls back to light", async () => {
    const colorMode = useColorMode();

    expect(colorMode.preference).toBe("system");
    expect(colorMode.value).toBe("light");
  });

  it("shows the dark-mode switch when system resolves to light", async () => {
    // preference is "system", which resolves to "light" in the test env.
    // The component uses colorMode.value, so it correctly offers dark mode.
    const wrapper = await mountSuspended(ColourModeToggle);

    expect(wrapper.find("button").attributes("aria-label")).toBe("Switch to dark mode");
  });

  it("toggles from system/light to dark on click", async () => {
    const wrapper = await mountSuspended(ColourModeToggle);
    const colorMode = useColorMode();

    expect(colorMode.preference).toBe("system");
    expect(colorMode.value).toBe("light");

    await wrapper.find("button").trigger("click");

    expect(colorMode.preference).toBe("dark");
  });

  it("renders a button with an accessible label", async () => {
    const wrapper = await mountSuspended(ColourModeToggle);
    const button = wrapper.find("button");

    expect(button.exists()).toBe(true);
    expect(button.attributes("aria-label")).toBeTruthy();
  });

  it("toggles color mode from light to dark on click", async () => {
    const wrapper = await mountSuspended(ColourModeToggle);
    const colorMode = useColorMode();

    colorMode.preference = "light";
    await wrapper.vm.$nextTick();

    expect(wrapper.find("button").attributes("aria-label")).toBe("Switch to dark mode");

    await wrapper.find("button").trigger("click");

    expect(colorMode.preference).toBe("dark");
    expect(wrapper.find("button").attributes("aria-label")).toBe("Switch to light mode");
  });

  it("toggles color mode from dark to light on click", async () => {
    const wrapper = await mountSuspended(ColourModeToggle);
    const colorMode = useColorMode();

    colorMode.preference = "dark";
    await wrapper.vm.$nextTick();

    expect(wrapper.find("button").attributes("aria-label")).toBe("Switch to light mode");

    await wrapper.find("button").trigger("click");

    expect(colorMode.preference).toBe("light");
    expect(wrapper.find("button").attributes("aria-label")).toBe("Switch to dark mode");
  });
});
