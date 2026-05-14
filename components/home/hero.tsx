import Link from 'next/link'
import { useState } from 'react'
import styles from './hero.module.css'
import CodePreview from './codePreview'

const COPY = {
  '/en': {
    eyebrow: 'gRPCity 3.0 — now stable',
    headline: 'A nicer way to build',
    headlineAccent: 'your gRPC server and client.',
    subtitle:
      'A small, opinionated framework that wraps @grpc/grpc-js and @grpc/proto-loader so you can ship a typed service or client in a handful of lines.',
    primary: 'Get started',
    secondary: 'GitHub',
    install: 'Install',
    copy: 'Copy',
    copied: 'Copied'
  },
  '/zh': {
    eyebrow: 'gRPCity 3.0 — 已正式发布',
    headline: '以更好的方式去创建',
    headlineAccent: '您的 gRPC 客户端和服务端。',
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
      <div className={styles.spotlight} aria-hidden />

      <div className={styles.content}>
        <div className={styles.left}>
          <a
            className={styles.eyebrow}
            href="https://github.com/chakhsu/grpcity/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.eyebrowDot} aria-hidden />
            {copy.eyebrow}
            <span className={styles.eyebrowArrow} aria-hidden>→</span>
          </a>

          <h1 className={styles.headline}>
            {copy.headline}
            <br />
            <span className={styles.accent}>{copy.headlineAccent}</span>
          </h1>

          <p className={styles.subtitle}>{copy.subtitle}</p>

          <div className={styles.actions}>
            <Link className={styles.cta} href={`${locale}/docs/start`}>
              {copy.primary}
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
                <path
                  fill="currentColor"
                  d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L9.94 8.25H2.75a.75.75 0 0 1 0-1.5h7.19L6.22 4.28a.75.75 0 0 1 0-1.06Z"
                />
              </svg>
            </Link>
            <a
              className={styles.secondaryAction}
              href="https://github.com/chakhsu/grpcity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
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
            <p className={styles.cmd}>{installCmd}</p>
            <button
              type="button"
              onClick={handleCopy}
              className={styles.copyBtn}
              aria-label={copied ? copy.copied : copy.copy}
              title={copied ? copy.copied : copy.copy}
            >
              {copied ? (
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
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
        </div>

        <div className={styles.right}>{CodePreview(locale)}</div>
      </div>
    </section>
  )
}
