import { colors } from '@styles'
import { View, Text } from '@atoms'
import { BilingualText, MaskedText } from '@molecules'

const engTxt = 'Some projects I have worked on, and some I am currently working on'
const japTxt = '私が取り組んできたプロジェクトと、現在取り組んでいるプロジェクト'

const txtHidden = 'プロジェクト'
const txtVisible = 'PROJECTS'

const Projects = () => (
  <View 
    w='100vw'
    h='100vh'
    as='section'
    cross='center'
    style={{ 
      backgroundColor: colors.background,
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

export { Projects }
