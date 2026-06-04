// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Ngoun Hengkimlay | Web Developer",
      meta: [
        {
          name: "google-site-verification",
          content: "Gl0E-w6HCU6FlrELXbVlv8jNA1DIUkfMg4AshTvPXQg",
        },
        {
          name: "description",
          content: "Ngoun Hengkimlay | Web Developer Portfolio",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "nuxt-telegram-auth",
  ],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
    display: "swap",
  },
});