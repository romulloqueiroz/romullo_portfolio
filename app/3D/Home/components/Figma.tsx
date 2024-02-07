'use client';
import { useGLTF } from '@react-three/drei';

interface FigmaProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}
export const Figma: React.FC<FigmaProps> = ({ position, rotation, scale }) => {
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
        geometry={(nodes.figma as THREE.Mesh).geometry}
        material={materials['back.008']} />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.figma_1 as THREE.Mesh).geometry}
        material={materials['logo.008']} />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.figma_2 as THREE.Mesh).geometry}
        material={materials['logo_1.002']} />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.figma_3 as THREE.Mesh).geometry}
        material={materials['logo_1_0.001']} />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.figma_4 as THREE.Mesh).geometry}
        material={materials['logo_2.001']} />
    </group>
  );
};
