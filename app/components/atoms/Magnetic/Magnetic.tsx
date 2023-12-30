import { useRef, useState, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { MagneticProps } from './Magnetic.types'

export const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    if (ref.current) {
      const { height, width, left, top } = ref.current.getBoundingClientRect()
      const middleX = clientX - (left + width / 2)
      const middleY = clientY - (top + height / 2)
      setPosition({ x: middleX * 0.1, y: middleY * 0.1 })
    }
  }

  const reset = () => { setPosition({ x: 0, y: 0 }) }

  const { x, y } = position
  
  return (
    <motion.div
      style={{ 
        position: 'relative',
        // top: 10,
        // left: 10,
      }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 350, damping: 5, mass: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
