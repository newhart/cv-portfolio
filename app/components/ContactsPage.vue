<script setup lang="ts">
import { portfolio } from "~/data/portfolio";

const socialLinks = [
  { name: "GitHub", label: portfolio.github.label, href: portfolio.github.href, icon: "github" },
  { name: "LinkedIn", label: "Profil LinkedIn", href: portfolio.linkedin.href, icon: "linkedin" },
  { name: "Portfolio", label: "haritiana-kely.vercel.app", href: portfolio.website.href, icon: "website" },
];
const { messages } = useLanguage();
</script>

<template>
  <main class="contacts-page">
    <div class="container contacts-page__inner">
      <header class="contacts-page__heading" v-reveal>
        <h1><span>/</span>{{ messages.contact.title.slice(1) }}</h1>
        <p>{{ messages.contact.subtitle }}</p>
      </header>

      <div class="contacts-page__content">
        <p class="contacts-page__intro" v-reveal>{{ messages.contact.intro }}</p>

        <div class="contacts-page__cards" v-reveal="1">
          <section class="contact-card" aria-labelledby="phone-title">
            <h2 id="phone-title">{{ messages.contact.phone }}</h2>
            <a v-for="phone in portfolio.phones" :key="phone.href" :href="phone.href">
              {{ phone.display }}
            </a>
          </section>

          <section class="contact-card contact-card--message" aria-labelledby="message-title">
            <h2 id="message-title">{{ messages.contact.message }}</h2>
            <a :href="`mailto:${portfolio.email}`">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 5h20v14H2V5Zm10 7.2L20 7H4l8 5.2ZM4 17h16V9.4l-8 5.2-8-5.2V17Z" />
              </svg>
              <span>{{ portfolio.email }}</span>
            </a>
            <a :href="portfolio.linkedin.href" target="_blank" rel="noopener noreferrer">
              <span class="contact-card__linkedin" aria-hidden="true">in</span>
              <span>{{ messages.contact.linkedin }}</span>
            </a>
          </section>
        </div>
      </div>

      <section class="contacts-page__social" aria-labelledby="all-media-title" v-reveal>
        <h2 id="all-media-title"><span>#</span>{{ messages.contact.networks }}</h2>
        <ul>
          <li v-for="social in socialLinks" :key="social.name">
            <a :href="social.href" target="_blank" rel="noopener noreferrer">
              <img v-if="social.icon === 'github'" src="/icons/github.svg" alt="" />
              <span v-else-if="social.icon === 'linkedin'" class="contacts-page__linkedin-icon" aria-hidden="true">in</span>
              <svg v-else viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.9 9h-3a15.7 15.7 0 0 0-1.3-5 8 8 0 0 1 4.3 5ZM12 4c.9 1.2 1.7 3.5 1.9 7h-3.8c.2-3.5 1-5.8 1.9-7ZM8.4 6a15.7 15.7 0 0 0-1.3 5h-3a8 8 0 0 1 4.3-5ZM4.1 13h3a15.7 15.7 0 0 0 1.3 5 8 8 0 0 1-4.3-5Zm7.9 7c-.9-1.2-1.7-3.5-1.9-7h3.8c-.2 3.5-1 5.8-1.9 7Zm3.6-2a15.7 15.7 0 0 0 1.3-5h3a8 8 0 0 1-4.3 5Z" />
              </svg>
              <span>{{ social.icon === "github" ? messages.contact.githubProfile : social.icon === "linkedin" ? messages.contact.linkedinProfile : social.label }}</span>
            </a>
          </li>
        </ul>
      </section>

      <div class="contacts-page__dots" aria-hidden="true" />
      <div class="contacts-page__frame" aria-hidden="true" />
    </div>
  </main>
</template>

<style scoped>
.contacts-page {
  position: relative;
  overflow: hidden;
  min-height: 330px;
  padding-block: 1.5rem 3rem;
}

.contacts-page__inner {
  position: relative;
  min-height: 300px;
  max-width: var(--container);
}

.contacts-page__heading h1 {
  margin-bottom: 0.35rem;
  font-family: var(--font-mono);
  font-size: 1.2rem;
  font-weight: 600;
}

