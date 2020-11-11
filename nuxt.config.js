module.exports = {
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken:
          process.env.NODE_ENV == "production"
            ? "HGemaVvgLEceClZxmcplmQtt"
            : "QbPPtDbm6umYsWkrs7wVDAtt",
        cacheProvider: "memory"
      }
    ]
  ],
  plugins: ["~/plugins/components", "~/plugins/vue-plyr"],

  router: {
    middleware: ["loadNavTakeover"]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "Mike Darnay Photography",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Photojournalism based out of Pittsburgh and Southwestern PA." },
      { property: "og:title", content: 'Mike Darnay Photography' },
      { property: "og:url", content: "http://mikedarnay.com/"},
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mike Darnay Photography"},
      { property: "og:description", content: "Mike Darnay is a photojournalist based out of the Pittsburgh and Southwestern PA region, specializing in sports, feature stories, news, and other projects."},
      { property: "og:image", content:"http://mikedarnay.com/socialshare.jpg"},
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "twitter:title", content: "Mike Darnay Photography" },
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:description", content: "Mike Darnay is a photojournalist based out of the Pittsburgh and Southwestern PA region, specializing in sports, feature stories, news, and other projects." },
      { property: "twitter:image", content: "http://mikedarnay.com/socialshare.jpg" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    script: [
      {
        defer: true,
        src: "https://use.fontawesome.com/releases/v5.0.6/js/all.js"
      }
    ]
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
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
