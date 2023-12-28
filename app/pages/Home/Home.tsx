import React from 'react'
import { View, Text, Floating } from '@atoms'

const backgroundUrl = 'https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg'

const Overlay = () => (
  <View
    absolute
    w='100vw'
    h='100vh'
    // main='center'
    // cross='center'
    style={{
      // background: 'rgba(0,0,0,0.4)',
      // backdropFilter: 'blur(1px)',
      color: 'white',
      fontSize: '3rem',
      // fontWeight: 'bold',
    }}
  >
    <Text as='h1'>
      HELLO
    </Text>
  </View>
)

export const Home = () => {
  return (
    <View 
      w='100vw'
      h='100vh'
      main='center'
      cross='center'
      as='main'
      style={{
        background: `linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(${backgroundUrl})`,
      }}
    >
      {/* <h1 className={styles.title}>SOMETHING</h1> */}
      <Floating />
      <Overlay />
    </View>
  )
}
