import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { LocaleSwitch, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span className='logo'>gRPCity Docs</span>,
  project: {
    link: 'https://github.com/chakhsu/grpcity',
  },
  docsRepositoryBase: 'https://github.com/chakhsu/grpcity-docs',
  head: function useHead() {
    const config = useConfig()
    const { route } = useRouter()

    const description =
      config.frontMatter.description ||
      'gPRCity is a simple, easy-to-use, and advanced gRPC microservices library based on Node.js.'
    const title = config.title + (route === '/' || route === '/en' || route === '/zh' ? '' : ' - gRPCity Docs')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </>
    )
  },
  footer: {
    content: (
      <p className="_text-sm">
        © {new Date().getFullYear()} The gRPCity Project.
      </p>
    )
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  navbar: {
    extraContent: LocaleSwitch
  },
  toc: {
    backToTop: true
  },
  i18n: [
    { locale: 'en', name: 'English' },
    { locale: 'zh', name: '简体中文' }
  ]
}

export default config
