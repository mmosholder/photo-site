const axios = require("axios");

module.exports = {
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV == "production"
            ? " 5Mupd6qDLh3HQXratr8tqgtt "
            : "zoztQUQSuAA3fsydONDCQAtt",
        cacheProvider: "memory"
      }
    ]
  ],

  plugins: ["~/plugins/components"],
  /*
  ** Headers of the page
  */
  head: {
    title: "darnay-prod",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar to custom component
  */
  // loading: "~/components/loading.vue",
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        // config.module.rules.push({
        //   enforce: "pre",
        //   test: /\.(js|vue)$/,
        //   loader: "eslint-loader",
        //   exclude: /(node_modules)/
        // });
      }
    }
  }
};
