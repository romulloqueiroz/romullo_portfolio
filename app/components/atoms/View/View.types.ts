import { ReactNode, CSSProperties } from 'react'
import { Interpolation } from 'styled-components'

export interface ViewType {
  children: ReactNode

  // paddings
  ph: CSSProperties['paddingLeft' | 'paddingRight']
  pv: CSSProperties['paddingTop' | 'paddingBottom']
  pl: CSSProperties['paddingLeft']
  pr: CSSProperties['paddingRight']
  pt: CSSProperties['paddingTop']
  pb: CSSProperties['paddingBottom']
  p: CSSProperties['padding']

  // margins
  mh: CSSProperties['marginLeft' | 'marginRight']
  mv: CSSProperties['marginTop' | 'marginBottom']
  ml: CSSProperties['marginLeft']
  mr: CSSProperties['marginRight']
  mt: CSSProperties['marginTop']
  mb: CSSProperties['marginBottom']
  m: CSSProperties['margin']

  // sizes
  h: CSSProperties['height']
  w: CSSProperties['width']

  // border radius
  br: CSSProperties['borderRadius']
  btlr: CSSProperties['borderTopLeftRadius']
  btrr: CSSProperties['borderTopRightRadius']
  bblr: CSSProperties['borderBottomLeftRadius']
  bbrr: CSSProperties['borderBottomRightRadius']

  // border width
  bw: CSSProperties['borderWidth']

  // circle
  round: number

  // flex
  flex: CSSProperties['flex']
  flex1: boolean

  // flexbox
  row: boolean
  main: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-evenly' | 'space-around'
  cross: 'flex-start' | 'center' | 'flex-end'

  // overflow
  overflow: 'hidden' | 'visible' | 'scroll'
  overflowHidden: boolean
  
  // position
  position: 'absolute' | 'relative'
  absolute: boolean
  x: CSSProperties['left']
  rx: CSSProperties['right'] // right on x 
  y: CSSProperties['top']
  by: CSSProperties['bottom'] // bottom on y 

  style: Interpolation<CSSProperties>
}
