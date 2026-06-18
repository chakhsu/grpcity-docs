import { Footer, Layout, LocaleSwitch, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { Metadata } from 'next'
import type { FC, ReactNode } from 'react'
import FooterContent from '@components/footer'
import { LogoTitle } from '@components/logoImage'
import '../../style.css'

export const metadata: Metadata = {
  description:
    'gPRCity is a simple, easy-to-use, and advanced gRPC microservices library based on Node.js.',
  title: {
    absolute: '',
    template: '%s - gRPCity Docs'
  },
  icons: {
    icon: [
      { url: '/img/favicon.png', type: 'image/png' },
      {
        url: '/img/favicon-dark.png',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)'
      }
    ]
  },
  appleWebApp: {
    title: 'gRPCity'
  }
}

type LayoutProps = Readonly<{
  children: ReactNode
  params: Promise<{ lang: string }>
}>

const RootLayout: FC<LayoutProps> = async ({ children, params }) => {
  const { lang } = await params
  const pageMap = await getPageMap(`/${lang}`)
  const localePath = `/${lang}`

  const banner = (
    <Banner storageKey="3.0-release">
      <a href="https://github.com/chakhsu/grpcity/releases" target="_blank" rel="noreferrer">
        🎉 gRPCity 3.0 is released. Read more →
      </a>
    </Banner>
  )

  const navbar = (
    <Navbar
      logo={
        <span className="logo flex items-center">
          <LogoTitle /> gRPCity
        </span>
      }
      logoLink={localePath}
      projectLink="https://github.com/chakhsu/grpcity"
    >
      <ThemeSwitch lite className="button-switch theme-switch" />
      <LocaleSwitch lite className="button-switch" />
    </Navbar>
  )

  const footer = (
    <Footer>
      <FooterContent locale={localePath} />
    </Footer>
  )

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: { light: 220, dark: 220 },
          saturation: { light: 15, dark: 20 },
          lightness: { light: 25, dark: 75 }
        }}
      />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          docsRepositoryBase="https://github.com/chakhsu/grpcity-docs/tree/main"
          i18n={[
            { locale: 'en', name: 'English' },
            { locale: 'zh', name: '简体中文' }
          ]}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true
          }}
          toc={{
            backToTop: true
          }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
