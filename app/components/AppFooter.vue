<script setup lang="ts">
import { portfolio } from "~/data/portfolio";

const { messages } = useLanguage();
const year = new Date().getFullYear();
const socialLinks = [
  { name: "GitHub", icon: "github", href: portfolio.github.href },
  { name: "LinkedIn", icon: "linkedin", href: portfolio.linkedin.href },
];
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__identity">
        <div class="site-footer__contact">
          <a class="site-footer__brand" href="/">
            <img src="/img/logo.png" alt="" width="16" height="16" />
            <span>{{ portfolio.displayName }}</span>
          </a>
          <a class="site-footer__email" :href="`mailto:${portfolio.email}`">
            {{ portfolio.email }}
          </a>
        </div>
        <p>{{ messages.footer.role }} · {{ portfolio.location }}</p>
      </div>

      <div class="site-footer__media">
        <h2>{{ messages.footer.networks }}</h2>
        <ul class="site-footer__socials">
          <li v-for="social in socialLinks" :key="social.name">
            <a
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
            >
              <img
                v-if="social.icon === 'github'"
                src="/icons/github.svg"
                alt=""
                width="18"
                height="18"
                loading="lazy"
              />
              <span v-else class="site-footer__linkedin-icon" aria-hidden="true">in</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p class="site-footer__credit">
      {{ messages.footer.copyright.replace("{year}", String(year)).replace("{name}", portfolio.fullName) }}
    </p>
  </footer>
</template>

<style scoped>
.site-footer {
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--color-border);
  padding-block: 1rem 1.5rem;
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  max-width: 500px;
}

.site-footer__identity,
.site-footer__contact {
  display: flex;
  align-items: center;
}

.site-footer__identity {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
}

.site-footer__contact {
  flex-wrap: wrap;
  gap: 0.8rem;
}

.site-footer__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 600;
}

.site-footer__brand img {
  width: var(--icon-size-brand);
  height: var(--icon-size-brand);
  object-fit: contain;
}

.site-footer__email,
.site-footer__identity > p {
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.58rem;
}

.site-footer__email {
  transition: color var(--transition-fast);
}

.site-footer__email:hover {
  color: var(--color-primary);
}

.site-footer__media h2 {
  margin-bottom: 0.45rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
}

.site-footer__socials {
  display: flex;
  gap: 0.45rem;
}

.site-footer__socials a {
  display: inline-flex;
  opacity: 0.72;
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.site-footer__socials a:hover {
  opacity: 1;
  transform: translateY(-3px);
}

.site-footer__socials img,
.site-footer__linkedin-icon {
  width: var(--icon-size-social);
  height: var(--icon-size-social);
}

.site-footer__socials img {
  object-fit: contain;
}

.site-footer__linkedin-icon {
  display: inline-grid;
  place-items: center;
  border-radius: 2px;
  background: var(--color-text-muted);
  color: var(--color-bg);
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 700;
}

.site-footer__credit {
  margin: 2rem auto 0;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.58rem;
  text-align: center;
}

.site-footer::after {
  content: "";
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  width: 1.8rem;
  height: 0.5rem;
  background-image: radial-gradient(var(--color-text-muted) 1px, transparent 1px);
  background-size: 0.6rem 0.6rem;
  opacity: 0.7;
}

@media (min-width: 900px) {
  .site-footer__inner {
    max-width: var(--container);
  }

  .site-footer__brand {
    font-size: 0.9rem;
  }

  .site-footer__email,
  .site-footer__identity > p {
    font-size: 0.75rem;
  }

  .site-footer__media h2 {
    font-size: 0.9rem;
  }

  .site-footer__credit {
    font-size: 0.72rem;
  }
}

@media (max-width: 520px) {
  .site-footer__inner {
    gap: 1rem;
  }

  .site-footer__contact {
    gap: 0.45rem;
  }
}
</style>
