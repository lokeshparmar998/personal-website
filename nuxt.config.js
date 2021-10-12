export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Lokesh's Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ]
  },
  /* custom port */
  server:{
    port: 3000,
  },
  /* Google analytics */
  googleAnalytics: {
    id: 'UA-207883981-1',
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'UA-207883981-1'
    },
    hashnodeApiKey: process.env.HASHNODE_API_KEY,
    formspeerUrl: process.env.FORM_URL
  },
  /*  */
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css",
    "~/assets/fonts/lato/lato.css",
    "~/assets/fonts/nunito/nunito.css",
    "~/assets/fonts/raleway/raleway.css",
    "~/assets/fonts/inter/inter.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-analytics'
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      /* brands: true */
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/toast",
  ],
  toast: {
      position: 'top-right',
      register: [ // Register custom toasts
        {
          name: 'my-error',
          message: 'Oops...Something went wrong',
          options: {
            type: 'error'
          }
        }
      ]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
};
