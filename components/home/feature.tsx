import { useRouter } from 'next/router'
import styles from './feature.module.css'

export default function Feature() {
  return (
    <div className={styles.container}>
      <div className={`${styles.panel} ${styles['feature-table']}`}>
        <div className={styles['feature-plan']}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/><path d="m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"/></svg>
          <h2 className={styles['feature-header']}>Loader</h2>
          <ul className={styles['feature-desc']}>
            <li key='1' className={styles['feature-desc-item']}>Custom Path</li>
            <li key='2' className={styles['feature-desc-item']}>Multi Path</li>
            <li key='3' className={styles['feature-desc-item']}>Package Prefix</li>
            <li key='4' className={styles['feature-desc-item']}>Package Cache</li>
          </ul>
        </div>
        <div className={styles['feature-plan']}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>
          <h2 className={styles['feature-header']}>Client</h2>
          <ul className={styles['feature-desc']}>
            <li key='1' className={styles['feature-desc-item']}>Proxy Cache</li>
            <li key='2' className={styles['feature-desc-item']}>Promisify</li>
            <li key='3' className={styles['feature-desc-item']}>Async Stream</li>
            <li key='4' className={styles['feature-desc-item']}>Middleware</li>
          </ul>
        </div>
        <div className={styles['feature-plan']}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/></svg>
          <h2 className={styles['feature-header']}>Server</h2>
          <ul className={styles['feature-desc']}>
            <li key='1' className={styles['feature-desc-item']}>Call Proxy</li>
            <li key='2' className={styles['feature-desc-item']}>Promisify</li>
            <li key='3' className={styles['feature-desc-item']}>Async Stream</li>
            <li key='4' className={styles['feature-desc-item']}>Middleware</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
