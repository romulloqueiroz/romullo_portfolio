import { ReactNode, CSSProperties } from 'react'
import { Interpolation } from 'styled-components'

export interface ViewType {
  children: ReactNode

  // paddings
  ph: CSSProperties['paddingLeft' | 'paddingRight']
  $ph: CSSProperties['paddingLeft' | 'paddingRight']
  pv: CSSProperties['paddingTop' | 'paddingBottom']
  $pv: CSSProperties['paddingTop' | 'paddingBottom']
  pl: CSSProperties['paddingLeft']
  $pl: CSSProperties['paddingLeft']
  pr: CSSProperties['paddingRight']
  $pr: CSSProperties['paddingRight']
  pt: CSSProperties['paddingTop']
  $pt: CSSProperties['paddingTop']
  pb: CSSProperties['paddingBottom']
  $pb: CSSProperties['paddingBottom']
  p: CSSProperties['padding']
  $p: CSSProperties['padding']

  // margins
  mh: CSSProperties['marginLeft' | 'marginRight']
  $mh: CSSProperties['marginLeft' | 'marginRight']
  mv: CSSProperties['marginTop' | 'marginBottom']
  $mv: CSSProperties['marginTop' | 'marginBottom']
  ml: CSSProperties['marginLeft']
  $ml: CSSProperties['marginLeft']
  mr: CSSProperties['marginRight']
  $mr: CSSProperties['marginRight']
  mt: CSSProperties['marginTop']
  $mt: CSSProperties['marginTop']
  mb: CSSProperties['marginBottom']
  $mb: CSSProperties['marginBottom']
  m: CSSProperties['margin']
  $m: CSSProperties['margin']

  // sizes
  h: CSSProperties['height']
  $h: CSSProperties['height']
  w: CSSProperties['width']
  $w: CSSProperties['width']

  // border radius
  br: CSSProperties['borderRadius']
  $br: CSSProperties['borderRadius']
  btlr: CSSProperties['borderTopLeftRadius']
  $btlr: CSSProperties['borderTopLeftRadius']
  btrr: CSSProperties['borderTopRightRadius']
  $btrr: CSSProperties['borderTopRightRadius']
  bblr: CSSProperties['borderBottomLeftRadius']
  $bblr: CSSProperties['borderBottomLeftRadius']
  bbrr: CSSProperties['borderBottomRightRadius']
  $bbrr: CSSProperties['borderBottomRightRadius']

  // border width
  bw: CSSProperties['borderWidth']
  $bw: CSSProperties['borderWidth']

  // circle
  round: number
  $round: number

  // flex
  flex: CSSProperties['flex']
  $flex: CSSProperties['flex']
  flex1: boolean
  $flex1: boolean

  // flexbox
  row: boolean
  $row: boolean
  main: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-evenly' | 'space-around'
  $main: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-evenly' | 'space-around'
  cross: 'flex-start' | 'center' | 'flex-end'
  $cross: 'flex-start' | 'center' | 'flex-end'

  // overflow
  overflow: 'hidden' | 'visible' | 'scroll'
  $overflow: 'hidden' | 'visible' | 'scroll'
  overflowHidden: boolean
  $overflowHidden: boolean
  
  // position
  position: 'absolute' | 'relative'
  $position: 'absolute' | 'relative'
  absolute: boolean
  $absolute: boolean
  x: CSSProperties['left']
  $x: CSSProperties['left']
  rx: CSSProperties['right'] // right on x 
  $rx: CSSProperties['right'] // right on x
  y: CSSProperties['top']
  $y: CSSProperties['top']
  by: CSSProperties['bottom'] // bottom on y 
  $by: CSSProperties['bottom'] // bottom on y

  style: Interpolation<CSSProperties>

  as?: 'div' | 'main' | 'section' | 'article' | 'aside' | 'nav' | 'header' | 'footer'
}
