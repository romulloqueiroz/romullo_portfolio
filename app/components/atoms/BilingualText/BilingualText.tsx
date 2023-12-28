'use client'
import { MotionValue, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import { Word } from './Word/Word'
import { View } from '../View/View'
import { Text } from '../Text/Text'
import { BilingualTextProps } from './BilingualText.types'

export const BilingualText: React.FC<BilingualTextProps> = ({ txtBack, txtFront, maxWidth }) => {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.25']
  })

  return (
    <View 
      ref={containerRef}
      w={maxWidth}
      style={{ position: 'relative' }}
    >
      <Text center>
        {[txtBack.split(' '), txtFront.split(' ')].map((words, index) => (
          <Text 
            key={index}
            as='span'
            style={{ 
              position: 'absolute',
              left: 0,
              flexWrap: 'wrap',
            }}
          >
            {mapWords(words, index === 0, scrollYProgress)}
          </Text>
        ))}
      </Text>
    </View>
  )
}

const mapWords = (words: string[], isBack: boolean, progress: MotionValue<number>) => {
  const totalChars = words.reduce((total, word) => total + word.length, 0)
  let charIdx = 0

  return words.map((word, i) => {
    const chars = word.split('')
    const wordStart = charIdx / totalChars
    const wordEnd = (charIdx + chars.length) / totalChars

    charIdx += chars.length

    return (
      <Word
        key={i}
        progress={progress}
        range={[wordStart, wordEnd]}
        word={word}
        back={isBack}
      />
    )
  })
}
