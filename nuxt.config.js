const isDev = process.env.NODE_ENV !== 'production'

export default {
  ...(!isDev && {
    modern: 'universal'
  }),
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Заказать дорожные ограждения, экраны, трубы СГМТ от производителя. Доставка по РФ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Купить дорожные ограждения от производителя по лучшим ценам с доставкой на Ваш объект. Широкий ассортимент. Соответствие ГОСТам. Монтаж под ключ, доставка по Краснодару и России' },
      { 'http-equiv': 'Content-Type' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  rootDir: __dirname,
  router: {
    prefetchLinks: false,
    trailingSlash: false
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
    '@nuxtjs/google-analytics',
    ['nuxt-canonical', { baseUrl: 'https://msk23.ru' }]
  ],
  sitemap: {
    hostname: 'https://msk23.ru',
    gzip: true,
    routes: [
      '/fence',
      '/pipe',
      '/screen',
      '/',
      '/fence/barrier-road-fence',
      '/fence/barrier-fence-11DO',
      '/fence/barrier-fence-21DO',
      '/fence/barrier-fence-wave',
      '/fence/barrier-fence-with-separating-beam',
      '/fence/barrier-fence-U2',
      '/fence/barrier-fence-U3',
      '/fence/barrier-fence-U4',
      '/fence/barrier-fence-SB-1',
      '/fence/barrier-fence-EC-1',
      '/fence/barrier-fence-for-painting',
      '/fence/barrier-fence-with-no-console',
      '/fence/galvanized-road-barriers',
      '/fence/road-barriers-guiding-devices',
      '/fence/metal-barrier-fence',
      '/fence/bridge-barrier',
      '/fence/bridge-barrier-fence-11MO',
      '/fence/one-sided-barrier-fence',
      '/fence/barrier-fence-calculation',
      '/fence/barrier-fence-installation',
      '/fence/front-barrier-fence',
      '/fence/barrier-fence-end-piece',
      '/fence/pedestrian-fences',
      '/fence/pedestrian-fences/metal-pedestrian-fence',
      '/fence/pedestrian-fences/guide-pedestrian-barriers',
      '/fence/pedestrian-fences/restricting-pedestrian-fence',
      '/fence/pedestrian-fences/pedestrian-barrier-cross',
      '/fence/pedestrian-fences/pedestrian-barrier-ORUD',
      '/fence/pedestrian-fences/pedestrian-barrier-PO-1-cross',
      '/fence/pedestrian-fences/pedestrian-barrier-PO-2',
      '/fence/pedestrian-fences/pedestrian-barrier-PO-6',
      '/fence/pedestrian-fences/pedestrian-railings',
      '/fence/pedestrian-fences/retaining-pedestrian-fence',
      '/fence/pedestrian-fences/installing-pedestrian-barriers',
      '/screen/noise-screen',
      '/screen/noise-screen/production-of-noise-screens',
      '/screen/noise-screen/noise-screens-at-russian-railways',
      '/screen/noise-screen/installation-of-noise-screens',
      '/screen/noise-screen/transparent-noise-screens',
      '/screen/noise-screen/calculation-noise-shield',
      '/screen/noise-screen/noise-screens-top10',
      '/screen/noise-screen/noise-screen-made-of-polycarbonate',
      '/screen/noise-screen/noise-screen-made-of-sandwich-panels',
      '/screen/acoustic-screen',
      '/screen/noise-barriers',
      '/pipe/pipe-underneath-sidewalk',
      '/pipe/culvert-under-the-road',
      '/pipe/culvert-on-the-railway',
      '/pipe/culvert-under-embankments',
      '/pipe/corrugated-culverts/metal-corrugated-all-metal-culverts',
      '/pipe/round-culverts',
      '/pipe/culvert-installation',
      '/pipe/calculation-of-culverts',
      '/pipe/spiral-pipe',
      '/pipe/spiral-pipe/spiral-corrugated-metal-pipes',
      '/pipe/corrugated-culverts',
      '/pipe/metal-culverts',
      '/pipe/corrugated-culverts/metal-corrugated-culverts',
      '/informative-articles/guardrail-weight',
      '/informative-articles/weight-pedestrian-fence-per-1m',
      '/informative-articles/types-of-culverts',
      '/informative-articles/types-of-road-barriers',
      '/informative-articles/barrier-fence-installation-tolerances',
      '/informative-articles/design-culvert',
      '/informative-articles/applications-for-culverts',
      '/informative-articles/rules-for-use-pedestrian-barriers',
      '/informative-articles/designing-culverts',
      '/informative-articles/dimensions-road-barriers',
      '/informative-articles/culvert-operation-mode',
      '/informative-articles/recommended-ratio-culvert-diameter-length',
      '/informative-articles/installation-barrier-fence-on-highways',
      '/informative-articles/culvert-installation',
      '/informative-articles/installation-metal-pedestrian-barriers',
      '/informative-articles/characteristics-road-culverts',
      '/informative-articles/barrier-fence-elements',
      '/informative-articles/culvert-elements',
      '/news',
      '/pipe/culvert',
      '/screen/noise-screens-and-acoustic-barriers',
      '/article/article1',
      '/article/article2',
      '/article/article3',
      '/article/article4'
    ]
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
    resourceHints: false
  },
  target: 'server',
  generate: {
    fallback: true
  },
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
    mode: {
      ssr: true
    },
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
