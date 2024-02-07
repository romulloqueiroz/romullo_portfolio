import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Outlines } from '@react-three/drei'
import { useRef } from 'react'

interface BitcoinProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
}

export const Bitcoin: React.FC<BitcoinProps> = ({ position, rotation, scale }) => {
  const { nodes, materials } = useGLTF('/composition.glb')
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta*0.01
      ref.current.rotation.y += delta*0.08
    }
  })
  return (
    <group
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh ref={ref}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bitcoin_1 as THREE.Mesh).geometry}
          material={materials['black.004']}
        >
          <Outlines color='#1C1C1C' />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.bitcoin_2 as THREE.Mesh).geometry}
          material={materials['SVGMat.217']}
        />
      </mesh>

    </group>
  )
}
