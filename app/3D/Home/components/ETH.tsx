'use client';
import { useGLTF } from '@react-three/drei';

interface ETHProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}
export const ETH: React.FC<ETHProps> = ({ position, rotation, scale }) => {
  const { nodes, materials } = useGLTF('/composition.glb');
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={(nodes.ETH as THREE.Mesh).geometry}
      material={materials['Scene_-_Root']}
      position={position}
      rotation={rotation}
      scale={scale} />
  );
};
