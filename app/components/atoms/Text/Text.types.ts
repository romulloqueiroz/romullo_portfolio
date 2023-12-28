import { ColorType } from '@styles'
import { ReactNode, CSSProperties, RefObject } from 'react'
import { Interpolation } from 'styled-components'

export interface TextType {
  children: ReactNode

  weight: CSSProperties['fontWeight']
  $weight: CSSProperties['fontWeight']
  size: CSSProperties['fontSize']
  $size: CSSProperties['fontSize']
  color: keyof ColorType
  $color: keyof ColorType
  width: CSSProperties['width']
  $width: CSSProperties['width']
  center: boolean
  $center: boolean

  mb: CSSProperties['marginBottom']
  $mb: CSSProperties['marginBottom']
  ml: CSSProperties['marginLeft']
  $ml: CSSProperties['marginLeft']
  mt: CSSProperties['marginTop']
  $mt: CSSProperties['marginTop']

  style: CSSProperties

  as?: 'p' | 'h1' | 'h2' | 'h3' | 'span'
}
