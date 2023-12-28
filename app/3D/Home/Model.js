import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model() {
  const { nodes, materials } = useGLTF("/portfolio.glb");
  return (
    <group dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.react_back.geometry}
          material={materials["back.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.react_logo.geometry}
          material={materials["logo.005"]}
          position={[-0.003, 0.648, 0.006]}
        />
      </group>
      <group
        position={[0.321, 0.035, 0.023]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back001.geometry}
          material={materials["back.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO001.geometry}
          material={materials["logo.006"]}
          position={[0.534, 0.644, 0.996]}
        />
      </group>
      <group
        position={[-0.215, 0.176, -0.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back.geometry}
          material={materials["back.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO.geometry}
          material={materials["logo.007"]}
          position={[0.534, 0.4, 0.996]}
        />
      </group>
      <group
        position={[0.273, 0.248, -0.145]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back002.geometry}
          material={materials["back.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO002.geometry}
          material={materials["logo.008"]}
          position={[-0.003, 0.618, -1.648]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO_1.geometry}
          material={materials["logo_1.002"]}
          position={[0.826, 0.654, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO_2.geometry}
          material={materials["logo_1_0.001"]}
          position={[-0.831, 0.689, 0.009]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO_3.geometry}
          material={materials["logo_2.001"]}
          position={[-0.831, 0.725, 1.666]}
        />
      </group>
      <group
        position={[0.005, 0.228, 0.002]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.back003.geometry}
          material={materials["back.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO003.geometry}
          material={materials["logo.009"]}
          position={[0.899, 0.649, 0.334]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LOGO_1001.geometry}
          material={materials["logo_1.003"]}
          position={[0.031, 0.649, 0.025]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.217"]}
        position={[-0.132, 0.339, -0.282]}
        rotation={[Math.PI / 2, 0.237, 0]}
        scale={0.124}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bitcoin.geometry}
        material={materials["black.004"]}
        position={[-0.13, 0.337, -0.284]}
        scale={0.047}
      />
      <group
        position={[0.38, 0.379, -0.335]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.049}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.EhiriumLogo__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, -125.475, 13.727]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/portfolio.glb");
