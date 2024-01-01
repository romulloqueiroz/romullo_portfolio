import { View } from '@atoms'
import { Hero, LinkMenu } from '@organisms'

export const Overlay = () => (
  <View
    absolute
    w='100vw'
    h='100vh'
    cross='center'
    style={{ 
      backdropFilter: 'blur(1.2px)',
      border: '2px solid orangered', 
    }}
  >
    <LinkMenu />
    <Hero />
  </View>
)
