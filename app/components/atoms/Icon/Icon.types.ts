import { IconType, ColorType } from '@styles'
import { CSSProperties } from 'styled-components'

export interface IconProps {
  name: IconType
  color: keyof ColorType
  size: number
  style?: CSSProperties
}
