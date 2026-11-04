<script setup lang="ts">
import { portfolio } from "~/data/portfolio";
const { messages } = useLanguage();
</script>

<template>
  <section id="home" class="hero section">
    <div class="container hero__inner">
      <div class="hero__content" v-reveal>
        <p class="section-eyebrow">{{ messages.hero.eyebrow }}</p>
        <h1 class="hero__title">
          {{ messages.hero.lead }} {{ portfolio.displayName }}
          <span class="hero__title-accent">{{ messages.hero.role }}</span>.
        </h1>
        <p class="hero__text">{{ messages.hero.summary }}</p>

        <div class="hero__actions">
          <a class="btn btn--primary" href="/projects">{{ messages.hero.projectsLink }}</a>
        </div>
      </div>

      <div class="hero__visual" v-reveal="1">
        <div class="hero__frame" aria-hidden="true" />
        <NuxtImg
          class="hero__photo"
          src="/img/bg-left.png"
          alt="Illustration du profil"
          width="457"
          height="386"
          format="webp"
          fetchpriority="high"
          preload
        />
        <div class="hero__dots" aria-hidden="true" />
        <p class="hero__status"><span aria-hidden="true" /> BIGDEV · depuis octobre 2022</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-block: 5rem 4rem;
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.9fr);
  align-items: center;
  gap: 3rem;
}

.hero__title {
  max-width: 22ch;
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
  margin-block: 0.75rem 1rem;
}

.hero__title-accent {
  color: var(--color-primary);
}

.hero__text {
  color: var(--color-text-muted);
  max-width: 42ch;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  margin-bottom: 1.5rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 1rem;
  border-radius: 2px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast),
    background var(--transition-fast), color var(--transition-fast);
}

.btn--primary {
  border: 1px solid var(--color-primary);
  color: var(--color-text);
}

.btn--primary:hover {
  color: var(--color-primary);
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.hero__visual {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero__photo {
  position: relative;
  z-index: 1;
  width: min(100%, 303px);
  height: auto;
}

.hero__frame {
  position: absolute;
  z-index: 0;
  top: 30%;
  left: -1rem;
  width: 86px;
  aspect-ratio: 1;
  border: 1px solid color-mix(in srgb, var(--color-primary) 75%, transparent);
  pointer-events: none;
}

.hero__frame::after {
  content: "";
  position: absolute;
  top: -29px;
  left: 56px;
  width: 59px;
  aspect-ratio: 1;
  border: 1px solid color-mix(in srgb, var(--color-primary) 75%, transparent);
}

.hero__dots {
  position: absolute;
  z-index: 2;
  right: 0.75rem;
  bottom: 3.5rem;
  width: 56px;
  height: 56px;
  background-image: radial-gradient(var(--color-text-muted) 1px, transparent 1px);
  background-size: 12px 12px;
  opacity: 0.72;
  pointer-events: none;
}

.hero__status {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  width: min(100%, 303px);
  min-height: 1.65rem;
  margin-top: 0.25rem;
  padding: 0.3rem 0.55rem;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  white-space: nowrap;
}

.hero__status span {
  flex: 0 0 10px;
  width: 10px;
  height: 10px;
  background: var(--color-primary);
}

@media (max-width: 860px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero__content {
    order: 1;
  }

  .hero__title {
    max-width: 15ch;
    font-size: 1.125rem;
  }

  .hero__text {
    max-width: 50ch;
  }

  .hero__visual {
    order: 0;
    align-items: flex-start;
    margin-left: 1rem;
  }

  .hero__photo {
    width: min(100%, 303px);
  }
}

@media (max-width: 520px) {
  .hero {
    padding-block: 3.5rem 2rem;
  }

  .hero__inner {
    gap: 1.75rem;
  }

  .hero__title {
    font-size: 1.5rem;
  }
}

@media (min-width: 900px) {
  .hero__title {
    font-size: 1.6rem;
  }

  .hero__text {
    font-size: 0.9rem;
  }

  .hero .section-eyebrow {
    font-size: 0.9rem;
  }

  .hero .btn {
    font-size: 0.9rem;
  }

  .hero__status {
    font-size: 0.78rem;
  }
}
</style>
