import { useGLTF } from '@react-three/drei'
import { Outlines } from '@react-three/drei'

interface ReactModelProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
}

export const ReactModel: React.FC<ReactModelProps> = ({ position, rotation, scale }) => {
  const { nodes, materials } = useGLTF('/composition.glb');
  return (
    <group
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.react as THREE.Mesh).geometry}
        material={materials['logo.005']} 
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.react_1 as THREE.Mesh).geometry}
        material={materials['back.005']} 
      >
        <Outlines
          screenspace
          thickness={4}
          color='#1C1C1C' 
        />
      </mesh>
    </group>
  )
}
