import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '../style.css'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  )
}