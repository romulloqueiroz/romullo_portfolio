import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number | null, y: number | null }>({ x: null, y: null })

  const updateMousePosition = (e: { clientX: number, clientY: number }) => setMousePosition({ x: e.clientX, y: e.clientY })

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return mousePosition
}

export { useMousePosition }
