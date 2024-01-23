import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { LocaleSwitch, useConfig, ThemeSwitch } from 'nextra-theme-docs'
import Footer from '@components/footer'
import { LogoTitle } from '@components/logoImage'

const config: DocsThemeConfig = {
  logo: () => {
    const { route } = useRouter()
    const locate = route.includes('/en') ? '/en' : '/zh'
    return (
      <a className='_flex _items-center hover:_opacity-75 ltr:_mr-auto rtl:_ml-auto' href={locate}>
        <span className='logo'><LogoTitle /> gRPCity</span>
      </a>
    )
  },
  logoLink: false,
  project: {
    link: 'https://github.com/chakhsu/grpcity',
  },
  docsRepositoryBase: 'https://github.com/chakhsu/grpcity-docs/tree/main',
  head: () => {
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
        <link rel="icon" href="/img/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/img/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="apple-mobile-web-app-title" content="gRPCity" />
      </>
    )
  },
  footer: {
    content: () => {
      const { route } = useRouter()
      const locate = route.includes('/en') ? '/en' : '/zh'
      return (
        <>
          {Footer(locate)}
        </>
      )
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  navbar: {
    extraContent: () => {
      return (
        <>
          {ThemeSwitch({ lite: true, className: 'button-switch theme-switch' })}
          {LocaleSwitch({ lite: true, className: 'button-switch' })}
        </>
      )
    }
  },
  toc: {
    backToTop: true
  },
  i18n: [
    { locale: 'en', name: 'English' },
    { locale: 'zh', name: '简体中文' }
  ],
  banner: {
    key: '2.0-release',
    content: (
      <a href="https://github.com/chakhsu/grpcity/releases" target="_blank">
        🎉 gRPCity 2.0 is released. Read more →
      </a>
    )
  }
}

export default config
