import { View } from '@atoms'
import { MaskedText } from '@molecules'

export const Hero = () => (
  <View
    absolute
    y='4vh'
    w='100%'
    cross='center'
  >
    <MaskedText 
      type='h1' 
      txtHidden='こんにちは、ロムロです。'
      txtVisible='HELLO, I’M ROMULLO'
      color='blue'
    />
  </View>
)
