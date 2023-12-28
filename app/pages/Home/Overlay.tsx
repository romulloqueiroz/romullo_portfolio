import { View, Text } from '@atoms'
import { useMousePosition } from '@hooks'
import { Front } from './Front'
import { Mask } from './Mask'

const Hero = () => {
  const { x, y } = useMousePosition()
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
      <Mask x={x} y={y} />
      <Front />
    </View>
  )
}

export const Overlay = () => (
  <View
    absolute
    w='100vw'
    h='100vh'
    cross='center'
    style={{ backdropFilter: 'blur(1.2px)' }}
  >
    <Hero />
  </View>
)
