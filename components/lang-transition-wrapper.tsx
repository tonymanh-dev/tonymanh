'use client'

import { ReactNode, useEffect, useState } from 'react'
import type { Locale } from '@/lib/i18n'

export default function LangTransitionWrapper({
  locale,
  children,
}: {
  locale: Locale
  children: ReactNode
}) {
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 180)
    return () => clearTimeout(timer)
  }, [locale])

  return (
    <div
      className={`transition-opacity duration-150 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {children}
    </div>
  )
}
