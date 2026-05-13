import Link from 'next/link'
import styles from './why.module.css'

const COPY = {
  '/en': {
    title: 'Why gRPCity over raw @grpc/grpc-js?',
    intro:
      'gRPCity sits on top of @grpc/grpc-js — it does not replace it. The point of the wrapper is to make the parts you write every day shorter and the parts you forget about safer.',
    rows: [
      ['Bootstrap a service', '20+ lines of proto loading and method binding', '3 lines: loader → server → listen'],
      ['Cancel an in-flight RPC', 'Manual call.cancel(); no AbortSignal integration', 'Pass `signal` to any RPC — pre-abort and mid-call abort just work'],
      ['Streaming consumption', 'Event emitters with manual back-pressure', '`for await (const m of call.readAll())` everywhere'],
      ['Error handling', '`Error` payload, no typed shape', '`GrpcClientError` with `code` / `details` / `metadata`'],
      ['Reflection / mTLS / middleware', 'Each one is a separate package or hand-rolled', 'Built in, on by default, behind the same loader']
    ],
    cta: 'See the full guide →'
  },
  '/zh': {
    title: '为什么用 gRPCity，而不是直接用 @grpc/grpc-js？',
    intro:
      'gRPCity 是 @grpc/grpc-js 之上的薄封装，不是替代品。封装的目的，是把你每天要写的部分变短、把你容易忘的部分变安全。',
    rows: [
      ['启动一个服务', '20+ 行 proto 加载与方法绑定', '3 行：loader → server → listen'],
      ['取消进行中的 RPC', '手动 call.cancel()，没有 AbortSignal 集成', '任意 RPC 传 `signal` 即可——调用前 abort、调用中 abort 都开箱可用'],
      ['流式消费', '事件 emitter + 手动背压', '到处都是 `for await (const m of call.readAll())`'],
      ['错误处理', '`Error` 负载，没有类型化形态', '`GrpcClientError` 携带 `code` / `details` / `metadata`'],
      ['反射 / mTLS / 中间件', '各自是独立包或手写', '内置、默认启用、共用同一个 loader']
    ],
    cta: '查看完整指南 →'
  }
} as const

type Locale = keyof typeof COPY

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

export default function Why(locale: Locale) {
  const copy = COPY[locale] || COPY['/en']
  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.intro}>{copy.intro}</p>
        </div>

        <div className={styles.table}>
          <div className={`${styles.row} ${styles.headRow}`}>
            <div className={styles.cell} />
            <div className={styles.cell}>@grpc/grpc-js</div>
            <div className={`${styles.cell} ${styles.brand}`}>gRPCity</div>
          </div>
          {copy.rows.map(([label, baseline, grpcity]) => (
            <div key={label} className={styles.row}>
              <div className={`${styles.cell} ${styles.label}`}>{label}</div>
              <div className={`${styles.cell} ${styles.muted}`}>{renderInline(baseline)}</div>
              <div className={styles.cell}>{renderInline(grpcity)}</div>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href={`${locale}/docs`} className={styles.ctaLink}>
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
