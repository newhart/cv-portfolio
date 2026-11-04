<script setup lang="ts">
const { messages } = useLanguage();
useSeoMeta({
  title: () => messages.value.pages.projectsTitle,
  description: () => messages.value.pages.projectsDescription,
});
</script>

<template>
  <ProjectsSection />
</template>