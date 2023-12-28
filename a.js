import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  useGLTF,
  RandomizedLight,
  PerformanceMonitor,
  AccumulativeShadows,
  MeshTransmissionMaterial
} from '@react-three/drei'

export default function App() {
  const [perfSucks, degrade] = useState(false)
  return (
    <Canvas
      shadows
      dpr={[1, perfSucks ? 1.5 : 2]}
      eventPrefix="client"
      camera={{ position: [20, 0.9, 20], fov: 26 }}>
      {/** PerfMon will detect performance issues */}
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <color attach="background" args={['#f0f0f0']} />
      <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
        <Scene />
        <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.8} color="red" scale={20} position={[0, -0.005, 0]}>
          <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
        </AccumulativeShadows>
      </group>
    </Canvas>
  )
}

function Scene(props) {
  const { nodes, materials } = useGLTF('/glass-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow rotation={[0, -0.5, 0]} geometry={nodes.cake.geometry} material={materials.FruitCakeSlice_u1_v1} />
      <mesh castShadow receiveShadow geometry={nodes.glass.geometry}>
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.1}
          thickness={0.05}
          chromaticAberration={0.05}
          anisotropicBlur={1}
          clearcoat={1}
          clearcoatRoughness={1}
          envMapIntensity={2}
        />
      </mesh>
    </group>
  )
}
