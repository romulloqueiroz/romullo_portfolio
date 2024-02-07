'use client';
import { Outlines, useGLTF } from '@react-three/drei';

interface JSProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}
export const JS: React.FC<JSProps> = ({ position, rotation, scale }) => {
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
        geometry={(nodes.js as THREE.Mesh).geometry}
        material={materials['back.007']} 
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
        geometry={(nodes.js_1 as THREE.Mesh).geometry}
        material={materials['logo.007']} 
      />
    </group>
  );
};
