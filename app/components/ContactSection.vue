<script setup lang="ts">
import { portfolio } from "~/data/portfolio";
const { messages } = useLanguage();
</script>

<template>
  <section id="contacts" class="contact section">
    <div class="container contact__inner">
      <div v-reveal>
        <p class="section-eyebrow">{{ messages.homeContact.eyebrow }}</p>
        <h2 class="section-title">{{ messages.homeContact.title }}</h2>
        <p class="contact__text">{{ messages.homeContact.intro }}</p>
      </div>

      <div class="contact__links" v-reveal="1">
        <a :href="`mailto:${portfolio.email}`">{{ portfolio.email }}</a>
        <a :href="portfolio.linkedin.href" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="btn btn--primary" href="/contacts">{{ messages.homeContact.allDetails }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__inner {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: var(--space-16);
}

.contact__text {
  color: var(--color-text-muted);
  max-width: 42ch;
}

.contact__links {
  display: grid;
  justify-items: start;
  gap: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.contact__links > a:not(.btn) {
  transition: color var(--transition-fast);
}

.contact__links > a:not(.btn):hover {
  color: var(--color-primary);
}

.contact__links .btn {
  margin-top: 0.4rem;
}

@media (max-width: 860px) {
  .contact__inner {
    grid-template-columns: 1fr;
  }
}
</style>
