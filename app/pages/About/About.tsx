import { View, Text } from '@atoms'
import { BilingualText, MaskedText } from '@molecules'

const engTxt = "I'm a software engineer based in Tokyo, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between."

const japTxt = '私は東京を拠点とするソフトウェアエンジニアで、優れたウェブサイト、アプリケーション、そしてその間のすべての構築（そして時折デザイン）を専門としている。'

const txtBack = '私について'
const txtFront = 'ABOUT ME'

const About = () => (
  <View 
    w='100vw'
    h='100vh'
    as='section'
    cross='center'
  >
    <View mv={140} />
    <BilingualText
      txtBack={japTxt}
      txtFront={engTxt}
      maxWidth='800px'
    />
    <View
      mt='10vh'
      absolute
      x='50%'
      y='120vh'
      w='100%'
      cross='center'
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <MaskedText 
        type='h2' 
        txtBack={txtBack}
        txtFront={txtFront}
        color='orange'
      />
    </View>
  </View>
)

export { About }
