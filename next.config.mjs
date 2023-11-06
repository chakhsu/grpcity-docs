import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: false,
  search: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

export default withNextra({
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx'],
  reactStrictMode: true,
  basePath: '/grpcity-docs',
  images: {
    unoptimized: true,
  },
  distDir: './.next',
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US'
  },
  redirects: () => [
    {
      source: '/',
      destination: '/en-US',
      permanent: true
    }
  ]
})
