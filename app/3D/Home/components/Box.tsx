import { useFrame } from '@react-three/fiber'
import { Outlines } from '@react-three/drei'
import { useRef } from 'react'

interface BoxProps {
  position: [number, number, number]
  scale?: number
}

export const Box: React.FC<BoxProps> = ({ position, scale }) => {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta
      ref.current.rotation.y += delta
    }
  })
  return (
    <mesh
      castShadow
      receiveShadow
      position={position}
      scale={scale}
      ref={ref}
    >
      <boxGeometry />
      <meshStandardMaterial color='orange' />
      <Outlines color='white' />
    </mesh>
  )
}
