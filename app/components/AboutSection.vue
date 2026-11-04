<script setup lang="ts">
import { portfolio } from "~/data/portfolio";
const { messages } = useLanguage();
</script>

<template>
  <section id="about-me" class="about section">
    <div class="container about__inner">
      <header class="about__heading" v-reveal>
        <p class="about__eyebrow"><span>/</span>{{ messages.about.eyebrow }}</p>
        <h2>{{ portfolio.location }}</h2>
      </header>

      <div class="about__intro">
        <div class="about__copy" v-reveal>
          <p>{{ messages.about.lead }} {{ portfolio.fullName }}, {{ messages.about.role }} {{ portfolio.location }}. {{ messages.about.intro }}</p>
          <p>{{ messages.about.approach }}</p>
        </div>

        <figure class="about__portrait" v-reveal="1">
          <NuxtImg
            src="/img/about.png"
            :alt="messages.hero.imageAlt"
            width="333"
            height="508"
            format="webp"
            loading="lazy"
          />
          <div class="about__portrait-dots" aria-hidden="true" />
        </figure>
      </div>

      <section class="about__experience" aria-labelledby="experience-title" v-reveal>
        <h3 id="experience-title"><span>#</span>{{ messages.about.experienceTitle }}</h3>
        <article v-for="(job, index) in portfolio.experience" :key="job.company" class="experience-item">
          <div class="experience-item__heading">
            <h4>{{ messages.about.experience[index].role }} · {{ job.company }}</h4>
            <p>{{ messages.about.experience[index].period }}</p>
          </div>
          <ul>
            <li v-for="detail in messages.about.experience[index].details" :key="detail">{{ detail }}</li>
          </ul>
        </article>
      </section>

      <section class="about__skills" aria-labelledby="skills-title" v-reveal>
        <h3 id="skills-title"><span>#</span>{{ messages.about.skillTitle }}</h3>
        <div class="about__skill-grid">
          <article v-for="(group, index) in portfolio.skillGroups" :key="group.title" class="skill-group">
            <h4>{{ messages.about.skillGroups[index] }}</h4>
            <ul>
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="about__education" aria-labelledby="education-title" v-reveal>
        <div>
          <h3 id="education-title"><span>#</span>{{ messages.about.educationTitle }}</h3>
          <ul>
            <li v-for="item in messages.about.education" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div>
          <h3><span>#</span>{{ messages.about.awardsTitle }}</h3>
          <ul>
            <li v-for="award in messages.about.awards" :key="award">{{ award }}</li>
          </ul>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.about {
  position: relative;
  overflow: hidden;
  padding-block: 0.5rem 3rem;
}

.about__inner {
  position: relative;
  max-width: 500px;
}

.about__heading {
  margin-bottom: 1.5rem;
}

.about__eyebrow,
.about__skills h3,
.about__facts h3 {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
}

.about__experience,
.about__education {
  margin-top: 2rem;
}

.about__experience h3,
.about__education h3 {
  margin-bottom: 0.8rem;
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 600;
}

.about__experience h3 span,
.about__education h3 span {
  color: var(--color-primary);
}

.experience-item {
  padding-block: 0.7rem;
  border-top: 1px solid var(--color-border);
  font-family: var(--font-mono);
  font-size: 0.62rem;
}

.experience-item__heading {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.4rem;
  margin-bottom: 0.35rem;
}

.experience-item__heading h4 {
  font-size: inherit;
  font-weight: 600;
}

.experience-item__heading p,
.experience-item li,
.about__education li {
  color: var(--color-text-muted);
}

.experience-item ul,
.about__education ul {
  display: grid;
  gap: 0.3rem;
  padding-left: 1rem;
  list-style: disc;
}

.about__education {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.62rem;
}

.about__eyebrow span,
.about__skills h3 span,
.about__facts h3 span {
  color: var(--color-primary);
}

.about__heading h2 {
  margin-top: 0.45rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 400;
}

