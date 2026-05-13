import { useRouter } from 'next/router'
import Hero from './hero'
import CodePreview from './codePreview'
import Feature from './feature'
import WhyGrpcity from './why'

export type Locale = '/en' | '/zh'

export default function Home() {
  const { route } = useRouter()
  const locale: Locale = route.includes('/zh') ? '/zh' : '/en'

  return (
    <>
      {Hero(locale)}
      {CodePreview(locale)}
      {Feature(locale)}
      {WhyGrpcity(locale)}
    </>
  )
}
