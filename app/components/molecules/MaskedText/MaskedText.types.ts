import type { ColorType } from '@styles'

export interface MaskedTextProps {
  type: 'h1' | 'h2'
  txtBack: string
  txtFront: string
  color: keyof ColorType
}
