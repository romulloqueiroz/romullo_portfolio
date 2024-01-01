import type { ColorType } from '@styles'

export interface MaskedTextProps {
  type: 'h1' | 'h2'
  txtHidden: string
  txtVisible: string
  color: keyof ColorType
}
