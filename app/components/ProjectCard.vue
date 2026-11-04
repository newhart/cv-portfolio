<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  tags: string[];
  href?: string;
  index: number;
}>();
</script>

<template>
  <article class="project-card" v-reveal="index">
    <div class="project-card__top">
      <span class="project-card__index">{{ String(index + 1).padStart(2, "0") }}</span>
      <a
        v-if="href"
        class="project-card__arrow"
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Voir le projet ${title}`"
      >
        ↗
      </a>
    </div>
    <h3 class="project-card__title">{{ title }}</h3>
    <p class="project-card__desc">{{ description }}</p>
    <ul class="project-card__tags">
      <li v-for="tag in tags" :key="tag">{{ tag }}</li>
    </ul>
  </article>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  transition: border-color var(--transition-base), background var(--transition-base);
}

.project-card:hover {
  border-color: var(--color-primary);
  background: color-mix(in srgb, var(--color-primary) 4%, var(--color-surface));
}

.project-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;
}

.project-card__index {
  font-family: var(--font-mono);
  color: var(--color-primary);
  font-size: var(--fs-small);
}

.project-card__arrow {
  color: var(--color-text-muted);
  transition: transform var(--transition-base), color var(--transition-base);
}

.project-card__arrow {
  color: var(--color-primary);
  font-family: var(--font-mono);
}

.project-card__title {
  font-size: 1rem;
  margin-bottom: var(--space-2);
}

.project-card__desc {
  color: var(--color-text-muted);
  font-size: var(--fs-small);
  margin-bottom: var(--space-4);
  flex-grow: 1;
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.project-card__tags li {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-gray);
  background: var(--color-surface-alt);
  border: 1px solid var(--color-border);
  border-radius: 2px;
  padding: 0.2em 0.5em;
}
</style>
