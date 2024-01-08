import { View } from '@atoms'
import { BilingualText, MaskedText } from '@molecules'
import { cursorColorState } from '@state'
import { useRecoilState } from 'recoil'

const engTxt = 'Some projects I have worked on, and some I am currently working on'
const japTxt = '私が取り組んできたプロジェクトと、現在取り組んでいるプロジェクト'

const txtHidden = 'プロジェクト'
const txtVisible = 'PROJECTS'

const Projects = () => {
  const [_, setCursorColor] = useRecoilState(cursorColorState)
  return (
    <View 
      w='100vw'
      h='100vh'
      as='section'
      cross='center'
      onMouseEnter={() => setCursorColor('green')}
      style={{
        border: '1px solid green'
      }}
    >
      <View mv={140} />
      <BilingualText
        txtBack={japTxt}
        txtFront={engTxt}
        maxWidth='597px'
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
          color='green'
        />
      </View>
    </View>
  )
}

export { Projects }
