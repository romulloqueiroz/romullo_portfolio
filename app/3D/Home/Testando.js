import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { 
  Center, 
  AccumulativeShadows, 
  RandomizedLight, 
  Environment, 
  useGLTF,
} from '@react-three/drei'
import { Model } from './Composition'

const Cube = () => (
  <Center top position={[2.5, 0, 1]}>
    <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color='indianred' />
    </mesh>
  </Center>
)

const Sphere = () => (
  <Center top position={[-2, 0, 1]}>
    <mesh castShadow>
      <sphereGeometry args={[0.25, 64, 64]} />
      <meshStandardMaterial color='lightblue' />
    </mesh>
  </Center>
)

const Testando = () => {
  return (
    <Canvas shadows camera={{ position: [4, 2.5, 8], fov: 35 }}>
      <group position={[0, -0.5, 0]}>
        <Sphere />
        <Cube />

        <Center 
          top 
          position={[0.4, 0, 1]}
          scale={3}
        >
          <Model />
        </Center>

        <AccumulativeShadows temporal frames={100} color='#f0f0f0' colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2} scale={12}>
          <RandomizedLight intensity={Math.PI} amount={8} radius={4} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
        </AccumulativeShadows>
      </group>
      <Environment preset='city' />
    </Canvas>
  )
}

export { Testando }
