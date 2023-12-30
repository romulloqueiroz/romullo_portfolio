import { useTransform, motion } from 'framer-motion'
import { CharProps } from './Char.types'

export const Char: React.FC<CharProps> = ({ progress, range, text, back}) => {
  const opacity = useTransform(progress, range, [0,1])
  const shadowOpacity = useTransform(progress, range, [0.6, 0])
  return (
    <>
      <motion.span style={{ position: 'absolute', opacity: back ? shadowOpacity : 0 }}>
        {text}
      </motion.span>
      <motion.span style={{opacity: back ? 0 : opacity}}>
        {text}
      </motion.span>
    </>
  )
}
