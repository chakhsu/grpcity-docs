import { useEffect, useState } from 'react'
import styles from './codePreview.module.css'

const COPY = {
  '/en': { eyebrow: 'Quick start', tabs: { loader: 'loader.js', server: 'server.js', client: 'client.js' } },
  '/zh': { eyebrow: '快速上手', tabs: { loader: 'loader.js', server: 'server.js', client: 'client.js' } }
} as const

type Locale = keyof typeof COPY
type SnippetKey = 'loader' | 'server' | 'client'

const SNIPPETS: Record<SnippetKey, string> = {
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

// Cache highlighted HTML across mounts so tab-switching is instant after the
// first paint of each snippet/theme combination.
const HTML_CACHE: Partial<Record<`${SnippetKey}:${'light' | 'dark'}`, string>> = {}

const useHighlighted = (key: SnippetKey, theme: 'light' | 'dark') => {
  const cacheKey = `${key}:${theme}` as const
  const [html, setHtml] = useState<string | null>(HTML_CACHE[cacheKey] ?? null)

  useEffect(() => {
    if (HTML_CACHE[cacheKey]) {
      setHtml(HTML_CACHE[cacheKey]!)
      return
    }
    let cancelled = false
    ;(async () => {
      try {
        const { codeToHtml } = await import('shiki')
        const out = await codeToHtml(SNIPPETS[key], {
          lang: 'javascript',
          theme: theme === 'dark' ? 'github-dark-default' : 'github-light-default'
        })
        if (!cancelled) {
          HTML_CACHE[cacheKey] = out
          setHtml(out)
        }
      } catch {
        // Stay on the plain fallback if shiki fails to load.
      }
    })()
    return () => {
      cancelled = true
    }
  }, [cacheKey, key, theme])

  return html
}

const useColorScheme = (): 'light' | 'dark' => {
  const [scheme, setScheme] = useState<'light' | 'dark'>('light')
  useEffect(() => {
    const read = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    setScheme(read())
    const obs = new MutationObserver(() => setScheme(read()))
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])
  return scheme
}

export default function CodePreview(locale: Locale) {
  const copy = COPY[locale] || COPY['/en']
  const [active, setActive] = useState<SnippetKey>('server')
  const scheme = useColorScheme()
  const html = useHighlighted(active, scheme)

  return (
    <div className={styles.frame}>
      <div className={styles.tabs} role="tablist" aria-label={copy.eyebrow}>
        {(Object.keys(copy.tabs) as SnippetKey[]).map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            type="button"
            className={`${styles.tab} ${active === key ? styles.tabActive : ''}`}
            onClick={() => setActive(key)}
          >
            {copy.tabs[key]}
          </button>
        ))}
      </div>
      <div className={styles.codeBox} aria-live="polite">
        {html ? (
          <div className={styles.shiki} dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <pre className={styles.fallback}>
            <code>{SNIPPETS[active]}</code>
          </pre>
        )}
      </div>
    </div>
  )
}
