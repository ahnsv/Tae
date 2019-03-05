export default {
  loading: { color: 'cyan' },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: ['/', '/about', '/ko', '/ko/about']
  },
  css: [
    'aos/dist/aos.css'
  ],
  plugins: [
    '@/plugins/aos.js'
  ]
}
