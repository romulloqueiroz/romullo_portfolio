import React from 'react'
import { useGLTF } from '@react-three/drei'


export function Model(props) {
  const { nodes, materials } = useGLTF('/composition.glb')
  return (
      <group {...props} dispose={null}>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ETH.geometry}
          material={materials['Scene_-_Root']}
          position={[0.185, 0.097, -0.041]}
          rotation={[-0.318, -0.673, -0.426]}
          scale={0.078}
        />
        <group
          position={[-0.144, 0.062, 0.054]}
          rotation={[0.745, -0.402, 0.346]}
          scale={0.006}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.figma.geometry}
            material={materials['back.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.figma_1.geometry}
            material={materials['logo.008']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.figma_2.geometry}
            material={materials['logo_1.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.figma_3.geometry}
            material={materials['logo_1_0.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.figma_4.geometry}
            material={materials['logo_2.001']}
          />
        </group>


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
