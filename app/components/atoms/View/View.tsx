'use client'
import { ViewType } from './View.types'
import { StyledView } from './View.styles'

export const View: React.FC<Partial<ViewType>> = ({
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
  position,
  absolute,
  x,
  rx,
  y,
  by,
  style,
}) => (
  <StyledView
    ph={ph}
    pv={pv}
    pl={pl}
    pr={pr}
    pt={pt}
    pb={pb}
    p={p}
    // margins
    mh={mh}
    mv={mv}
    ml={ml}
    mr={mr}
    mt={mt}
    mb={mb}
    m={m}
    // sizes
    h={h}
    w={w}
    // border radius
    br={br}
    btlr={btlr}
    btrr={btrr}
    bblr={bblr}
    bbrr={bbrr}
    // border width
    bw={bw}
    // circle
    round={round}
    // flex
    flex={flex}
    flex1={!!flex1 && !flex}
    // flexbox
    row={row}
    main={main}
    cross={cross}
    // overflow
    overflow={overflow}
    overflowHidden={overflowHidden}
    // position
    position={position}
    absolute={absolute}
    x={x}
    rx={rx}
    y={y}
    by={by}
    style={style}
  >
    {children}
  </StyledView>
)
