import Document, { Head, Html, Main, NextScript } from 'next/document'
import { SkipNavLink } from 'nextra-theme-docs'
import { SpeedInsights } from '@vercel/speed-insights/next';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <SkipNavLink styled />
          <Main />
          <NextScript />
          <SpeedInsights />
        </body>
      </Html>
    )
  }
}

export default MyDocument
