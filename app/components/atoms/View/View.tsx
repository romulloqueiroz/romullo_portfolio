import React from 'react'
import styled from 'styled-components'

export interface ViewType {
  children: React.ReactNode

  // paddings
  ph: number
  pv: number
  pl: number
  pr: number
  pt: number
  pb: number
  p: number

  // margins
  mh: number
  mv: number
  ml: number
  mr: number
  mt: number
  mb: number
  m: number

  // sizes
  // h: DimensionValue | undefined
  // w: DimensionValue | undefined

  // shadow
	// s: ShadowsType

  // border radius
  br: number

  // border top left radius
  btlr: number

  // border top right radius
  btrr: number

  // border bottom left radius
  bblr: number

  // border bottom right radius
  bbrr: number

  // border width
  bw: number

  // bordercolor
  // bc: keyof ColorType

  // circle
  round: number

  // background color
  // bgc: keyof ColorType

  // flex
  flex: number
  flex1: boolean

  // flexbox
  row: boolean
  main: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-evenly' | 'space-around'
  cross: 'flex-start' | 'center' | 'flex-end'

  // overflow
  overflow: 'hidden' | 'visible' | 'scroll'
  overflowHidden: boolean

  // pointer events
  pointerEvents?: 'auto' | 'none' | 'box-none' | 'box-only' | undefined

  // position
  position: 'absolute' | 'relative'
  absolute: boolean
  x: number
  rx: number // right x
  y: number
  by: number // bottom y
}

const StyledView = styled.div<ViewType>`
  /* Common styles */
  box-sizing: border-box;
  position: ${({ absolute }) => (absolute ? 'absolute' : 'static')};
  display: flex;
  flex: ${({ flex }) => flex || 'initial'};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: ${({ cross }) => cross || 'stretch'};
  justify-content: ${({ main }) => main || 'flex-start'};
  pointer-events: ${({ pointerEvents }) => pointerEvents || 'auto'};
  overflow: ${({ overflow }) => overflow || 'visible'};
  overflow: ${({ overflowHidden }) => overflowHidden && 'hidden'};

  /* Padding */
  padding: ${({ p }) => p || 0};
  padding-top: ${({ pt }) => pt || 0};
  padding-left: ${({ pl }) => pl || 0};
  padding-right: ${({ pr }) => pr || 0};
  padding-bottom: ${({ pb }) => pb || 0};
  padding-vertical: ${({ pv }) => pv || 0};
  padding-horizontal: ${({ ph }) => ph || 0};

  /* Margin */
  margin: ${({ m }) => m || 0};
  margin-top: ${({ mt }) => mt || 0};
  margin-left: ${({ ml }) => ml || 0};
  margin-right: ${({ mr }) => mr || 0};
  margin-bottom: ${({ mb }) => mb || 0};
  margin-vertical: ${({ mv }) => mv || 0};
  margin-horizontal: ${({ mh }) => mh || 0};

  /* Size and Border */

  border-width: ${({ bw }) => bw || 0};
  border-radius: ${({ br }) => br || 0}px;
  border-top-left-radius: ${({ btlr }) => btlr || 0}px;
  border-top-right-radius: ${({ btrr }) => btrr || 0}px;
  border-bottom-left-radius: ${({ bblr }) => bblr || 0}px;
  border-bottom-right-radius: ${({ bbrr }) => bbrr || 0}px;

  /* Positioning */
  left: ${({ x, absolute }) => (absolute ? x || 0 : 'auto')};
  right: ${({ rx, absolute }) => (absolute ? rx || 0 : 'auto')};
  top: ${({ y, absolute }) => (absolute ? y || 0 : 'auto')};
  bottom: ${({ by, absolute }) => (absolute ? by || 0 : 'auto')};

  /* Additional Styles */
  ${({ flex1, flex }) => flex1 && !flex && 'flex: 1;'}

  /* Round */
  ${({ round }) => round && `border-radius: ${round / 2}px;`}
`

export const View: React.FC<ViewType> = ({
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
  // h,
  // w,
  // shadow
  // s,
  // border radius
  br,
  // border top left radius
  btlr,
  // border top right radius
  btrr,
  // border bottom left radius
  bblr,
  // border bottom right radius
  bbrr,
  // border width
  bw,
  // border color
  // bc,
  // circle
  round,
  // background color
  // bgc,
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
  // pointer events
  pointerEvents,
  // position
  position,
  absolute,
  x,
  rx,
  y,
  by,
  // style,
  // onLayout,
}) => (
  <StyledView
    ph={ph}
    pv={pv}
    pl={pl}
    pr={pr}
    pt={pt}
    pb={pb}
    p={p}
    mh={mh}
    mv={mv}
    ml={ml}
    mr={mr}
    mt={mt}
    mb={mb}
    m={m}
    // h={h}
    // w={w}
    // s={s}
    br={br}
    btlr={btlr}
    btrr={btrr}
    bblr={bblr}
    bbrr={bbrr}
    bw={bw}
    // bc={bc}
    round={round}
    // bgc={bgc}
    flex={flex}
    flex1={flex1}
    row={row}
    main={main}
    cross={cross}
    overflow={overflow}
    overflowHidden={overflowHidden}
    pointerEvents={pointerEvents}
    position={position}
    absolute={absolute}
    x={x}
    rx={rx}
    y={y}
    by={by}
    // style={style}
    // onLayout={onLayout}
  >
    {children}
  </StyledView>
)
