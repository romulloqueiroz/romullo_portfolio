'use client';
import { Outlines } from '@react-three/drei';

interface SphereProps {
  position: [number, number, number];
  scale?: number;
}
export const Sphere: React.FC<SphereProps> = ({ scale, position }) => (
  <mesh
    castShadow
    receiveShadow
    scale={scale}
    position={position}
  >
    <sphereGeometry args={[1, 64, 64]} />
    <meshStandardMaterial />
    <Outlines
      screenspace
      thickness={4}
      color='white' 
    />
  </mesh>
);
