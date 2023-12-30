import { View } from '@atoms'
import { useMousePosition } from '@hooks'
import { Front } from './Front'
import { Mask } from './Mask'
import { styled } from 'styled-components'
import { colors } from '@styles'
import { motion } from 'framer-motion'

const Cursor = styled(motion.div)`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${colors.blue};
`

const Hero = () => {
  const { xNumber, yNumber } = useMousePosition()
  return (
    <View
      cross='center'
      mt='10vh'
      absolute
      x='50%'
      y='20%'
      w='92%'
      style={{ transform: 'translate(-50%, -50%)' }}
      h='60vh'
    >
      <Mask x={xNumber} y={yNumber} />
      <Front />
    </View>
  )
}

export const Overlay = () => {
  const { xSmooth, ySmooth } = useMousePosition()
  return (
    <View
      absolute
      w='100vw'
      h='100vh'
      cross='center'
      style={{ backdropFilter: 'blur(1.2px)' }}
    >
      <Cursor style={{ left: xSmooth, top: ySmooth }} />
      <Hero />
    </View>
  )
}
