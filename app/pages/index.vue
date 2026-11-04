<script setup lang="ts">
const { messages } = useLanguage();
useSeoMeta({
  title: () => messages.value.pages.homeTitle,
  description: () => messages.value.pages.homeDescription,
});
</script>

<template>
  <main id="main-content">
    <HeroSection />
    <WorksSection />
    <ContactSection />
  </main>
</template>
