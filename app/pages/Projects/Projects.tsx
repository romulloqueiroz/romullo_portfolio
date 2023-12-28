import React from 'react'
import { View, Text } from '@atoms'

const Projects = () => {
  return (
    <View 
      w='100vw'
      h='100vh'
      as='section'
      pt='12rem'
      style={{ border: '2px solid green' }}
    >
      <View mb='9rem' cross='center'>
        <Text as='h2'>PROJECTS</Text>
        <Text center style={{ maxWidth: '80rem' }}>
          Some projects I have worked on, and some I am currently working on
        </Text>
      </View>
    </View>
  )
}

export { Projects }
