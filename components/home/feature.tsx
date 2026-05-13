import styles from './feature.module.css'

const COPY = {
  '/en': {
    title: 'Built for production from day one.',
    subtitle:
      'Every gRPCity release ships with the features below on, behind a stable API.',
    items: [
      {
        title: 'Streaming, four ways',
        body: 'Unary, client stream, server stream, and bidi — all consumable with `for await`. Throwing in a handler always reaches the client as a status.'
      },
      {
        title: 'AbortSignal, end to end',
        body: 'Cancel any RPC by passing an `AbortSignal`. Pre-abort short-circuits the call; mid-flight abort cancels and surfaces as `CANCELLED`.'
      },
      {
        title: 'Middleware on both sides',
        body: 'Koa-style `(ctx, next)` for clients and servers — log, trace, retry, mutate metadata, all without touching the call site.'
      },
      {
        title: 'gRPC reflection built in',
        body: '`loader.initReflection()` returns a service you can `inject()` straight into the server, so `grpcurl` and Postman just work.'
      },
      {
        title: 'Mutual TLS in three lines',
        body: 'Helpers (`makeServerCredentials`, `makeClientCredentials`) hide the boilerplate; full mTLS in a few function calls.'
      },
      {
        title: 'Validation that catches typos',
        body: 'Loader, client, and server options are validated at runtime with zod — typos fail loudly, not silently.'
      },
      {
        title: 'TypeScript, first class',
        body: 'Written in TypeScript end to end. Types for `Metadata`, `credentials`, `ChannelCredentials`, `StatusObject`, and more re-exported from the entry point.'
      },
      {
        title: 'Promise & callback',
        body: 'Use `await` everywhere by default; callback variants stay around for legacy integrations and event-driven hot paths.'
      }
    ]
  },
  '/zh': {
    title: '从第一天起就为生产打磨。',
    subtitle: '每个 gRPCity 版本都默认启用下列特性，并保持稳定 API。',
    items: [
      {
        title: '四种流式 RPC',
        body: 'unary、client stream、server stream、bidi 全都可以 `for await` 消费。Handler 中 `throw` 会以 status 形式抵达客户端。'
      },
      {
        title: 'AbortSignal 全链路',
        body: '任何 RPC 都可以传 `AbortSignal` 取消。调用前 abort 会短路；调用中 abort 会立刻取消，并以 `CANCELLED` 抛出。'
      },
      {
        title: '客户端 / 服务端中间件',
        body: '客户端和服务端都用 Koa 风格的 `(ctx, next)`——日志、追踪、重试、metadata 改写都不用动调用处。'
      },
      {
        title: '内建 gRPC 反射',
        body: '`loader.initReflection()` 返回一个可以 `inject()` 给 server 的服务，`grpcurl` 与 Postman 直接可用。'
      },
      {
        title: '三行配齐 mTLS',
        body: '`makeServerCredentials` / `makeClientCredentials` 把样板代码全藏起来，几个调用就能完整 mTLS。'
      },
      {
        title: '配置 typo 当场报错',
        body: 'Loader、client、server 选项都通过 zod 在运行时校验，typo 会响亮地失败而不是静默吞掉。'
      },
      {
        title: 'TypeScript 一等公民',
        body: '全程 TypeScript 实现。`Metadata`、`credentials`、`ChannelCredentials`、`StatusObject` 等类型都从主入口重新导出。'
      },
      {
        title: 'Promise 与 callback',
        body: '默认 `await` 一切；保留 callback 形式给历史集成与事件驱动热路径。'
      }
    ]
  }
} as const

type Locale = keyof typeof COPY

// Render backticked spans as <code>. Keep it tiny — no markdown parser.
const renderInline = (text: string): JSX.Element[] => {
  const parts = text.split(/(`[^`]+`)/g)
  return parts.map((part, i) =>
    part.startsWith('`') && part.endsWith('`') ? (
      <code key={i}>{part.slice(1, -1)}</code>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

const ICONS: JSX.Element[] = [
  <svg key="i0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7h18M3 12h12M3 17h18" />
  </svg>,
  <svg key="i1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M5 5l14 14" />
  </svg>,
  <svg key="i2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h4l2-7 4 14 2-7h6" />
  </svg>,
  <svg key="i3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
  </svg>,
  <svg key="i4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="i5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="i6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="6" rx="1" />
    <rect x="3" y="14" width="18" height="6" rx="1" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>,
  <svg key="i7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l4 4L19 6" />
  </svg>
]

export default function Feature(locale: Locale) {
  const copy = COPY[locale] || COPY['/en']

  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.subtitle}>{copy.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {copy.items.map((item, i) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.iconWrap}>{ICONS[i]}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{renderInline(item.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
