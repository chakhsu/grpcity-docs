import { useEffect, useState } from 'react'
import styles from './codePreview.module.css'

const COPY = {
  '/en': {
    eyebrow: 'Quick start',
    tabs: { loader: 'loader.js', server: 'server.js', client: 'client.js' },
    copy: 'Copy',
    copied: 'Copied'
  },
  '/zh': {
    eyebrow: '快速上手',
    tabs: { loader: 'loader.js', server: 'server.js', client: 'client.js' },
    copy: '复制',
    copied: '已复制'
  }
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
  const [copied, setCopied] = useState(false)
  const scheme = useColorScheme()
  const html = useHighlighted(active, scheme)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPETS[active])
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className={styles.frame}>
      <div className={styles.titleBar}>
        <div className={styles.dots} aria-hidden>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </div>
        <div className={styles.titleLabel}>{copy.eyebrow}</div>
        <button
          type="button"
          onClick={handleCopy}
          className={styles.headerCopy}
          aria-label={copied ? copy.copied : copy.copy}
          title={copied ? copy.copied : copy.copy}
        >
          {copied ? (
            <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden>
              <path
                fill="currentColor"
                d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden>
              <path
                fill="currentColor"
                d="M5 1.75A1.75 1.75 0 0 1 6.75 0h6.5A1.75 1.75 0 0 1 15 1.75v8.5A1.75 1.75 0 0 1 13.25 12H11v-1.5h2.25a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-6.5a.25.25 0 0 0-.25.25V4H5V1.75Z"
              />
              <path
                fill="currentColor"
                d="M1 5.75C1 4.784 1.784 4 2.75 4h6.5C10.216 4 11 4.784 11 5.75v8.5A1.75 1.75 0 0 1 9.25 16h-6.5A1.75 1.75 0 0 1 1 14.25v-8.5Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-6.5Z"
              />
            </svg>
          )}
        </button>
      </div>

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
            {active === key && <span className={styles.tabIndicator} aria-hidden />}
          </button>
        ))}
      </div>
      <div className={styles.codeBox} aria-live="polite">
        {html ? (
          <div key={active} className={styles.shiki} dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <pre key={active} className={styles.fallback}>
            <code>{SNIPPETS[active]}</code>
          </pre>
        )}
      </div>
    </div>
  )
}
