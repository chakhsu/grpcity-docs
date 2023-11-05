import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>gRPCity Doc</span>,
  project: {
    link: 'https://github.com/chakhsu/grpcity',
  },
  docsRepositoryBase: 'https://github.com/chakhsu/grpcity-doc',
  footer: {
    content: (
      <p className="nx-text-sm">
        © {new Date().getFullYear()} The gRPCity Project.
      </p>
    )
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath === '/') {
      return {
        titleTemplate: 'gRPCity Doc'
      }
    } else {
      return {
        titleTemplate: '%s – gRPCity'
      }
    }
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  },
  i18n: [
    { locale: 'en-US', name: 'English' },
    { locale: 'zh-CN', name: '简体中文' }
  ]
}

export default config
