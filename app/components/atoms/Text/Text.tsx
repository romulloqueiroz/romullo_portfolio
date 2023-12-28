import { forwardRef } from 'react'
import { TextType } from './Text.types'
import { StyledView } from './Text.styles'

const Text = forwardRef<HTMLParagraphElement, Partial<TextType>>(({
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
}, ref) => (
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
    ref={ref}
  >
    {children}
  </StyledView>
))

export { Text }
