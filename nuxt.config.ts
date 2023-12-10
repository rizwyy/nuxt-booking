// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    DB: process.env.MONGODB_URI,
  },
  modules: [
    "nuxt-helm",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/telemetry",
  ],
  ssr: true,
  // routeRules: {
  //   "/api/**": { proxy: { to: "https://nuxtbooking.vercel.app/**" } },
  // },
  vite: {
    server: {
      cors: false,
    },
  },
});
