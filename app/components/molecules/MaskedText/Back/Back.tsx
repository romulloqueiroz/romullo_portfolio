import React, { useState } from 'react'
import { Text } from '@atoms'
import { useMousePosition } from '@hooks'
import { StyledBack } from './Back.styles'
import { BackProps } from './Back.types'

export const Back: React.FC<BackProps> = ({ color, type, txtBack, x, y }) => {
  const [isHovered, setIsHovered] = useState(false)

  const size = isHovered ? (type === 'h1' ? 280 : 200) : 0
  const xPos = x !== null ? x : 0
  const yPos = y !== null ? y : 0
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
