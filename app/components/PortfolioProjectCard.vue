<script setup lang="ts">
type ProjectAction = {
  label: string;
  href?: string;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  actions: ProjectAction[];
  image: string;
  href: string;
  previewLabel?: string;
  previewStyle?: string;
};

defineProps<{
  project: Project;
  index: number;
  compact?: boolean;
}>();
</script>

<template>
  <article class="portfolio-card" :class="{ 'portfolio-card--compact': compact }" v-reveal="index">
    <a class="portfolio-card__link" :href="project.href" target="_blank" rel="noopener noreferrer">
      <div class="portfolio-card__preview">
        <img
          class="portfolio-card__image"
          :src="project.image"
          :alt="`Aperçu du projet ${project.title}`"
          loading="lazy"
        />
      </div>
      <p class="portfolio-card__technologies">{{ project.technologies.join("   ") }}</p>
      <div class="portfolio-card__body">
        <h3>{{ project.title }} <span aria-hidden="true">↗</span></h3>
        <p class="portfolio-card__description">{{ project.description }}</p>
      </div>
    </a>
  </article>
</template>

<style scoped>
.portfolio-card {
  min-width: 0;
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-surface) 60%, var(--color-bg));
}

.portfolio-card__link {
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.portfolio-card:hover .portfolio-card__link {
  color: inherit;
}

.portfolio-card__preview {
  display: grid;
  place-items: center;
  aspect-ratio: 1.55;
  overflow: hidden;
  border-bottom: 1px solid var(--color-border);
  color: #f0f0f0;
  font-family: var(--font-sans);
  font-size: clamp(0.7rem, 1.5vw, 1.05rem);
  font-weight: 700;
  text-align: center;
}

.portfolio-card__preview--noah {
  background: linear-gradient(135deg, #173746, #1d7272);
  color: #e2fbf6;
}

.portfolio-card__preview--oxentt {
  background: linear-gradient(135deg, #262f47, #4a5481);
  color: #f1f2ff;
}

.portfolio-card__preview--football {
  background: linear-gradient(135deg, #163c2a, #286447);
  color: #e2f5e8;
}

.portfolio-card__preview--bcombio {
  background: linear-gradient(135deg, #623c4a, #a77981);
  color: #fff4f1;
}

.portfolio-card__preview--wipicut {
  background: linear-gradient(135deg, #283448, #3c6171);
  color: #edf5f8;
}

.portfolio-card__preview-label {
  padding: 0.5rem;
  white-space: pre-line;
}

.portfolio-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portfolio-card__technologies {
  min-height: 0.8rem;
  padding: 0.15rem 0.3rem;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.34rem;
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.portfolio-card__body {
  display: flex;
  min-height: 2rem;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.3rem 0.35rem;
}

.portfolio-card__body h3 {
  margin-bottom: 0.3rem;
  font-family: var(--font-mono);
  font-size: 0.42rem;
  line-height: 1.3;
}

.portfolio-card__body h3 span {
  color: var(--color-primary);
}

.portfolio-card__description {
  margin-bottom: 0.3rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.3rem;
  line-height: 1.2;
}

.portfolio-card__actions {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  gap: 0.3rem;
  margin-top: auto;
  line-height: 1;
}

.portfolio-card__actions li {
  display: flex;
  line-height: 1;
}

.portfolio-card__actions a,
.portfolio-card__actions span {
  display: inline-flex;
  min-height: 0.8rem;
  align-items: center;
  padding: 0.1rem 0.2rem;
  border: 1px solid var(--color-primary);
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.3rem;
  line-height: 1;
}

.portfolio-card__actions a:hover {
  color: var(--color-primary);
}

.portfolio-card--compact .portfolio-card__body {
  min-height: 2.3rem;
  padding: 0.2rem 0.25rem;
}

.portfolio-card--compact .portfolio-card__technologies {
  min-height: 0.75rem;
  padding-block: 0.12rem;
  font-size: 0.32rem;
}

.portfolio-card--compact .portfolio-card__body h3 {
  margin-bottom: 0.2rem;
}

.portfolio-card--compact .portfolio-card__description {
  margin-bottom: 0.2rem;
}

@media (min-width: 900px) {
  .portfolio-card__technologies {
    min-height: 1.8rem;
    padding: 0.45rem 0.65rem;
    font-size: 0.62rem;
  }

  .portfolio-card__body {
    min-height: 7rem;
    padding: 0.7rem 0.65rem;
  }

  .portfolio-card__body h3 {
    margin-bottom: 0.45rem;
    font-size: 0.95rem;
  }

  .portfolio-card__description {
    margin-bottom: 0.6rem;
    font-size: 0.72rem;
    line-height: 1.45;
  }

  .portfolio-card__actions a,
  .portfolio-card__actions span {
    min-height: 1.5rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.62rem;
  }

  .portfolio-card--compact .portfolio-card__technologies {
    min-height: 1.6rem;
    padding-block: 0.4rem;
    font-size: 0.58rem;
  }

  .portfolio-card--compact .portfolio-card__body {
    min-height: 6rem;
    padding: 0.6rem;
  }
}
</style>