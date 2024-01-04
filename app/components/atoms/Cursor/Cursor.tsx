'use client'
import { useEffect, useState, useRef } from 'react'
import { useMotionValue, useSpring, transform, animate } from 'framer-motion'
import { StyledCursor } from './Cursor.styles'
import { CursorProps, TransformProps } from './Cursor.types'

const Cursor: React.FC<CursorProps> = ({stickyElement}) => {
  const cursor = useRef(null)
  const cursorSize = stickyElement ? 60 : 15

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1)
  }

  const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const rotate = (distance: { x: number, y: number }) => {
    const angle = Math.atan2(distance.y, distance.x)
    animate(cursor.current, { rotate: `${angle}rad` }, {duration: 0})
  }

  const manageMouseMove = (e: { clientX: number, clientY: number }) => {
    const { clientX, clientY } = e
  
    if (stickyElement) {
      const { left, top, height, width } = stickyElement.rect
    
      // center position of the stickyElement
      const center = { x: left + width / 2, y: top + height / 2 }
    
      // distance between the mouse pointer and the center of the custom cursor
      const distance = { x: clientX - center.x, y: clientY - center.y }
    
      // rotate
      rotate(distance)
    
      // stretch based on the distance
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y))
      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3])
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8])
      scale.x.set(newScaleX)
      scale.y.set(newScaleY)
    
      // move mouse to center of stickyElement + slightly move it towards the mouse pointer
      mouse.x.set((center.x - cursorSize / 2) + (distance.x * 0.1))
      mouse.y.set((center.y - cursorSize / 2) + (distance.y * 0.1))
    } else {
      // move custom cursor to center of stickyElement
      mouse.x.set(clientX - cursorSize / 2)
      mouse.y.set(clientY - cursorSize / 2)
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove)
    return () => window.removeEventListener('mousemove', manageMouseMove)
  }, [stickyElement])

  const template = ({rotate, scaleX, scaleY}: TransformProps) => `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})` 

  return (
    <StyledCursor 
      transformTemplate={template}
      style={{
        left: smoothMouse.x, 
        top: smoothMouse.y,
        scaleX: scale.x,
        scaleY: scale.y,
      }} 
      animate={{
        width: cursorSize,
        height: cursorSize
      }}
      ref={cursor}
    />
  )
}

export { Cursor }
