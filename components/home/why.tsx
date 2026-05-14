import Link from 'next/link'
import { useEffect, useRef } from 'react'
import styles from './why.module.css'

const COPY = {
  '/en': {
    eyebrow: 'Comparison',
    title: 'Why gRPCity over raw @grpc/grpc-js?',
    intro:
      'gRPCity sits on top of @grpc/grpc-js — it does not replace it. The point of the wrapper is to make the parts you write every day shorter and the parts you forget about safer.',
    headBaseline: '@grpc/grpc-js',
    headGrpcity: 'gRPCity',
    rows: [
      ['Bootstrap a service', '20+ lines of proto loading and method binding', '3 lines: loader → server → listen'],
      ['Cancel an in-flight RPC', 'Manual call.cancel(); no AbortSignal integration', 'Pass `signal` to any RPC — pre-abort and mid-call abort just work'],
      ['Streaming consumption', 'Event emitters with manual back-pressure', '`for await (const m of call.readAll())` everywhere'],
      ['Error handling', '`Error` payload, no typed shape', '`GrpcClientError` with `code` / `details` / `metadata`'],
      ['Reflection / mTLS / middleware', 'Each one is a separate package or hand-rolled', 'Built in, on by default, behind the same loader']
    ],
    cta: 'See the full guide'
  },
  '/zh': {
    eyebrow: '对比',
    title: '为什么用 gRPCity，而不是直接用 @grpc/grpc-js？',
    intro:
      'gRPCity 是 @grpc/grpc-js 之上的薄封装，不是替代品。封装的目的，是把你每天要写的部分变短、把你容易忘的部分变安全。',
    headBaseline: '@grpc/grpc-js',
    headGrpcity: 'gRPCity',
    rows: [
      ['启动一个服务', '20+ 行 proto 加载与方法绑定', '3 行：loader → server → listen'],
      ['取消进行中的 RPC', '手动 call.cancel()，没有 AbortSignal 集成', '任意 RPC 传 `signal` 即可——调用前 abort、调用中 abort 都开箱可用'],
      ['流式消费', '事件 emitter + 手动背压', '到处都是 `for await (const m of call.readAll())`'],
      ['错误处理', '`Error` 负载，没有类型化形态', '`GrpcClientError` 携带 `code` / `details` / `metadata`'],
      ['反射 / mTLS / 中间件', '各自是独立包或手写', '内置、默认启用、共用同一个 loader']
    ],
    cta: '查看完整指南'
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

const DashIcon = () => (
  <svg className={styles.markIcon} viewBox="0 0 16 16" width="14" height="14" aria-hidden>
    <path fill="currentColor" d="M3.75 7.25h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Z" />
  </svg>
)

const CheckIcon = () => (
  <svg className={styles.markIcon} viewBox="0 0 16 16" width="14" height="14" aria-hidden>
    <path
      fill="currentColor"
      d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
    />
  </svg>
)

export default function Why(locale: Locale) {
  const copy = COPY[locale] || COPY['/en']
  const tableRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const table = tableRef.current
    if (!table || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add(styles.tableVisible)
            io.disconnect()
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    )
    io.observe(table)
    return () => io.disconnect()
  }, [locale])

  return (
    <section className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>{copy.eyebrow}</span>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.intro}>{copy.intro}</p>
        </div>

        <div className={styles.table} role="table" ref={tableRef}>
          <div className={`${styles.row} ${styles.headRow}`} role="row">
            <div className={styles.cell} role="columnheader" />
            <div className={styles.cell} role="columnheader">{copy.headBaseline}</div>
            <div className={`${styles.cell} ${styles.brand}`} role="columnheader">
              <span className={styles.brandDot} aria-hidden />
              {copy.headGrpcity}
            </div>
          </div>
          {copy.rows.map(([label, baseline, grpcity], i) => (
            <div
              key={label}
              className={styles.row}
              role="row"
              style={{ ['--reveal-delay' as string]: `${i * 60}ms` }}
            >
              <div className={`${styles.cell} ${styles.label}`} role="cell">{label}</div>
              <div className={`${styles.cell} ${styles.muted}`} role="cell">
                <span className={`${styles.mark} ${styles.markMuted}`}><DashIcon /></span>
                <span>{renderInline(baseline)}</span>
              </div>
              <div className={`${styles.cell} ${styles.brandCell}`} role="cell">
                <span className={`${styles.mark} ${styles.markBrand}`}><CheckIcon /></span>
                <span>{renderInline(grpcity)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href={`${locale}/docs`} className={styles.ctaLink}>
            {copy.cta}
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
              <path
                fill="currentColor"
                d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L9.94 8.25H2.75a.75.75 0 0 1 0-1.5h7.19L6.22 4.28a.75.75 0 0 1 0-1.06Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
