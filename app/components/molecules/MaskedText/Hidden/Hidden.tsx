import { useState } from 'react'
import { Text } from '@atoms'
import { StyledHidden } from './Hidden.styles'
import { HiddenProps } from './Hidden.types'

export const Hidden: React.FC<HiddenProps> = ({ color, type, txtHidden, x, y }) => {
  const [isHovered, setIsHovered] = useState(false)
  const size = isHovered ? (type === 'h1' ? 280 : 200) : 0
  const xPos = x !== null ? x : 0
  const yPos = y !== null ? y : 0
  return (
    <StyledHidden
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
        {txtHidden}
      </Text>
    </StyledHidden>
  )
}
