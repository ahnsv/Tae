const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/Tae/'
  }
} : {}
export default {
  ...routerBase,
  loading: { color: 'cyan' },
  router: {
    base: '/Tae/',
    middleware: 'i18n'
  },
  generate: {
    routes: ['/', '/about', '/ko', '/ko/about']
  },
  css: [
    'aos/dist/aos.css',
    '@/assets/css/_fonts.scss'
  ],
  head: {
    link: [
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR:500,700,900&amp;subset=korean" },
      { rel:'preload', as:'font', href: '/fonts/blank_Sans/Web/blank_Sans_Bold.woff', type:'font/woff', crossorigin:'anonymous'},
      { rel:'preload', as:'font', href: '/fonts/blank_Sans/Web/blank_Sans_Book.woff', type:'font/woff', crossorigin:'anonymous'},
      { rel:'preload', as:'font', href: '/fonts/nanum/nanum_square_round_b.ttf', type:'font/ttf', crossorigin:'anonymous'},
      { rel:'preload', as:'font', href: '/fonts/nanum/nanum_square_round_eb.ttf', type:'font/ttf', crossorigin:'anonymous'},
      { rel:'preload', as:'font', href: '/fonts/nanum/nanum_square_round_l.ttf', type:'font/ttf', crossorigin:'anonymous'},
      { rel:'preload', as:'font', href: '/fonts/nanum/nanum_square_round_r.ttf', type:'font/ttf', crossorigin:'anonymous'},
    ]
  },
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/i18n.js' }
  ]
}
