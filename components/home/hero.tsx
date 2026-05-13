import Link from 'next/link';
import styles from './hero.module.css'

export default function Hero(locate: string) {
  const heroMap = {
    '/en': {
      headlineOne: 'A nicer way to build',
      headlineTwo: 'your gRPC server and client.',
      subtitleOne: 'gRPCity wraps @grpc/grpc-js and @grpc/proto-loader behind a small, opinionated API,',
      subtitleTwo: 'so you can stand up a typed service in a handful of lines and stay focused on business code.',
      cta: 'Get Started'
    },
    '/zh': {
      headlineOne: '更顺手的方式',
      headlineTwo: '搭建你的 gRPC 服务端和客户端。',
      subtitleOne: 'gRPCity 把 @grpc/grpc-js 与 @grpc/proto-loader 封装在一套小而克制的 API 之下，',
      subtitleTwo: '十几行代码起一个带类型的服务，把剩下的时间留给业务逻辑。',
      cta: '开始使用'
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.tilesBg}></div>
      <div className={styles.tiles}></div>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          <p className={styles.head}>
            <span></span>
            <span>
              {heroMap[locate].headlineOne}<br className="max-md:_hidden" />
              {heroMap[locate].headlineTwo}
              <span className={styles.pops}>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
                <span className={styles.pop}></span>
              </span>
            </span>
            <span></span>
          </p>
        </h1>
        <p className={styles.subtitle}>
          {heroMap[locate].subtitleOne}<br className="max-md:_hidden" />
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
