import { IconType } from '@styles'

export interface StickyButtonProps {
  name: IconType
  url: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}
