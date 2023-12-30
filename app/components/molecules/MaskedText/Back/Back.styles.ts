import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { ColorType, colors } from '@styles'

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

const flicker = keyframes`${generateFlicker()}`

export const StyledBack = styled(motion.div)<{ color: keyof ColorType }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  mask-image: url('/stain.png');
  mask-repeat: no-repeat;
  background: ${({ color }: { color: keyof ColorType }) => colors[color]};
  position: absolute;
  animation: ${flicker} 6s infinite;
  transform-origin: center;
`
