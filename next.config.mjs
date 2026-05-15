import nextra from 'nextra'

const withNextra = nextra({
  latex: false,
  search: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

export default withNextra({
  eslint: {
    ignoreDuringBuilds: true
  },
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  distDir: './.next',
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en'
  }
})
