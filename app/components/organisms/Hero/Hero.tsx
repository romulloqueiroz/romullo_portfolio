import { View } from '@atoms'
import { MaskedText } from '@molecules'

export const Hero = () => (
  <View
    mt='10vh'
    absolute
    x='50%'
    y='20%'
    w='100%'
    cross='center'
    style={{ 
      transform: 'translate(-50%, -50%)',
      border: '1px solid orangered',
    }}
  >
    <MaskedText 
      type='h1' 
      txtBack='こんにちは、ロムロです。'
      txtFront='HELLO, I’M ROMULLO'
      color='blue'
    />
  </View>
)
