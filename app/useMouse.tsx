import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

export const useMouse = () => {
  const cursorSize = 20

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  }

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e
    mouse.x.set(clientX - cursorSize / 2)
    mouse.y.set(clientY - cursorSize / 2)
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove)
    return () => { window.removeEventListener('mousemove', manageMouseMove); }
  })

  return {
    x: mouse.x,
    y: mouse.y,
    smoothX: smoothMouse.x,
    smoothY: smoothMouse.y,
  }
}
