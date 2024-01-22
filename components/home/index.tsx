import { useRouter } from 'next/router'
import Link from 'next/link';
import styles from './style.module.css'

export default function Home() {
  const heroMap = {
    '/en': {
      headlineOne: 'A better way to build',
      headlineTwo: 'your gRPC client and server.',
      subtitleOne: 'gRPCity is a Node.js library based on grpc-node that integrates client and server into one.',
      subtitleTwo: 'It is simple, easy to use and advanced, keeping you to focus on business code.',
      cta: 'Get Started'
    },
    '/zh': {
      headlineOne: '以更好的方式去创建',
      headlineTwo: '您的 gRPC 客户端和服务端。',
      subtitleOne: 'gRPCity 是一个基于 grpc-node 的客户端和服务端一体化 Node.js 库。',
      subtitleTwo: '它简单、易用和高级，让你专注于业务代码而不是底层实现。',
      cta: '开始使用'
    }
  }

  const { route } = useRouter()
  const locate = route.includes('/en') ? '/en' : '/zh'

  return (
    <div className={styles.root}>
      <div className={styles.tilesBg}></div>
      <div className={styles.tiles}></div>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          {heroMap[locate].headlineOne} <br />
          {heroMap[locate].headlineTwo}
        </h1>
        <p className={styles.subtitle}>
          {heroMap[locate].subtitleOne} <br />
          {heroMap[locate].subtitleTwo}
        </p>
        <div className={styles.actions}>
          <Link className={styles.cta} href={`${locate}/docs/start`}>
            {heroMap[locate].cta} <span>→</span>
          </Link>
          <a
            className={styles.secondaryAction}
            href="https://github.com/chakhsu/grpcity"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  )
}
