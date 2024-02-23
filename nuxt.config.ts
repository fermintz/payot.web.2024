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
      script: [
        // 카카오 맵
        { src: '//dapi.kakao.com/v2/maps/sdk.js?appkey=9f075e09970484df2eb6a5429f510f6a&autoload=false', async: true },
        // 다음 우편번호 API
        { src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js', async: true, defer: true },
        // 카카오 맵 API
        { src: '//dapi.kakao.com/v2/maps/sdk.js?appkey=98e4f5c453d5dce38863c0d2ac00bf75&autoload=false&libraries=services,clusterer,drawing', async: true, defer: true },
      ],
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
