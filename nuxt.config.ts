// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxt/icon/module",
    "@nuxt/fonts",
    "@nuxtjs/google-fonts",
  ],
  css: [
    '~/assets/css/tokens.css',
    '~/assets/css/reset.css',
    '~/assets/css/base.css'
  ],
  googleFonts: {
    display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true, // Downloads fonts locally instead of fetching from Google CDN on runtime

    families: {
      Inter: [400, 500, 600, 700, 800],
      "Fira Code": [400, 500],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
});
