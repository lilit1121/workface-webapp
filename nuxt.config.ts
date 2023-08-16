// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    head: {
      title: "Sign Up",
      meta: [
        {
          name: "description",
          content: "some text",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap",
        }
      ],
    },

  },
  css: ["/assets/style/variables.scss"],
});
