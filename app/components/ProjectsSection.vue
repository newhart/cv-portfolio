<script setup lang="ts">
import { portfolio } from "~/data/portfolio";
const { messages } = useLanguage();

const projects = computed(() => portfolio.projects.map((project, index) => ({
  ...project,
  description: messages.value.projects.descriptions[index] ?? project.description,
  actions: [] as { label: string; href?: string }[],
})));
</script>

<template>
  <main class="projects-page">
    <div class="container projects-page__inner">
      <header class="projects-page__heading" v-reveal>
        <h1><span>/</span>{{ messages.projects.title.slice(1) }}</h1>
        <p>{{ messages.projects.subtitle }}</p>
      </header>

      <section class="project-group" aria-labelledby="projects-title">
        <h2 id="projects-title"><span>#</span>{{ messages.projects.groupTitle }}</h2>
        <div class="project-group__grid">
          <PortfolioProjectCard
            v-for="(project, index) in projects"
            :key="project.title"
            :project="project"
            :index="index"
          />
        </div>
      </section>

    </div>
    <div class="projects-page__decoration" aria-hidden="true" />
  </main>
</template>

<style scoped>
.projects-page {
  position: relative;
  overflow: hidden;
  padding-block: 0.35rem 3rem;
}

.projects-page__inner {
  position: relative;
  z-index: 1;
  width: 85%;
  max-width: 500px;
  left: 0.6rem;
}

.projects-page__heading {
  margin-bottom: 0.7rem;
  font-family: var(--font-mono);
}

.projects-page__heading h1 {
  margin-bottom: 0.25rem;
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 600;
}

.projects-page__heading h1 span,
.project-group h2 span {
  color: var(--color-primary);
}

.projects-page__heading p {
  color: var(--color-text-muted);
  font-size: 0.58rem;
}

.project-group h2 {
  margin-bottom: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 500;
}

.project-group__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  gap: 0.55rem;
}

.project-group--small {
  margin-top: 1.1rem;
}

.projects-page__decoration {
  position: absolute;
  top: 6rem;
  right: max(1rem, calc((100% - 500px) / 2 - 2rem));
  width: 1.5rem;
  height: 3rem;
  border: 1px solid var(--color-border);
}

@media (min-width: 900px) {
  .projects-page__inner {
    width: 100%;
    max-width: var(--container);
    left: 0;
  }

  .projects-page__heading {
    margin-bottom: 1.5rem;
  }

  .projects-page__heading h1 {
    font-size: 1.3rem;
  }

  .projects-page__heading p {
    font-size: 0.78rem;
  }

  .project-group h2 {
    font-size: 1.1rem;
  }

  .project-group__grid {
    gap: 0.75rem;
  }

  .project-group--small {
    margin-top: 2rem;
  }
}

@media (max-width: 380px) {
  .projects-page__inner {
    width: 90%;
  }

  .project-group__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>