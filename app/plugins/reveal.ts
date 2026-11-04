import type { DirectiveBinding } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null;

  const getObserver = () => {
    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
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
      getObserver().observe(el);
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el);
    },
  });
});
