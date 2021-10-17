const isDev = process.env.NODE_ENV !== 'production'

export default {
  ...(!isDev && {
    modern: 'client'
  }),
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Заказать дорожные ограждения, экраны, трубы СГМТ от производителя. Доставка по РФ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Купить дорожные ограждения от производителя по лучшим ценам с доставкой на Ваш объект. Широкий ассортимент. Соответствие ГОСТам. Монтаж под ключ, доставка по Краснодару и России' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  rootDir: __dirname,
  router: {
    prefetchLinks: false,
    trailingSlash: false,
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  loading: { color: '#ddd' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'normalize.css',
    './assets/scss/global-styles.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    './plugins/focus-within.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-trailingslash-module',
    'nuxt-webfontloader',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '84973597',
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ],
    '@nuxtjs/google-analytics'
  ],
  sitemap: {
    hostname: 'https://msk23.ru',
    gzip: true,
    filter ({ routes }) {
      return routes.map((route) => {
        route.url = `${route.url}`
        return route
      })
    }
  },
  robots: [
    {
      UserAgent: 'Googlebot'
    },
    {
      UserAgent: 'Yandex'
    },
    {
      UserAgent: '*',
      Host: 'https://msk23.ru',
      Sitemap: 'https://msk23.ru/sitemap.xml'
    }
  ],
  googleAnalytics: {
    id: 'G-9KFZ3YQMNK'
  },
  webfontloader: {
    events: false,
    google: {
      families: ['Montserrat:wght@400;500;600;700&display=swap']
    },
    timeout: 5000
  },
  styleResources: {
    scss: [
      './assets/scss/reset.scss',
      './assets/scss/global-variables.scss',
      './assets/scss/global-mixins.scss',
      './assets/scss/btn.scss'
    ],
    less: [],
    stylus: []
  },
  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    // compressor: false,
    resourceHints: false
    // etag: false,
    // static: {
    //  etag: false
    // }
  },
  target: 'static',

  axios: {},

  buildModules: [
    '@/modules/sitemapRouteGenerator'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    optimizeCss: false,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimization: {
      minimize: !isDev
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true
      }
    }),
    transpile: ['vue-lazy-hydration', 'intersection-observer'],
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: ['advanced', {
              autoprefixer: false,
              cssDeclarationSorter: false,
              zindex: false,
              discardComments: {
                removeAll: true
              }
            }]
          }
        })
      },
      ...(!isDev && {
        preset: {
          browsers: 'cover 99.5%',
          autoprefixer: true
        }
      }),

      order: 'cssnanoLast'
    }
  }
}
