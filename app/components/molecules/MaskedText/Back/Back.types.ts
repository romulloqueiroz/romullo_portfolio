import type { ColorType } from '@styles'

export interface BackProps {
  type: 'h1' | 'h2'
  txtBack: string
  color: keyof ColorType
  x: number
  y: number
}
