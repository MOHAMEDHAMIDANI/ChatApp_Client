// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vueuse/motion/nuxt',
    '@formkit/auto-animate/nuxt',
    "@formkit/auto-animate",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "nuxt-seo-experiments",
    "@nuxtjs/seo",
    '@nuxtjs/apollo'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:3000/graphql'
      }
    },
  },
})
