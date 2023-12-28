import React from 'react'
import { View, Text, BilingualText } from '@atoms'
import { colors } from '@styles'

const engTxt = 'Some projects I have worked on, and some I am currently working on'
const japTxt = '私が取り組んできたプロジェクトと、現在取り組んでいるプロジェクト'

const Projects = () => (
  <View 
    w='100vw'
    h='100vh'
    as='section'
    pt='12rem'
    style={{ backgroundColor: colors.background }}
  >
    <View mb='9rem' cross='center'>
      <Text as='h2'>PROJECTS</Text>
      <BilingualText
        txtBack={japTxt}
        txtFront={engTxt}
        maxWidth='597px'
      />
    </View>
  </View>
)

export { Projects }
