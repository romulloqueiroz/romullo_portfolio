import { forwardRef } from 'react'
import { Magnetic, Icon } from '@atoms'
import { StickyButtonProps } from './StickyButton.types'
import { StyledBounds } from './StickyButton.styled'

const StickyButton = forwardRef<HTMLDivElement, StickyButtonProps>(({ 
  name, 
  url, 
  onMouseEnter, 
  onMouseLeave 
}, ref) => (
  <a href={url} target='_blank' rel='noopener noreferrer' onMouseEnter={onMouseEnter}>
    <Magnetic>
      <Icon name={name} />
      <StyledBounds ref={ref} />
    </Magnetic>
  </a>
))

export { StickyButton }
