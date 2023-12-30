import { Char } from '../Char/Char'
import { Text } from '../../../atoms/Text/Text'
import { WordProps } from './Word.types'

export const Word: React.FC<WordProps> = ({word, progress, range, back}) => {
  const amount = range[1] - range[0]
  const step = amount / (word.length)
  return (
    <Text as='span' style={{ marginRight: '0.4rem' }}>
      {word.split('').map((char, idx) => {
        const start = range[0] + (idx * step)
        const end = range[0] + ((idx + 1) * step)
        return (
          <Char 
            key={`c_${idx}`} 
            progress={progress} 
            range={[start, end]}
            text={char}
            back={back}
          />
        )
      })}
    </Text>
  )
}
