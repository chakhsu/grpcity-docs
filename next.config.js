const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: false,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

module.exports = {
  ...withNextra({
    basePath: '/grpcity-docs'
  }),
  images: {
    unoptimized: true,
  }
}
