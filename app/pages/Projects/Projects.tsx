import { colors } from '@styles'
import { View, Text } from '@atoms'
import { BilingualText, MaskedText } from '@molecules'

const engTxt = 'Some projects I have worked on, and some I am currently working on'
const japTxt = '私が取り組んできたプロジェクトと、現在取り組んでいるプロジェクト'

const txtBack = 'プロジェクト'
const txtFront = 'PROJECTS'

const Projects = () => (
  <View 
    w='100vw'
    h='100vh'
    as='section'
    cross='center'
    style={{ 
      backgroundColor: colors.background,
      border: `2px solid ${colors.green}`,
      // position: 'relative',
    }}
  >
    <View mv={140} />
    <BilingualText
      txtBack={japTxt}
      txtFront={engTxt}
      maxWidth='597px'
    />
    <View
      mt='10vh'
      absolute
      x='50%'
      y='0vh'
      w='100%'
      cross='center'
      style={{ 
        transform: 'translate(-50%, -50%)',
        border: `2px solid ${colors.orange}`,
      }}
    >
      <MaskedText 
        type='h2' 
        txtBack={txtBack}
        txtFront={txtFront}
        color='green'
      />
    </View>
  </View>
)

export { Projects }
