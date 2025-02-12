// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-10-29",

  app: {
    head: {
      title: "Zana Mira",
      meta: [
        { name: "description", content: "Zana Mira Portfolio website" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],    
    },
  },  
})