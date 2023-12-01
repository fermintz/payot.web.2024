// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@vueuse/nuxt', '@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-swiper','nuxt-icon'],
  css: ['@/assets/styles/global.scss','@/assets/styles/fonts.scss'],
  postcss:{
    plugins:{
      tailwindcss:{}
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "ko",
      },
      title: "페이오티",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [],
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },
});
