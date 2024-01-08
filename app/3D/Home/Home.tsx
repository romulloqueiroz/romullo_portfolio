'use client'
// import { Testando } from './Testando'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Grid, OrbitControls, Outlines, PresentationControls } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import { View } from '@atoms'
import { colors } from '@styles'

const Ground = () => {
  const gridConfig = {
    cellSize: 0.5,
    cellThickness: 0.5,
    cellColor: colors.card,
    sectionSize: 3,
    sectionThickness: 1,
    sectionColor: colors.purple,
    fadeDistance: 30,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true
  }
  return <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
}

export const Home3D = () => {
  return (
    <Canvas camera={{ position: [0., 1.4, 5], fov: 60 }} >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 0]} intensity={4} />
      {/* <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
      /> */}
      <Ground />
    </Canvas>
  )
}
