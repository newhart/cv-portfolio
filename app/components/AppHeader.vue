<script setup lang="ts">
const isMenuOpen = ref(false);
const route = useRoute();
const { language, messages } = useLanguage();

const navLinks = computed(() => [
  { href: "/", label: messages.value.navigation.home, current: route.path === "/" && !route.hash },
  { href: "/projects", label: messages.value.navigation.projects, current: route.path === "/projects" },
  { href: "/about", label: messages.value.navigation.about, current: route.path === "/about" },
  { href: "/contacts", label: messages.value.navigation.contact, current: route.path === "/contacts" },
]);

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="logo" href="/" :aria-label="messages.brandHome">
        <img class="logo__mark" src="/img/logo.png" alt="" width="16" height="16" />
        <span>Haritiana</span>
      </a>

      <button
        type="button"
        class="nav-toggle"
        :aria-expanded="isMenuOpen"
        aria-controls="primary-navigation"
        :aria-label="isMenuOpen ? messages.navigation.closeMenu : messages.navigation.openMenu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="nav-toggle__bar" />
        <span class="nav-toggle__bar" />
        <span class="nav-toggle__bar" />
      </button>

      <nav
        id="primary-navigation"
        class="nav-wrapper"
        :class="{ 'nav-wrapper--open': isMenuOpen }"
        :aria-label="messages.navigation.primary"
      >
        <ul class="nav">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              :aria-current="link.current ? 'page' : undefined"
              @click="closeMenu"
            >
              <span>#</span>{{ link.label }}
            </a>
          </li>
        </ul>
        <label class="sr-only" for="language-select">{{ messages.language }}</label>
        <select id="language-select" v-model="language" class="language-select">
          <option value="EN">EN</option>
          <option value="FR">FR</option>
        </select>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: color-mix(in srgb, var(--color-bg) 85%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  width: 80%;
  max-width: 500px;
  padding-inline: 1rem;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 0.55rem;
  color: var(--color-text);
  transition: color var(--transition-fast);
}

.logo:hover {
  color: var(--color-primary);
}

.logo__mark {
  width: var(--icon-size-brand);
  height: var(--icon-size-brand);
  object-fit: contain;
}

.language-select {
  border: 0;
  border-radius: 0;
  padding: 0.25rem 1rem 0.25rem 0;
  color: var(--color-text-muted);
  background: transparent;
  font-family: var(--font-mono);
  font-size: 0.4rem;
  cursor: pointer;
}

.language-select option {
  color: var(--color-text);
  background: var(--color-bg);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.nav {
  display: flex;
  flex-direction: row;
  gap: 0.45rem;
}

.nav a {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  gap: 0.2em;
  font-family: var(--font-mono);
  font-size: 0.4rem;
  color: var(--color-text-muted);
  padding-block: var(--space-2);
  white-space: nowrap;
  transition: color var(--transition-fast);
}

.nav a span {
  color: var(--color-primary);
}

.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.nav a:hover,
.nav a[aria-current="page"] {
  color: var(--color-text);
}

.nav a:hover::after,
.nav a[aria-current="page"]::after {
  width: 100%;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 0;
}

.nav-toggle__bar {
  width: 100%;
  height: 2px;
  background: var(--color-text);
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.nav-toggle[aria-expanded="true"] .nav-toggle__bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav-toggle[aria-expanded="true"] .nav-toggle__bar:nth-child(2) {
  opacity: 0;
}

.nav-toggle[aria-expanded="true"] .nav-toggle__bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (min-width: 900px) {
  .site-header__inner {
    height: 56px;
    width: 100%;
    max-width: var(--container);
  }

  .nav-wrapper {
    gap: 1rem;
  }

  .logo {
    font-size: 0.8rem;
  }

  .nav {
    gap: 0.9rem;
  }

  .nav a {
    font-size: 0.62rem;
  }

  .language-select {
    font-size: 0.58rem;
  }
}

@media (max-width: 380px) {
  .nav-toggle {
    display: flex;
  }

  .nav-wrapper {
    position: fixed;
    inset: var(--header-height) 0 0 0;
    background: var(--color-bg);
    display: grid;
    place-items: center;
    align-content: center;
    gap: var(--space-8);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-base), transform var(--transition-base);
  }

  .nav-wrapper--open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .nav {
    flex-direction: column;
    align-items: center;
    gap: var(--space-8);
  }

  .language-select {
    font-size: 1rem;
  }

  .nav a {
    font-size: 1.1rem;
  }
}
</style>
