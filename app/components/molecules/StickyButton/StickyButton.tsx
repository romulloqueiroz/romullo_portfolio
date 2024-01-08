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
  <a 
    href={url} 
    target='_blank' 
    rel='noopener noreferrer' 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Magnetic>
      <Icon name={name} color='white' />
      <StyledBounds ref={ref} />
    </Magnetic>
  </a>
))

export { StickyButton }
