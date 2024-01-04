'use client'
import { forwardRef } from 'react'
import { ViewType } from './View.types'
import { StyledView } from './View.styles'

const View = forwardRef<HTMLDivElement, Partial<ViewType>>(({
  children,
  // paddings
  ph,
  pv,
  pl,
  pr,
  pt,
  pb,
  p,
  // margins
  mh,
  mv,
  ml,
  mr,
  mt,
  mb,
  m,
  // sizes
  h,
  w,
  // border radius
  br,
  btlr,
  btrr,
  bblr,
  bbrr,
  // border width
  bw,
  // circle
  round,
  // flex
  flex,
  flex1,
  // flexbox
  row,
  main,
  cross,
  // overflow
  overflow,
  overflowHidden,
  // position
  absolute,
  fixed,
  x,
  rx,
  y,
  by,
  // z-index
  z,
  style,
  as,
  // events
  onMouseEnter,
  onMouseLeave,
  onMouseOver,
  onMouseOut,
  onPointerEnter,
  onPointerLeave,
}, ref) => (
  <StyledView
    $ph={ph}
    $pv={pv}
    $pl={pl}
    $pr={pr}
    $pt={pt}
    $pb={pb}
    $p={p}
    // margins
    $mh={mh}
    $mv={mv}
    $ml={ml}
    $mr={mr}
    $mt={mt}
    $mb={mb}
    $m={m}
    // sizes
    $h={h}
    $w={w}
    // border radius
    $br={br}
    $btlr={btlr}
    $btrr={btrr}
    $bblr={bblr}
    $bbrr={bbrr}
    // border width
    $bw={bw}
    // circle
    $round={round}
    // flex
    $flex={flex}
    $flex1={!!flex1 && !flex}
    // flexbox
    $row={row}
    $main={main}
    $cross={cross}
    // overflow
    $overflow={overflow}
    $overflowHidden={overflowHidden}
    // position
    $absolute={absolute}
    $fixed={fixed}
    $x={x}
    $rx={rx}
    $y={y}
    $by={by}
    // z-index
    $z={z}
    style={style}
    as={as}
    ref={ref}
    // events
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onMouseOver={onMouseOver}
    onMouseOut={onMouseOut}
    onPointerEnter={onPointerEnter}
    onPointerLeave={onPointerLeave}
  >
    {children}
  </StyledView>
))

export { View }
