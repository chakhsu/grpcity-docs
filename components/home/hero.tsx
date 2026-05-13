import Link from 'next/link'
import { useState } from 'react'
import styles from './hero.module.css'
import { LogoTitle } from '@components/logoImage'
import CodePreview from './codePreview'

const COPY = {
  '/en': {
    eyebrow: 'gRPCity',
    headline: 'gRPC for Node.js,',
    headlineAccent: 'without the boilerplate.',
    subtitle:
      'A small, opinionated framework that wraps @grpc/grpc-js and @grpc/proto-loader so you can ship a typed service or client in a handful of lines.',
    primary: 'Get started',
    secondary: 'GitHub',
    install: 'Install',
    copy: 'Copy',
    copied: 'Copied'
  },
  '/zh': {
    eyebrow: 'gRPCity',
    headline: 'Node.js 的 gRPC，',
    headlineAccent: '不再有样板代码。',
    subtitle:
      '一套小而克制的框架，封装 @grpc/grpc-js 与 @grpc/proto-loader，让你用十几行代码就能交付带类型的服务或客户端。',
    primary: '开始上手',
    secondary: 'GitHub',
    install: '安装',
    copy: '复制',
    copied: '已复制'
  }
} as const

type Locale = keyof typeof COPY

export default function Hero(locale: Locale) {
  const copy = COPY[locale] || COPY['/en']
  const [copied, setCopied] = useState(false)

  const installCmd = 'npm i grpcity'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCmd)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

  return (
    <section className={styles.root}>
      <div className={styles.tilesBg} aria-hidden />
      <div className={styles.tiles} aria-hidden />

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.brand} aria-hidden>
            <LogoTitle />
          </div>

          <span className={styles.eyebrow}>{copy.eyebrow}</span>

          <h1 className={styles.headline}>
            {copy.headline}
            <br />
            <span className={styles.accent}>{copy.headlineAccent}</span>
          </h1>

          <p className={styles.subtitle}>{copy.subtitle}</p>

          <div className={styles.actions}>
            <Link className={styles.cta} href={`${locale}/docs/start`}>
              {copy.primary} <span>→</span>
            </Link>
            <a
              className={styles.secondaryAction}
              href="https://github.com/chakhsu/grpcity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                <path
                  fill="currentColor"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"
                />
              </svg>
              {copy.secondary}
            </a>
          </div>

          <div className={styles.installPill} role="group" aria-label={copy.install}>
            <span className={styles.prompt}>$</span>
            <code className={styles.cmd}>{installCmd}</code>
            <button type="button" onClick={handleCopy} className={styles.copyBtn}>
              {copied ? copy.copied : copy.copy}
            </button>
          </div>
        </div>

        <div className={styles.right}>{CodePreview(locale)}</div>
      </div>
    </section>
  )
}
