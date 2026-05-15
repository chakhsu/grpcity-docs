'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Hero from './hero'
import Feature from './feature'
import WhyGrpcity from './why'

export type Locale = '/en' | '/zh'

export default function Home() {
  const pathname = usePathname() || ''
  const locale: Locale = pathname.includes('/zh') ? '/zh' : '/en'

  useEffect(() => {
    document.body.dataset.page = 'home'
    return () => {
      delete document.body.dataset.page
    }
  }, [])

  return (
    <>
      {Hero(locale)}
      {Feature(locale)}
      {WhyGrpcity(locale)}
    </>
  )
}
