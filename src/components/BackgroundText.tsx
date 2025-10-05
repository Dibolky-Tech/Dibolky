'use client'
import { Text } from '@react-three/drei'
import { useEffect, useState } from 'react'

export function BackgroundText() {
  const [fontSize, setFontSize] = useState(1)
  const [maxWidth, setMaxWidth] = useState(3)

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      if (width < 480) {
        setFontSize(0.45)
        setMaxWidth(1.5)
      } else if (width < 768) {
        setFontSize(0.7)
        setMaxWidth(2.2)
      } else {
        setFontSize(1)
        setMaxWidth(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Text
      font="/assets/fonts/Barracuda-regular.ttf"
      fontSize={fontSize}
      color="#CAFF66"
      position={[0, 0, -1]}
      anchorX="center"
      anchorY="middle"
      textAlign="center"
      maxWidth={maxWidth}
      lineHeight={1}
      renderOrder={0}
      // Keep it extra cheap (no tone mapping pass)
      material-toneMapped={false}
    >
      HUMAN{'\n'}CRAFTED
    </Text>
  )
}
