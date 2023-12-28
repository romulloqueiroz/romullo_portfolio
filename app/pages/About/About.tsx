import React from 'react'
import { View, Text } from '@atoms'

const About = () => {
  return (
    <View 
      w='100vw'
      h='100vh'
      as='section'
      pt='12rem'
      style={{ border: '2px solid orangered' }}
    >
      <View 
        mb='9rem'
        cross='center'
      >
        <Text as='h2'>ABOUT ME</Text>
        <Text center style={{ maxWidth: '80rem' }}>
          I'm a software engineer based in Tokyo, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
        </Text>
      </View>
    </View>
  )
}

export { About }
