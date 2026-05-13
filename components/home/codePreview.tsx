import { useState } from 'react'
import styles from './codePreview.module.css'

const COPY = {
  '/en': {
    title: 'Three files, end to end.',
    subtitle: 'A loader, a server, and a client — using promises and async iterators throughout.',
    tabs: { loader: 'loader.js', server: 'server.js', client: 'client.js' }
  },
  '/zh': {
    title: '三个文件，跑通整个链路。',
    subtitle: '一个 loader、一个 server、一个 client —— 全程 promise 与 async iterator。',
    tabs: { loader: 'loader.js', server: 'server.js', client: 'client.js' }
  }
} as const

type Locale = keyof typeof COPY

const SNIPPETS: Record<'loader' | 'server' | 'client', string> = {
  loader: `import { ProtoLoader } from 'grpcity'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const loader = new ProtoLoader({
  location: path.join(__dirname, './proto'),
  files: ['helloworld/service.proto']
})`,
  server: `import { loader } from './loader.js'

class Greeter {
  async sayGreet(call) {
    return { message: \`hello, \${call.request.name}\` }
  }
}

await loader.init()
const server = await loader.initServer()
server.add('helloworld.Greeter', new Greeter())
await server.listen('127.0.0.1:9099')`,
  client: `import { loader } from './loader.js'

await loader.init()
const clients = await loader.initClients({
  services: { 'helloworld.Greeter': '127.0.0.1:9099' }
})

const greeter = clients.get('helloworld.Greeter')
const { response } = await greeter.sayGreet({ name: 'gRPCity' })
console.log(response) // { message: 'hello, gRPCity' }`
}

export default function CodePreview(locale: Locale) {
  const copy = COPY[locale] || COPY['/en']
  const [active, setActive] = useState<'loader' | 'server' | 'client'>('server')

  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.subtitle}>{copy.subtitle}</p>
        </div>

        <div className={styles.frame}>
          <div className={styles.tabs} role="tablist">
            {(Object.keys(copy.tabs) as Array<keyof typeof copy.tabs>).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={active === key}
                className={`${styles.tab} ${active === key ? styles.tabActive : ''}`}
                onClick={() => setActive(key)}
                type="button"
              >
                {copy.tabs[key]}
              </button>
            ))}
          </div>
          <pre className={styles.code} aria-live="polite">
            <code>{SNIPPETS[active]}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
