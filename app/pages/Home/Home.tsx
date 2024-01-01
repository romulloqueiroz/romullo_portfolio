import React from 'react'
import { View } from '@atoms'
import { Home3D } from '@3D'
import { Overlay } from './Overlay'

const backgroundUrl = 'https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg'

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
    {/* <Home3D /> */}
    <Overlay />
  </View>
)
