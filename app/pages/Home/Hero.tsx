import { View } from '@atoms'
import { useMousePosition } from '@hooks'
import { Front } from './Front'
import { Mask } from './Mask'

export const Hero = () => {
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
