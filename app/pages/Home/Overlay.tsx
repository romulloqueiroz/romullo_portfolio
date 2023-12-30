import { View } from '@atoms'
import { Hero, LinkMenu } from '@organisms'

export const Overlay = () => (
  <View
    absolute
    w='100vw'
    h='100vh'
    cross='center'
    style={{ backdropFilter: 'blur(1.2px)' }}
  >
    <LinkMenu />
    <Hero />
  </View>
)
