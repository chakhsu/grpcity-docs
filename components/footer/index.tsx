import styles from './style.module.css'
import { LogoTitle } from '@components/logoImage'

type LinkItem = {
  name: string
  url: string
  external?: boolean
}

export default function Footer(locale: string) {
  const isZh = locale === '/zh'

  const tagline = isZh
    ? '一套简洁、易用、面向生产的 Node.js gRPC 微服务框架。'
    : 'A small, opinionated, production-ready gRPC framework for Node.js.'

  const groups: { name: string; list: LinkItem[] }[] = [
    {
      name: isZh ? '用法' : 'Usage',
      list: [
        { name: 'Loader', url: `${locale}/docs/guide/loader` },
        { name: 'Client', url: `${locale}/docs/guide/client` },
        { name: 'Server', url: `${locale}/docs/guide/server` },
        { name: 'Metadata', url: `${locale}/docs/guide/metadata` },
        { name: 'Config', url: `${locale}/docs/guide/config` }
      ]
    },
    {
      name: isZh ? '指南' : 'Guide',
      list: [
        { name: isZh ? '快速上手' : 'Get Started', url: `${locale}/docs/start` },
        { name: isZh ? '用户指南' : 'User Guide', url: `${locale}/docs/guide` },
        { name: 'Async Stream', url: `${locale}/docs/guide/async-stream` },
        { name: 'Credentials', url: `${locale}/docs/guide/credentials` },
        { name: 'Status', url: `${locale}/docs/guide/status` }
      ]
    },
    {
      name: isZh ? '高级' : 'Advanced',
      list: [
        { name: 'Client Middleware', url: `${locale}/docs/advanced/client-middleware` },
        { name: 'Server Middleware', url: `${locale}/docs/advanced/server-middleware` },
        { name: 'gRPC Reflection', url: `${locale}/docs/advanced/grpc-reflection` },
        { name: 'Handle Proto', url: `${locale}/docs/advanced/handle-proto` },
        { name: 'API', url: `${locale}/docs/apis` }
      ]
    },
    {
      name: isZh ? '更多' : 'More',
      list: [
        { name: 'DB Service', url: `${locale}/docs/db-service` },
        {
          name: isZh ? '示例' : 'Examples',
          url: 'https://github.com/chakhsu/grpcity/tree/main/example',
          external: true
        },
        {
          name: isZh ? '更新日志' : 'Changelog',
          url: 'https://github.com/chakhsu/grpcity/releases',
          external: true
        },
        {
          name: 'npm',
          url: 'https://www.npmjs.com/package/grpcity',
          external: true
        }
      ]
    }
  ]

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href={locale} className={styles.brandLink} aria-label="gRPCity">
              <span className={styles.brandLogo} aria-hidden>
                <LogoTitle />
              </span>
              <span className={styles.brandName}>gRPCity</span>
            </a>
            <p className={styles.tagline}>{tagline}</p>
            <div className={styles.socials}>
              <a
                className={styles.socialLink}
                href="https://github.com/chakhsu/grpcity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"
                  />
                </svg>
              </a>
              <a
                className={styles.socialLink}
                href="https://www.npmjs.com/package/grpcity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="npm"
                title="npm"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C23.95.786 23.164 0 22.187 0H1.763zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113L5.13 5.323z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.columns}>
            {groups.map((group) => (
              <section key={group.name} className={styles.column}>
                <h3 className={styles.columnTitle}>{group.name}</h3>
                <ul className={styles.list}>
                  {group.list.map((item) => (
                    <li key={item.name}>
                      <a
                        className={styles.link}
                        href={item.url}
                        target={item.external ? '_blank' : '_self'}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <svg
                            className={styles.linkIcon}
                            viewBox="0 0 24 24"
                            width="12"
                            height="12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            <path d="M7 17 17 7" />
                            <path d="M8 7h9v9" />
                          </svg>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} gRPCity · MIT License
          </span>
        </div>
      </div>
    </div>
  )
}
