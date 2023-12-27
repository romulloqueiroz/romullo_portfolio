import React from 'react'
import { useGLTF, Float } from '@react-three/drei'
import { useTransform } from 'framer-motion'
import { motion } from 'framer-motion-3d'

export function Model({ mouse }) {
  const { nodes } = useGLTF('/portfolio.glb')
  return (
    <Float>
      <group dispose={null}>
          <group position={[0, 0, 0]}>
            <Mesh node={nodes.react_mesh} mouse={mouse} multiplier={2.4} />
            <Mesh node={nodes.react_mesh_1} mouse={mouse} multiplier={2.4} />
          </group>

          <group position={[20, 0, 0]}>
            <Mesh node={nodes.ts_mesh} mouse={mouse} multiplier={1.8} />
            <Mesh node={nodes.ts_mesh_1} mouse={mouse} multiplier={1.8} />
          </group>

          <group position={[20, 0, 20]}>
            <Mesh node={nodes.js_mesh} mouse={mouse} multiplier={1.2} />
            <Mesh node={nodes.js_mesh_1} mouse={mouse} multiplier={1.2} />
          </group>

          <group position={[40, 0, 20]}>
            <Mesh node={nodes.figma_mesh} mouse={mouse} multiplier={1.6} />
            <Mesh node={nodes.figma_mesh_1} mouse={mouse} multiplier={1.6} />
            <Mesh node={nodes.figma_mesh_2} mouse={mouse} multiplier={1.6} />
            <Mesh node={nodes.figma_mesh_3} mouse={mouse} multiplier={1.6} />
            <Mesh node={nodes.figma_mesh_4} mouse={mouse} multiplier={1.6} />
          </group>

          <group position={[40, 0, 0]}>
            <Mesh node={nodes.blender_mesh} mouse={mouse} multiplier={1.5} />
            <Mesh node={nodes.blender_mesh_1} mouse={mouse} multiplier={1.5} />
            <Mesh node={nodes.blender_mesh_2} mouse={mouse} multiplier={1.5} />
          </group>
      </group>
    </Float>
  )
}

const Mesh = ({ node, mouse, multiplier }) => {
  const { castShadow, receiveShadow, geometry, material, position, rotation, scale } = node
  const a = multiplier / 2

  const rotationX = useTransform(mouse.x, [0,1], [rotation.x - a, rotation.x + a])
  const rotationY = useTransform(mouse.y, [0,1], [rotation.y - a, rotation.y + a])
  const positionX = useTransform(mouse.x, [0,1], [position.x - multiplier * 2, position.x + multiplier * 2])
  const positionY = useTransform(mouse.y, [0,1], [position.y + multiplier * 2, position.y - multiplier * 2])
  return (
    <motion.mesh
      castShadow={castShadow}
      receiveShadow={receiveShadow}
      geometry={geometry}
      material={material}
      position={position}
      rotation={rotation}
      scale={scale}
      rotation-y={rotationX}
      rotation-x={rotationY}
      position-x={positionX}
      position-y={positionY}
    />
  )
}

useGLTF.preload('/portfolio.glb')
