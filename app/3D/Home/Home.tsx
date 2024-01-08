'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { 
  Box,
  Ground,
  ReactModel,
  Sphere,
  TS,
} from './components'
import { Model } from './Composition'

export const Home3D = () => (
  <Canvas camera={{ position: [0., 1.4, 5], fov: 75 }} >
    <ambientLight intensity={0.4} />
    <pointLight position={[5, 5, 0]} intensity={100} />
    <OrbitControls 
      enableZoom={false} 
      enablePan={false} 
    />
    <Box 
      scale={0.8} 
      position={[-3.8, 0.7, 0]} 
    />
    <Sphere 
      scale={0.2} 
      position={[2.4, 0.2, 2.8]} 
    />
    <Model />
    <ReactModel 
      position={[-0.8, 0.28, 3]} 
      scale={0.04} 
      rotation={[0.967, -0.888, 0.485]}
    />
    <TS 
      position={[1, 0.28, 3.4]} 
      scale={0.04} 
      rotation={[1.1, 0, 0]}
    />
    <Ground />
  </Canvas>
)
