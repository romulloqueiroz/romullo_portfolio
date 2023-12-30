import { useState, useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

const useMousePosition = () => {
  const [mouseNumber, setMouse] = useState({ x: 0, y: 0 })
  const cursorSize = 20

  const mouse = {
    x: useMotionValue(-cursorSize / 2),
    y: useMotionValue(-cursorSize / 2),
  }

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 300, damping: 20, mass: 0.5 }),
    y: useSpring(mouse.y, { stiffness: 300, damping: 20, mass: 0.5 }),
  }

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e
    mouse.x.set(clientX - cursorSize / 2)
    mouse.y.set(clientY - cursorSize / 2)
    setMouse({ x: clientX, y: clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove)
    return () => window.removeEventListener('mousemove', manageMouseMove)
  }, [])

  return { 
    x: mouse.x, 
    y: mouse.y, 
    xNumber: mouseNumber.x, 
    yNumber: mouseNumber.y,
    xSmooth: smoothMouse.x,
    ySmooth: smoothMouse.y
  }
}

export { useMousePosition }
