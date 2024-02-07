'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import { 
  Bitcoin,
  Blender,
  Box,
  ReactModel,
  Sphere,
  TS,
  JS,
} from './components'
import { ETH } from './components/ETH'
import { Figma } from './components/Figma'
import { Cylinder } from './components/Cylinder'

export const Home3D = () => (
  <Canvas camera={{ position: [0.6, 1.4, 5], fov: 75 }} >
    <ambientLight intensity={0.4} />
    <pointLight position={[5, 5, 0]} intensity={100} />
    {/* <OrbitControls 
      enableZoom={false} 
      enablePan={false} 
      minPolarAngle={0} 
      maxPolarAngle={Math.PI / 2.1}
    /> */}
    <Cylinder 
      position={[1.6, -0.2, 3.4]}
      rotation={[0, 0.42, 1.6]}
      scale={[0.024, 0.18, 0.02]}
    />
    <Figma 
      position={[-0.144, 0.062, 2.7]}
      rotation={[0.745, -0.402, 0.346]}
      scale={0.028}
    />
    <Bitcoin 
      scale={0.14}
      rotation={[-0.441, 0, 0.05]}
      position={[1.6, 0.6, 2.4]}
    />

    <Blender 
      scale={0.04}
      rotation={[0, -0.2, -0.]}
      position={[0.55, -0.34, 2.2]}
    />
    <Box 
      scale={0.6} 
      position={[-1, 0.4, 1]} 
    />
    <Box 
      scale={-0.058} 
      position={[0.24, 0, 3.6]} 
    />
    <Box 
      scale={-0.1} 
      position={[0.175, 0.107, 0.357]} 
    />
    <Sphere 
      scale={0.2} 
      position={[2, 0.2, 2.8]} 
    />
    <ETH 
      scale={0.2}
      position={[1, 0.097, 2]}
      rotation={[0, 0, 0]}
    />
    <ReactModel 
      position={[-1.4, 0, 3]} 
      scale={0.04} 
      rotation={[0.967, -0.888, 0.485]}
    />
    <TS 
      position={[1, 0, 3.4]} 
      scale={0.04} 
      rotation={[1.1, 0, -0.24]}
    />
    <JS 
      position={[-0.162, 0.111, 3.6]}
      rotation={[0.836, 0, 0.2]}
      scale={0.013}
    />
    <ContactShadows frames={1} position={[0, -0.5, 0]} blur={1} opacity={0.75} />
    <ContactShadows frames={1} position={[0, -0.5, 0]} blur={3} color="orange" />
  </Canvas>
)
