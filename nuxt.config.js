export default {
  loading: { color: 'cyan' },
  router: {
    middleware: 'i18n'
  },
  generate: {
    routes: ['/', '/about', '/ko', '/ko/about']
  },
  css: [
    'aos/dist/aos.css'
  ],
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: '~/plugins/i18n.js'}
  ]
}
