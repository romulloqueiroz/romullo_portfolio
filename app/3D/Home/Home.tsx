'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { Testando } from './Testando'

export const Home3D = () => {

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  // const smoothMouse = {
  //   x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
  //   y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
  // }

  const manageMouse = (e: { clientX: any, clientY: any }) => {
    const { innerWidth, innerHeight } = window
    const { clientX, clientY } = e
    const x = clientX / innerWidth
    const y = clientY / innerHeight
    mouse.x.set(x)
    mouse.y.set(y)
  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouse)
    return () => window.removeEventListener("mousemove", manageMouse)
  }, [])

  return (
    <>
      <Testando />
    </>
  )
}
