<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = () => {
  if (colorMode.value === "light") {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "light";
  }
};
</script>

<template>
  <button
    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-lg bg-white dark:bg-gray-900 flex items-center justify-center"
    :aria-label="colorMode.value === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
    @click="toggleColorMode"
  >
    <Icon
      :name="
        colorMode.value === 'light'
          ? 'i-material-symbols:dark-mode'
          : 'i-material-symbols:light-mode'
      "
      class="w-6 h-6 text-gray-700 dark:text-gray-300"
    />
  </button>
</template>
