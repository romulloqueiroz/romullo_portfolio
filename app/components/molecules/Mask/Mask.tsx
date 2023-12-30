import { useState } from 'react'  
import { Text } from '@atoms'
import { useMousePosition } from '@hooks'
import { StyledMask } from './Mask.styles'

export const Mask = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { xNumber, yNumber } = useMousePosition()

  const size = isHovered ? 280 : 0
  const xPos = xNumber !== null ? xNumber : 0
  const yPos = yNumber !== null ? yNumber : 0
  return (
    <StyledMask
      animate={{
        WebkitMaskPosition: `${xPos - (size/2)}px ${yPos - (size/2)}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5}}
    >
      <Text 
        as='h1' 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
        style={{ cursor: 'none' }}
      >
        こんにちは、ロムロです。
      </Text>
    </StyledMask>
  )
}
