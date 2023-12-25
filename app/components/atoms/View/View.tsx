'use client'
import React from 'react'
import styled, { Interpolation, css } from 'styled-components'

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
  h: number
  w: number

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

  // circle
  round: number

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
  
  // position
  position: 'absolute' | 'relative'
  absolute: boolean
  x: number
  rx: number // right x
  y: number
  by: number // bottom y

  style: Interpolation<React.CSSProperties>
}

const StyledView = styled.div<Partial<ViewType>>`
  display: flex;
  flex-direction: column;

  ${({ p }) => p && `padding: ${p}px;`};
  ${({ ph }) => ph && `padding-left: ${ph}px; padding-right: ${ph}px;`};
  ${({ pv }) => pv && `padding-top: ${pv}px; padding-bottom: ${pv}px;`};
  ${({ pl }) => pl && `padding-left: ${pl}px;`};
  ${({ pr }) => pr && `padding-right: ${pr}px;`};
  ${({ pt }) => pt && `padding-top: ${pt}px;`};

  ${({ m }) => m && `margin: ${m}px;`};
  ${({ mh }) => mh && `margin-left: ${mh}px; margin-right: ${mh}px;`};
  ${({ mv }) => mv && `margin-top: ${mv}px; margin-bottom: ${mv}px;`};
  ${({ ml }) => ml && `margin-left: ${ml}px;`};
  ${({ mr }) => mr && `margin-right: ${mr}px;`};
  ${({ mt }) => mt && `margin-top: ${mt}px;`};
  ${({ mb }) => mb && `margin-bottom: ${mb}px;`};

  ${({ h }) => h && `height: ${h}px;`};
  ${({ w }) => w && `width: ${w}px;`};

  ${({ br }) => br && `border-radius: ${br}px;`};
  ${({ btlr }) => btlr && `border-top-left-radius: ${btlr}px;`};
  ${({ btrr }) => btrr && `border-top-right-radius: ${btrr}px;`};
  ${({ bblr }) => bblr && `border-bottom-left-radius: ${bblr}px;`};
  ${({ bbrr }) => bbrr && `border-bottom-right-radius: ${bbrr}px;`};

  ${({ bw }) => bw && `border-width: ${bw}px;`};

  ${({ round }) => round && `height: ${round}px; width: ${round}px; border-radius: ${round / 2}px;`};

  ${({ flex }) => flex && `flex: ${flex};`};
  ${({ flex1 }) => flex1 && `flex: 1;`};

  ${({ row }) => row && `flex-direction: row;`};

  ${({ main }) => main && `justify-content: ${main};`};
  ${({ cross }) => cross && `align-items: ${cross};`};

  ${({ overflow }) => overflow && `overflow: ${overflow};`};
  ${({ overflowHidden }) => overflowHidden && `overflow: hidden;`};

  ${({ position }) => position && `position: ${position};`};
  ${({ absolute }) => absolute && `position: absolute;`};
  ${({ absolute, x }) => absolute && x && `left: ${x}px;`};
  ${({ absolute, rx }) => absolute && rx && `right: ${rx}px;`};
  ${({ absolute, y }) => absolute && y && `top: ${y}px;`};
  ${({ absolute, by }) => absolute && by && `bottom: ${by}px;`};

  ${props => props.style}

  border: 1px solid red;
`

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
