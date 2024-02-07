import { Outlines, useGLTF } from '@react-three/drei'

interface TSProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
}

export const TS: React.FC<TSProps> = ({ position, rotation, scale }) => {
  const { nodes, materials } = useGLTF('/composition.glb')
  return (
    <group
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.ts as THREE.Mesh).geometry}
        material={materials['back.006']} 
      >
        <Outlines
          screenspace
          thickness={4}
          color='#1C1C1C' 
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.ts_1 as THREE.Mesh).geometry}
        material={materials['logo.006']}
      />
    </group>
  )
}
