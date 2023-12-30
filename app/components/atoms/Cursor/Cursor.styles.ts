import { motion } from 'framer-motion'
import { colors } from '@styles'
import { styled } from 'styled-components'

export const StyledCursor = styled(motion.div)`
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${colors.blue};
`
