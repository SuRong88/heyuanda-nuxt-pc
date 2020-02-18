export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // title: '和元达信息科技有限公司',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ],
    // link: [{
    //   rel: 'icon',
    //   type: 'image/x-icon',
    //   href: '/favicon.ico'
    // }],
    script: [{
      src: 'https://api.map.baidu.com/api?v=2.0&ak=6wY7GTtcCHAfZpM7zA9wiFwBrpTVpxcW&s=1'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/swiper.css',
    'animate.css',
    '@/assets/css/layout.less', // 使用less，注意下载less-loader和less
    '@/assets/css/common.less', // 使用less，注意下载less-loader和less
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    {
      src: "~/plugins/vue-awesome-swiper.js",
      ssr: false
    },
    '@/plugins/layout.js',
    '@/plugins/request.js',
    '@/plugins/route.js',
    '@/plugins/format.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    prefix: '/api/',
  },
  // 代理的配置项
  proxy: {
    '/api': {
      target: 'http://www.techviewinfo.com/api/',
      // target: 'https://www.本则设计.com/api/',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
