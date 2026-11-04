<script setup lang="ts">
import { portfolio } from "~/data/portfolio";
const { language } = useLanguage();

useHead(() => ({
  htmlAttrs: { lang: language.value === "FR" ? "fr" : "en" },
  titleTemplate: (title) =>
    title ? `${title}` : `${portfolio.fullName} — ${portfolio.role}`,
}));
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
