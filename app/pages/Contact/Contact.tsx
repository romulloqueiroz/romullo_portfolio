import React from 'react'
import { View, Text, BilingualText } from '@atoms'

const backgroundUrl = 'https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg'

const engTxt = 'Feel free to contact me for any work or suggestions.'
const japTxt = '仕事や提案についてはお気軽にご連絡ください'

const Contact = () => (
  <View 
    w='100vw'
    h='100vh'
    as='section'
    pt='12rem'
    style={{
      background: `linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)), url(${backgroundUrl})`,
    }}
  >
    <View mb='9rem' cross='center'>
      <Text as='h2'>CONTACT</Text>
      <BilingualText
        txtBack={japTxt}
        txtFront={engTxt}
        maxWidth='447px'
      />
    </View>
  </View>
)

export { Contact }
