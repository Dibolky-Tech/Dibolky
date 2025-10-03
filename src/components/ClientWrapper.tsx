'use client'

import { useEffect, useState } from 'react'

interface ClientWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function ClientWrapper({ children, fallback = null }: ClientWrapperProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Add hydrated class to body to enable transitions
    document.body.classList.add('hydrated')
  }, [])

  if (!isClient) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
