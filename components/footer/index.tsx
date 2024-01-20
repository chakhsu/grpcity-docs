import styles from './style.module.css'

export default function Footer(locale: string) {
  const listMap = [
    {
      name: 'Usage',
      list: [
        {
          name: 'Loader',
          url: `${locale}/guide/loader`
        },
        {
          name: 'Client',
          url: `${locale}/guide/client`
        },
        {
          name: 'Server',
          url: `${locale}/guide/server`
        }
      ]
    },
    {
      name: 'Guides',
      list: [
        {
          name: 'Get Started',
          url: `${locale}/start`
        },
        {
          name: 'User Guide',
          url: `${locale}/guide`
        },
        {
          name: 'Advanced',
          url: `${locale}/advanced`
        },
        {
          name: 'API',
          url: `${locale}/apis`
        }
      ]
    },
    {
      name: 'Others',
      list: [
        {
          name: 'DB Service',
          url: `${locale}/db-service`
        },
        {
          name: 'More Examples ↗',
          url: 'https://github.com/chakhsu/grpcity/tree/main/example',
          newWindow: true
        },
        {
          name: 'Changelog ↗',
          url: 'https://github.com/chakhsu/grpcity/releases',
          newWindow: true
        }
      ]
    },
    {
      name: 'Recommend',
      list: [
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
              {list.list.map(item => {
                return (
                  <li>
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
  )
}