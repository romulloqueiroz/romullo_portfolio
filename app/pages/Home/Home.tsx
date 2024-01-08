import React from 'react'
import { View } from '@atoms'
import { MaskedText } from '@molecules'
import { Home3D } from '@3D'
import { cursorColorState } from '@state'
import { useRecoilState } from 'recoil'

export const Home = () => {
  const [_, setCursorColor] = useRecoilState(cursorColorState)
  return (
    <View 
      w='100vw'
      h='100vh'
      main='center'
      cross='center'
      as='main'
      onMouseEnter={() => setCursorColor('blue')}
    >
      <Home3D />
      <View
        absolute
        y='4vh'
        w='100%'
        cross='center'
      >
        <MaskedText 
          type='h1' 
          txtHidden='こんにちは、ロムロです'
          txtVisible='HELLO, I’M ROMULLO'
          color='blue'
        />
      </View>
    </View>
  )
}
