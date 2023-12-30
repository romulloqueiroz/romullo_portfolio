import { View, Text } from '@atoms'
import { BilingualText } from '@molecules'

const engTxt = "I'm a software engineer based in Tokyo, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between."

const japTxt = '私は東京を拠点とするソフトウェアエンジニアで、優れたウェブサイト、アプリケーション、そしてその間のすべての構築（そして時折デザイン）を専門としている。'

const About = () => (
  <View 
    w='100vw'
    h='100vh'
    as='section'
    pt='12rem'
    cross='center'
  >
    <View mb='9rem' cross='center'>
      <Text as='h2' mb='3.5rem'>
        ABOUT ME
      </Text>
      <BilingualText
        txtBack={japTxt}
        txtFront={engTxt}
        maxWidth='800px'
      />
    </View>
  </View>
)

export { About }
