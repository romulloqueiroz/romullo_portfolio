import React from 'react'
import { View, Text } from '@atoms'
import { Home3D } from '@3D'

const backgroundUrl = 'https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg'

const Overlay = () => (
  <View
    absolute
    w='100vw'
    h='100vh'
    cross='center'
    style={{ backdropFilter: 'blur(1.2px)' }}
  >
    <View 
      cross='center'
      mt='10vh'
      absolute
      x='50%'
      y='20%'
      w='92%'
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <Text as='h1'>
        HELLO, I'M ROMULLO
      </Text>
      <Text center style={{ maxWidth: '82rem' }}>
        I'm a software engineer based in Tokyo, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
      </Text>
    </View>
  </View>
)

export const Home = () => (
  <View 
    w='100vw'
    h='100vh'
    main='center'
    cross='center'
    as='main'
    style={{
      background: `linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)), url(${backgroundUrl})`,
    }}
  >
    <Home3D />
    <Overlay />
  </View>
)
