'use client'
import { useGLTF } from '@react-three/drei'
import { Outlines } from '@react-three/drei'

interface CylinderProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: [number, number, number]
}

export const Cylinder: React.FC<CylinderProps> = ({ position, rotation, scale }) => {
  const { nodes } = useGLTF('/composition.glb');
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={(nodes.Cylinder as THREE.Mesh).geometry}
      material={(nodes.Cylinder as THREE.Mesh).material}
      position={position}
      rotation={rotation}
      scale={scale}  
    >
        <meshStandardMaterial color='#FFD300' />
        <Outlines color='#1C1C1C' />
    </mesh>
  )
}
