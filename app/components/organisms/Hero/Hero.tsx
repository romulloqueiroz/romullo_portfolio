import { View } from '@atoms'
import { Mask } from '@molecules'

export const Hero = () => (
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
    <Mask />
  </View>
)