.contacts-page__heading h1 span,
.contacts-page__social h2 span {
  color: var(--color-primary);
}

.contacts-page__heading > p {
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.72rem;
}

.contacts-page__content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 2rem;
  margin-top: 2rem;
}

.contacts-page__intro {
  max-width: 46ch;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.82rem;
  line-height: 1.65;
}

.contacts-page__cards {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.contact-card {
  display: grid;
  gap: 0.4rem;
  width: 137px;
  min-width: 137px;
  padding: 0.7rem;
  border: 1px solid var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.72rem;
}

.contact-card h2 {
  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 500;
  white-space: nowrap;
}

.contact-card > a {
  color: var(--color-text-muted);
  white-space: nowrap;
}

.contact-card__linkedin,
.contacts-page__linkedin-icon {
  display: inline-grid;
  flex: 0 0 var(--icon-size-inline);
  width: var(--icon-size-inline);
  height: var(--icon-size-inline);
  place-items: center;
  border-radius: 2px;
  background: currentColor;
  color: var(--color-bg);
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 700;
}

.contact-card--message {
  width: 220px;
  min-width: 220px;
}

.contact-card--message a {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
}

.contact-card svg {
  flex: 0 0 var(--icon-size-inline);
  width: var(--icon-size-inline);
  height: var(--icon-size-inline);
  fill: currentColor;
}

.contacts-page__social {
  margin-top: 1.4rem;
}

.contacts-page__social h2 {
  margin-bottom: 0.8rem;
  font-family: var(--font-mono);
  font-size: 1.35rem;
}

.contacts-page__social ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.contacts-page__social a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.contacts-page__social a:hover {
  color: var(--color-text);
}

.contacts-page__social svg {
  width: var(--icon-size-social);
  height: var(--icon-size-social);
  fill: currentColor;
}

.contacts-page__social img,
.contacts-page__linkedin-icon {
  flex: 0 0 var(--icon-size-social);
  width: var(--icon-size-social);
  height: var(--icon-size-social);
}

.contacts-page__social img {
  opacity: 0.75;
}

.contacts-page__dots {
  position: absolute;
  left: -6.5rem;
  bottom: 4.5rem;
  width: 3rem;
  height: 3rem;
  background-image: radial-gradient(var(--color-text-muted) 1px, transparent 1px);
  background-size: 0.6rem 0.6rem;
}

.contacts-page__frame {
  position: absolute;
  top: 6rem;
  right: -3rem;
  width: 3rem;
  height: 5rem;
  border: 1px solid var(--color-text-muted);
}

@media (min-width: 900px) {
  .contacts-page {
    min-height: 330px;
    padding-block: 2.5rem 3rem;
  }

  .contacts-page__inner {
    min-height: 280px;
  }

  .contacts-page__heading h1 {
    font-size: 1.5rem;
  }

  .contacts-page__heading > p {
    font-size: 0.85rem;
  }

  .contacts-page__content {
    gap: 3rem;
    margin-top: 2.5rem;
  }

  .contacts-page__intro {
    font-size: 0.78rem;
  }

  .contact-card {
    padding: 0.55rem;
    font-size: 0.68rem;
  }

  .contact-card h2 {
    font-size: 0.7rem;
  }

  .contacts-page__social {
    margin-top: 1.2rem;
  }

  .contacts-page__social h2 {
    font-size: 1.5rem;
  }

  .contacts-page__social a {
    font-size: 0.85rem;
  }
}

@media (max-width: 760px) {
  .contacts-page__content {
    grid-template-columns: 1fr;
  }

  .contacts-page__cards {
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .contacts-page {
    padding-block: 1.25rem 2rem;
  }

  .contacts-page__content {
    gap: 1.25rem;
    margin-top: 1.5rem;
  }

  .contacts-page__intro {
    font-size: 0.72rem;
  }

  .contacts-page__cards {
    display: grid;
    grid-template-columns: 1fr;
  }

  .contact-card {
    min-width: 0;
    width: 100%;
  }
}
</style>