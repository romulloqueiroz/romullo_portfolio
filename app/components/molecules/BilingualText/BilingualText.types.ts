import { CSSProperties } from 'styled-components'

export interface BilingualTextProps {
  txtBack: string
  txtFront: string
  maxWidth?: CSSProperties['maxWidth']
}
