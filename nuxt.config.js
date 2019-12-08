
require('dotenv').config()

export default {
  mode: 'universal',
  env: {
    BACKEND_BASE_URL: process.env.BACKEND_BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {src: "~/assets/scss/main.scss", lang: 'sass'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/Vuelidate'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/eslint-module
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt' ,
    '@nuxtjs/auth',   
  ],
  
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: process.env.BACKEND_BASE_URL + 'auth/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: {url: process.env.BACKEND_BASE_URL + 'auth/user', method: 'get', propertyName: false},
        },
        tokenRequired: true,
        tokenType: false
      }
    },
    redirect: {
      login: '/authentication/login',
      logout: '/authentication/login',
      user: '/profile'
    },
  }
}