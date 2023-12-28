import React from 'react'
import { View, Text } from '@atoms'

const Contact = () => {
  return (
    <View 
      w='100vw'
      h='100vh'
      as='section'
      pt='12rem'
      style={{ border: '2px solid blue' }}
    >
      <View mb='9rem' cross='center'>
        <Text as='h2'>CONTACT</Text>
        <Text center style={{ maxWidth: '80rem' }}>
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </Text>
      </View>
    </View>
  )
}

export { Contact }
