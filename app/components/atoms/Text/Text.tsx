import React from 'react'
import { TextType } from './Text.types'
import { StyledView } from './Text.styles'

const Text: React.FC<Partial<TextType>> = ({
  children,
  weight,
  size,
  color,
  width,
  center,
  mb,
  ml,
  mt,
  style,
  as,
}) => (
  <StyledView
    $weight={weight}
    $size={size}
    $color={color}
    $width={width}
    $center={center}
    $mb={mb}
    $ml={ml}
    $mt={mt}
    style={style}
    as={as}
  >
    {children}
  </StyledView>
)

export { Text }
