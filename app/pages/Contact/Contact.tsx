import React from 'react'
import { View, Text, BilingualText } from '@atoms'

const engTxt = 'Feel free to contact me for any work or suggestions.'
const japTxt = '仕事や提案についてはお気軽にご連絡ください'

const Contact = () => {
  return (
    <View 
      w='100vw'
      h='100vh'
      as='section'
      pt='12rem'
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
}

export { Contact }
