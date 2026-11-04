<script setup lang="ts">
const { messages } = useLanguage();
useSeoMeta({
  title: () => messages.value.pages.aboutTitle,
  description: () => messages.value.pages.aboutDescription,
});
</script>

<template>
  <main id="main-content">
    <AboutSection />
  </main>
</template>