const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt-resume/'
  }
} : {}
export default {
  ...routerBase,
  loading: { color: 'cyan' },
  router: {
    base: '/nuxt-resume/',
    middleware: 'i18n'
  },
  generate: {
    routes: ['/', '/about', '/ko', '/ko/about']
  },
  css: [
    'aos/dist/aos.css'
  ],
  head: {
    link: [
      {rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Noto+Sans+KR"}
    ]
  },
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: '~/plugins/i18n.js'}
  ]
}
