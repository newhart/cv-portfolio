<script setup lang="ts">
const { messages } = useLanguage();
useSeoMeta({
  title: () => messages.value.pages.contactTitle,
  description: () => messages.value.pages.contactDescription,
});
</script>

<template>
  <ContactsPage />
</template>