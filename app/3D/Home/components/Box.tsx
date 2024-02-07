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
      ref.current.rotation.x += delta*0.1
      ref.current.rotation.y += delta*0.1
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
      <Outlines color='#1C1C1C' />
    </mesh>
  )
}
