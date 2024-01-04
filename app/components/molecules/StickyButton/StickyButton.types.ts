import { IconType } from '@styles'

export interface StickyButtonProps {
  name: IconType
  url: string
  onMouseEnter: (e: React.MouseEvent) => void
  onMouseLeave: () => void
}
