import { View, Text } from '@atoms'
import { BilingualText, MaskedText } from '@molecules'
import { cursorColorState } from '@state'
import { useRecoilState } from 'recoil'

const engTxt = "I'm a software engineer based in Tokyo, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between."

const japTxt = '私は東京を拠点とするソフトウェアエンジニアで、優れたウェブサイト、アプリケーション、その間のすべての構築（そして時折デザイン）を専門としている。'

const txtHidden = '私について'
const txtVisible = 'ABOUT ME'

const About = () => {
  const [_, setCursorColor] = useRecoilState(cursorColorState)
  return (
    <View 
      w='100vw'
      h='100vh'
      as='section'
      cross='center'
      onMouseEnter={() => setCursorColor('orange')}
      style={{
        border: '1px solid orange'
      }}
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
}

export { About }