.about__intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 150px;
  align-items: start;
  gap: 1.5rem;
  min-height: 220px;
}

.about__copy {
  padding-top: 1.8rem;
  font-family: var(--font-mono);
  font-size: 0.62rem;
  line-height: 1.6;
}

.about__copy p {
  color: var(--color-text-muted);
  margin-bottom: 0.8rem;
}

.about__portrait {
  position: relative;
  align-self: start;
  width: 100%;
  margin: 0;
}

.about__portrait img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 220px;
  object-fit: contain;
  object-position: center bottom;
}

.about__portrait-dots {
  position: absolute;
  z-index: 2;
  right: -0.15rem;
  bottom: 3rem;
  width: 48px;
  height: 48px;
  background-image: radial-gradient(var(--color-text-muted) 1px, transparent 1px);
  background-size: 10px 10px;
  pointer-events: none;
}

.about__skills {
  margin-top: 1.25rem;
}

.about__skills h3,
.about__facts h3 {
  margin-bottom: 1.25rem;
}

.about__skill-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: start;
  gap: 0.35rem;
}

.skill-group {
  min-width: 0;
  border: 1px solid var(--color-border);
  font-family: var(--font-mono);
  font-size: 0.43rem;
}

.skill-group h4 {
  padding: 0.3rem 0.3rem;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: inherit;
  font-weight: 500;
}

.skill-group ul {
  display: grid;
  gap: 0.1rem;
  padding: 0.3rem 0.3rem 0.35rem;
}

.skill-group li {
  color: var(--color-text-muted);
  overflow-wrap: anywhere;
}

.about__facts {
  position: relative;
  margin-top: 3.5rem;
}

.about__facts ul {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  max-width: 440px;
}

.about__facts li {
  padding: 0.2rem 0.35rem;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.55rem;
  line-height: 1.3;
}

.about__facts-dots {
  position: absolute;
  right: 2rem;
  top: 1.8rem;
  width: 44px;
  height: 44px;
  background-image: radial-gradient(var(--color-text-muted) 1px, transparent 1px);
  background-size: 10px 10px;
  opacity: 0.75;
}

.about__facts-frame {
  position: absolute;
  right: 3rem;
  top: 3.5rem;
  width: 44px;
  height: 44px;
  border: 1px solid var(--color-primary);
}

.about__facts-frame::after {
  content: "";
  position: absolute;
  top: -13px;
  left: 25px;
  width: 32px;
  height: 32px;
  border: 1px solid var(--color-primary);
}

@media (min-width: 900px) {
  .about__inner {
    max-width: var(--container);
  }

  .about__heading {
    margin-bottom: 2rem;
  }

  .about__eyebrow,
  .about__skills h3,
  .about__facts h3 {
    font-size: 1.2rem;
  }

  .about__heading h2 {
    font-size: 0.85rem;
  }

  .about__intro {
    grid-template-columns: minmax(0, 1fr) 220px;
    gap: 2.5rem;
    min-height: 300px;
  }

  .about__copy {
    font-size: 0.82rem;
  }

  .about__experience h3,
  .about__education h3 {
    font-size: 1.2rem;
  }

  .experience-item,
  .about__education {
    font-size: 0.78rem;
  }

  .about__portrait img {
    height: 300px;
  }

  .skill-group {
    font-size: 0.66rem;
  }

  .skill-group {
    font-size: 0.58rem;
  }
}

@media (max-width: 860px) {
  .about__inner {
    max-width: min(500px, 100%);
  }
}

@media (max-width: 520px) {
  .about__intro {
    grid-template-columns: minmax(0, 1fr) 120px;
    gap: 0.75rem;
    min-height: 230px;
  }

  .about__copy {
    font-size: 0.58rem;
  }

  .about__portrait img {
    height: 190px;
  }

  .about__skill-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
  }

  .skill-group {
    font-size: 0.65rem;
  }

  .about__facts-dots,
  .about__facts-frame {
    opacity: 0.35;
  }
}
</style>
