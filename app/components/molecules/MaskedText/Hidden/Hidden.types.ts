import type { ColorType } from '@styles'

export interface HiddenProps {
  type: 'h1' | 'h2'
  txtHidden: string
  color: keyof ColorType
  x: number
  y: number
}
