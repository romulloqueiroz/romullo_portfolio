import { Outlines, useGLTF } from '@react-three/drei'

interface BlenderProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
}

export const Blender: React.FC<BlenderProps> = ({ position, rotation, scale }) => {
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
        geometry={(nodes.blender as THREE.Mesh).geometry}
        material={materials['logo.009']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.blender_1 as THREE.Mesh).geometry}
        material={materials['back.009']}
        >
        <Outlines color='white' />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.blender_2 as THREE.Mesh).geometry}
        material={materials['logo_1.003']}
      />
    </group>
  )
}
