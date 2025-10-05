'use client'
import { Text } from '@react-three/drei'

export function BackgroundText() {
  return (
    <Text
      fontSize={0.7}
      color="#CAFF66"
      position={[0, 0, -1]}
      anchorX="center"
      anchorY="middle"
      textAlign="center"
      maxWidth={3}
      lineHeight={1}
      renderOrder={0}
    >
      HUMAN{"\n"}CRAFTED
    </Text>
  )
}
