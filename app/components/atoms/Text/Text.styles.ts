import styled from 'styled-components'
import { TextType } from './Text.types'

export const StyledView = styled.p.attrs<Partial<TextType>>(({ as }) => ({ as: as || 'p' }))`
  ${({ $mb }) => $mb && `margin-bottom: ${typeof $mb === 'number' ? `${$mb}px` : $mb};`};
  ${({ $ml }) => $ml && `margin-left: ${typeof $ml === 'number' ? `${$ml}px` : $ml};`};
  ${({ $mt }) => $mt && `margin-top: ${typeof $mt === 'number' ? `${$mt}px` : $mt};`};
  ${({ $weight }) => $weight && `font-weight: ${$weight};`};
  ${({ $size }) => $size && `font-size: ${typeof $size === 'number' ? `${$size}px` : $size};`};
  ${({ $color }) => $color && `color: ${$color};`};
  ${({ $width }) => $width && `width: ${typeof $width === 'number' ? `${$width}px` : $width};`};
  ${({ $center }) => $center && `text-align: center;`};
`