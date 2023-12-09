// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    DB: process.env.MONGODB_URI,
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/telemetry"],
  ssr: false,
  builder: "webpack",
});
