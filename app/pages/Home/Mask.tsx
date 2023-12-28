import styled, { keyframes } from 'styled-components'
import React, { useState } from 'react'  
import { motion } from 'framer-motion'
import { Text } from '@atoms'
import { colors } from '@styles'

const generateFlicker = () => {
  const keyframes = `
    0%, 100% {
      transform: rotate(0deg);
    }
    25%, 75% {
      transform: rotate(${Math.random() * 5 - 2}deg);
    }
    50% {
      transform: rotate(${Math.random() * 5 - 2}deg);
    }
  `

  return keyframes
}

const flicker = keyframes`${generateFlicker()}`;


const StyledMask = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  mask-image: url('/stain.png');
  mask-repeat: no-repeat;
  background: ${colors.blue};
  position: absolute;
  animation: ${flicker} 6s infinite;
  transform-origin: center;
`

interface MaskProps {
  x: number | null
  y: number | null
}

export const Mask: React.FC<MaskProps> = ({ x, y }) => {
  const [isHovered, setIsHovered] = useState(false)
  const size = isHovered ? 280 : 0
  const xPos = x !== null ? x : 0
  const yPos = y !== null ? y : 0
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
        今日は、ロムロです。
      </Text>
    </StyledMask>
  )
}
