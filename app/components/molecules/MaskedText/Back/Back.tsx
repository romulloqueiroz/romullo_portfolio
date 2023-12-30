import React, { useState } from 'react'
import { Text } from '@atoms'
import { useMousePosition } from '@hooks'
import { StyledBack } from './Back.styles'
import { BackProps } from './Back.types'

export const Back: React.FC<BackProps> = ({ color, type, txtBack }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { xNumber, yNumber } = useMousePosition()

  const size = isHovered ? 280 : 0
  const xPos = xNumber !== null ? xNumber : 0
  const yPos = yNumber !== null ? yNumber : 0
  return (
    <StyledBack
      animate={{
        WebkitMaskPosition: `${xPos - (size / 2)}px ${yPos - (size / 2)}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      color={color}
    >
      <Text
        as={type}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ cursor: 'none' }}
      >
        {txtBack}
      </Text>
    </StyledBack>
  )
}
