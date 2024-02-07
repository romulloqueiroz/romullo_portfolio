import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/composition.glb')
  return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.002']}
          position={[0.175, 0.107, 0.357]}
          rotation={[-0.53, 0.431, 0.942]}
          scale={-0.058}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[-0.13, 0.085, 0.264]}
          rotation={[-0.405, 0, -0.701]}
          scale={[0.013, 0.073, 0.013]}
        />
      </group>
  )
}

useGLTF.preload('/composition.glb')
