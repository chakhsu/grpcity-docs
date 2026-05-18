'use client'

import { useEffect, useState } from 'react'
import styles from './codePreview.module.css'

const COPY = {
  '/en': {
    eyebrow: 'Quick start',
    tabs: {
      proto: 'service.proto',
      loader: 'loader',
      server: 'server',
      client: 'client'
    },
    copy: 'Copy to clipboard',
    copied: 'Copied'
  },
  '/zh': {
    eyebrow: '快速上手',
    tabs: {
      proto: 'service.proto',
      loader: 'loader',
      server: 'server',
      client: 'client'
    },
    copy: '复制',
    copied: '已复制'
  }
} as const

type Locale = keyof typeof COPY
type SnippetKey = 'proto' | 'loader' | 'server' | 'client'
type Lang = 'js' | 'ts'

const SHIKI_LANG: Record<SnippetKey, Record<Lang, string>> = {
  proto: { js: 'proto', ts: 'proto' },
  loader: { js: 'javascript', ts: 'typescript' },
  server: { js: 'javascript', ts: 'typescript' },
  client: { js: 'javascript', ts: 'typescript' }
}

const PROTO_SNIPPET = `syntax = "proto3";

package helloworld;

service Greeter {
  rpc SayGreet (HelloRequest) returns (HelloReply);
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}`

const SNIPPETS: Record<SnippetKey, Record<Lang, string>> = {
  proto: { js: PROTO_SNIPPET, ts: PROTO_SNIPPET },
  loader: {
    js: `import { ProtoLoader } from 'grpcity'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const loader = new ProtoLoader({
  location: path.join(__dirname, './proto'),
  files: ['helloworld/service.proto']
})`,
    ts: `import { ProtoLoader } from 'grpcity'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname: string = path.dirname(fileURLToPath(import.meta.url))

export const loader = new ProtoLoader({
  location: path.join(__dirname, './proto'),
  files: ['helloworld/service.proto']
})`
  },
  server: {
    js: `import { loader } from './loader.js'

class Greeter {
  async sayGreet(call) {
    return { message: \`hello, \${call.request.name}\` }
  }
}

await loader.init()
const server = await loader.initServer()
server.add('helloworld.Greeter', new Greeter())
await server.listen('127.0.0.1:9099')`,
    ts: `import { loader } from './loader.js'

interface HelloRequest { name: string }
interface HelloReply { message: string }

class Greeter {
  async sayGreet(call: { request: HelloRequest }): Promise<HelloReply> {
    return { message: \`hello, \${call.request.name}\` }
  }
}

await loader.init()
const server = await loader.initServer()
server.add('helloworld.Greeter', new Greeter())
await server.listen('127.0.0.1:9099')`
  },
  client: {
    js: `import { loader } from './loader.js'

await loader.init()
const clients = await loader.initClients({
  services: { 'helloworld.Greeter': '127.0.0.1:9099' }
})

const greeter = clients.get('helloworld.Greeter')
const { response } = await greeter.sayGreet({ name: 'gRPCity' })
console.log(response) // { message: 'hello, gRPCity' }`,
    ts: `import { loader } from './loader.js'

interface HelloReply { message: string }

await loader.init()
const clients = await loader.initClients({
  services: { 'helloworld.Greeter': '127.0.0.1:9099' }
})

const greeter = clients.get('helloworld.Greeter')
const { response } = await greeter.sayGreet<HelloReply>({ name: 'gRPCity' })
console.log(response) // { message: 'hello, gRPCity' }`
  }
}

const fileLabel = (key: SnippetKey, base: string, lang: Lang) =>
  key === 'proto' ? base : `${base}.${lang === 'ts' ? 'ts' : 'js'}`

const langDisplay = (key: SnippetKey, lang: Lang) =>
  key === 'proto' ? 'Protocol Buffers' : lang === 'ts' ? 'TypeScript' : 'JavaScript'

// Cache highlighted HTML across mounts so tab/lang-switching is instant after the
// first paint of each combination.
const HTML_CACHE: Partial<
  Record<`${SnippetKey}:${Lang}:${'light' | 'dark'}`, string>
> = {}

const useHighlighted = (key: SnippetKey, lang: Lang, theme: 'light' | 'dark') => {
  const cacheKey = `${key}:${lang}:${theme}` as const
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
        const out = await codeToHtml(SNIPPETS[key][lang], {
          lang: SHIKI_LANG[key][lang],
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
  }, [cacheKey, key, lang, theme])

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
  const [lang, setLang] = useState<Lang>('js')
  const [copied, setCopied] = useState(false)
  const scheme = useColorScheme()
  const html = useHighlighted(active, lang, scheme)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SNIPPETS[active][lang])
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

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
            {fileLabel(key, copy.tabs[key], lang)}
          </button>
        ))}
      </div>

      <div className={styles.codeBox} aria-live="polite">
        {html ? (
          <div
            key={`${active}:${lang}`}
            className={styles.shiki}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <pre key={`${active}:${lang}`} className={styles.fallback}>
            <code>{SNIPPETS[active][lang]}</code>
          </pre>
        )}
      </div>

      <div className={styles.footer}>
        <div
          className={styles.langToggle}
          role="radiogroup"
          aria-label="Code language"
          data-disabled={active === 'proto' ? 'true' : undefined}
        >
          <button
            type="button"
            role="radio"
            aria-checked={lang === 'js'}
            className={`${styles.langOption} ${lang === 'js' ? styles.langOptionActive : ''}`}
            onClick={() => setLang('js')}
            disabled={active === 'proto'}
          >
            JS
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={lang === 'ts'}
            className={`${styles.langOption} ${lang === 'ts' ? styles.langOptionActive : ''}`}
            onClick={() => setLang('ts')}
            disabled={active === 'proto'}
          >
            TS
          </button>
        </div>

        <span className={styles.languageLabel}>{langDisplay(active, lang)}</span>

        <button
          type="button"
          onClick={handleCopy}
          className={styles.copyBtn}
          aria-label={copied ? copy.copied : copy.copy}
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
          <span>{copied ? copy.copied : copy.copy}</span>
        </button>
      </div>
    </div>
  )
}
