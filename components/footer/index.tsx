import styles from './style.module.css'

export default function Footer(locale: string) {

  const listMap = [
    {
      name: locale === '/en' ? 'Usage' : '用法',
      list: [
        {
          name: 'Loader',
          url: `${locale}/docs/guide/loader`
        },
        {
          name: 'Client',
          url: `${locale}/docs/guide/client`
        },
        {
          name: 'Server',
          url: `${locale}/docs/guide/server`
        },
        {
          name: 'Metadata',
          url: `${locale}/docs/guide/metadata`
        },
        {
          name: 'Config',
          url: `${locale}/docs/guide/config`
        }
      ]
    },
    {
      name: locale === '/en' ? 'Guide' : '指南',
      list: [
        {
          name: 'Get Started',
          url: `${locale}/docs/start`
        },
        {
          name: 'User Guide',
          url: `${locale}/docs/guide`
        },
        {
          name: 'Async Stream',
          url: `${locale}/docs/guide/async-stream`
        },
        {
          name: 'Credentials',
          url: `${locale}/docs/guide/credentials`
        },
        {
          name: 'Status',
          url: `${locale}/docs/guide/status`
        }
      ]
    },
    {
      name: locale === '/en' ? 'Advanced' : '高级功能',
      list: [
        {
          name: 'Client Middleware',
          url: `${locale}/docs/advanced/client-middleware`
        },
        {
          name: 'Server Middleware',
          url: `${locale}/docs/advanced/server-middleware`
        },
        {
          name: 'gRPC Reflection',
          url: `${locale}/docs/advanced/grpc-reflection`
        },
        {
          name: 'Handle Proto',
          url: `${locale}/docs/advanced/handle-proto`
        },
        {
          name: 'API',
          url: `${locale}/docs/apis`
        }
      ]
    },
    {
      name: locale === '/en' ? 'More' : '更多',
      list: [
        {
          name: 'DB Service',
          url: `${locale}/docs/db-service`
        },
        {
          name: 'Examples ↗',
          url: 'https://github.com/chakhsu/grpcity/tree/main/example',
          newWindow: true
        },
        {
          name: 'Changelog ↗',
          url: 'https://github.com/chakhsu/grpcity/releases',
          newWindow: true
        },
        {
          name: 'Cache Proxy Plus ↗',
          url: 'https://github.com/chakhsu/cache-proxy-plus',
          newWindow: true
        },
        {
          name: 'Sync Defer ↗',
          url: 'https://github.com/chakhsu/sync-defer',
          newWindow: true
        }
      ]
    }
  ]

  return (
    <>
    <div className={`${styles.root} _flex _text-sm`}>
      <div className={`${styles['w-1-4']}`}>
        © {new Date().getFullYear()} gRPCity.
      </div>
      <div className={`${styles.columns} ${styles['w-3-4']}`}>
      {listMap.map(list => {
        return (
          <section>
            <h3 className="_text-sm _font-semibold _text-gray-900 first:_mt-0 dark:_text-gray-100">{list.name}</h3>
            <ul>
              {list.list.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.url} target={item.newWindow ? "_blank" : "_self"} className="_text-gray-500 hover:_text-gray-900 dark:_text-neutral-400 dark:hover:_text-gray-50">{item.name}</a>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
      </div>
    </div>
    </>
  )
}