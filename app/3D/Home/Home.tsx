'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import { 
  Bitcoin,
  Blender,
  Box,
  Ground,
  ReactModel,
  Sphere,
  TS,
  JS,
} from './components'

import { Model } from './Composition'

export const Home3D = () => (
  <Canvas camera={{ position: [0., 1.4, 5], fov: 75 }} >
    <ambientLight intensity={0.4} />
    <pointLight position={[5, 5, 0]} intensity={100} />
    <OrbitControls 
      enableZoom={false} 
      enablePan={false} 
      minPolarAngle={0} 
      maxPolarAngle={Math.PI / 2.1}
    />
    <Bitcoin 
      scale={0.14}
      rotation={[-0.441, 0.751, 0.605]}
      position={[2, 0.6, 2.4]}
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
    <Sphere 
      scale={0.2} 
      position={[2, 0.2, 2.8]} 
    />
    <Model />
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
