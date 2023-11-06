const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  latex: false,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US'
  },
  reactStrictMode: true
})
