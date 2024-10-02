// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/scss/style.scss',
    '~/assets/libs/@mdi/font/css/materialdesignicons.min.css',
    '~/assets/libs/@iconscout/unicons/css/line.css',
  ],
  app: {
    head: {
      title: 'Leaping -Nuxt 3 Creative Multipurpose Template',
      titleTemplate: 'Leaping -Nuxt 3 Creative Multipurpose Template',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
        }
      ]
    },
  },
  plugins: [
    '~/plugins/bootstrap-vue.js',
  ]
})
