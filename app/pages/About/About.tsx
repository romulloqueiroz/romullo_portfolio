import { View, Text } from '@atoms'
import { BilingualText, MaskedText } from '@molecules'

const engTxt = "I'm a software engineer based in Tokyo, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between."

const japTxt = '私は東京を拠点とするソフトウェアエンジニアで、優れたウェブサイト、アプリケーション、そしてその間のすべての構築（そして時折デザイン）を専門としている。'

const txtHidden = '私について'
const txtVisible = 'ABOUT ME'

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
      absolute
      y='10vh'
      w='100%'
      cross='center'
    >
      <MaskedText 
        type='h2' 
        txtHidden={txtHidden}
        txtVisible={txtVisible}
        color='orange'
      />
    </View>
  </View>
)

export { About }
