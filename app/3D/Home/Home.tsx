'use client'
// import { Testando } from './Testando'
import { Canvas, useThree } from '@react-three/fiber'
import { 
  OrbitControls, 
  PresentationControls, 
  useGLTF, 
  useAnimations, 
  Environment,
} from '@react-three/drei'
import { useEffect, useState } from 'react'
import { useControls } from 'leva'
import { Box } from './Box'
import { Ground } from './Ground'
import { Sphere } from './Sphere'

export const Home3D = () => (
  <Canvas camera={{ position: [0., 1.4, 5], fov: 75 }} >
    <ambientLight intensity={0.4} />
    <pointLight position={[5, 5, 0]} intensity={4} />
    <OrbitControls 
      enableZoom={false} 
      enablePan={false} 
    />
    <Box scale={0.8} position={[-3.8, 0.7, 0]} />
    <Sphere scale={0.2} position={[2.4, 0.2, 2.8]} />
    <Ground />
  </Canvas>
)
