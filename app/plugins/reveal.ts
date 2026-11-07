import type { DirectiveBinding } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null;
  let checkScheduled = false;
  const pendingElements = new Set<HTMLElement>();
  const visibleElements = new WeakSet<HTMLElement>();

  const markVisible = (el: HTMLElement) => {
    visibleElements.add(el);
    pendingElements.delete(el);
    el.classList.add("is-visible");
    observer?.unobserve(el);
  };

  const checkVisibility = () => {
    checkScheduled = false;
    for (const el of pendingElements) {
      const bounds = el.getBoundingClientRect();
      if (
        bounds.bottom > 0 &&
        bounds.top < window.innerHeight &&
        bounds.right > 0 &&
        bounds.left < window.innerWidth
      ) {
        markVisible(el);
      }
    }
  };

  const scheduleVisibilityCheck = () => {
    if (!checkScheduled) {
      checkScheduled = true;
      window.setTimeout(checkVisibility, 50);
    }
  };

  const getObserver = () => {
    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              markVisible(entry.target as HTMLElement);
            }
          }
        },
        { threshold: 0.01 }
      );
    }
    return observer;
  };

  nuxtApp.vueApp.directive("reveal", {
    mounted(el: HTMLElement, binding: DirectiveBinding<number | undefined>) {
      el.classList.add("reveal");
      if (typeof binding.value === "number") {
        el.style.setProperty("--reveal-index", String(binding.value));
        el.style.transitionDelay = `calc(${binding.value} * 90ms)`;
      }
      pendingElements.add(el);
      getObserver().observe(el);
      window.addEventListener("scroll", scheduleVisibilityCheck, { passive: true });
      window.addEventListener("resize", scheduleVisibilityCheck);
      scheduleVisibilityCheck();
    },
    updated(el: HTMLElement) {
      if (visibleElements.has(el)) {
        el.classList.add("is-visible");
      }
    },
    unmounted(el: HTMLElement) {
      pendingElements.delete(el);
      visibleElements.delete(el);
      observer?.unobserve(el);
    },
  });
});
