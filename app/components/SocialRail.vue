<script setup lang="ts">
import { portfolio } from "~/data/portfolio";

const socialLinks = [
  { name: "GitHub", icon: "github", href: portfolio.github.href },
  { name: "LinkedIn", icon: "linkedin", href: portfolio.linkedin.href },
];
const { messages } = useLanguage();
</script>

<template>
  <aside class="social-rail" :aria-label="messages.contact.networks">
    <span class="social-rail__line" aria-hidden="true" />
    <ul>
      <li v-for="social in socialLinks" :key="social.name">
        <a
          :href="social.href"
          :aria-label="social.name"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img v-if="social.icon === 'github'" src="/icons/github.svg" alt="" width="18" height="18" />
          <span v-else class="social-rail__linkedin" aria-hidden="true">in</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.social-rail {
  position: fixed;
  z-index: 40;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  pointer-events: none;
}

.social-rail__line {
  width: 1px;
  height: 4.5rem;
  background: var(--color-border);
}

.social-rail ul {
  display: grid;
  gap: 0.4rem;
}

.social-rail a {
  display: block;
  opacity: 0.68;
  transition: opacity var(--transition-fast), transform var(--transition-fast);
  pointer-events: auto;
}

.social-rail a:hover {
  opacity: 1;
  transform: translateX(2px);
}

.social-rail img {
  width: var(--icon-size-social);
  height: var(--icon-size-social);
}

.social-rail__linkedin {
  display: grid;
  width: var(--icon-size-social);
  height: var(--icon-size-social);
  place-items: center;
  border-radius: 2px;
  background: var(--color-text-muted);
  color: var(--color-bg);
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 700;
}

@media (max-width: 420px) {
  .social-rail {
    display: none;
  }
}
</style>