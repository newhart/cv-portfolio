<script setup lang="ts">
import { portfolio } from "~/data/portfolio";

const projects = portfolio.projects.slice(0, 3).map((project) => ({
  title: project.title,
  description: project.description,
  tags: project.technologies,
  image: project.image,
  href: project.href,
}));
const { messages } = useLanguage();
</script>

<template>
  <section id="works" class="works section">
    <div class="container">
      <p class="section-eyebrow" v-reveal>{{ messages.works.eyebrow }}</p>
      <h2 class="section-title" v-reveal>{{ messages.works.title }}</h2>

      <div class="works__grid">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          :index="index"
          v-bind="project"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.works__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-8);
}
</style>
