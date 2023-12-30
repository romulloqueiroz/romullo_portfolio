import { RefObject } from 'react'

export interface CursorProps {
  stickyElement: RefObject<HTMLDivElement>
}

export interface TransformProps {
  rotate: number
  scaleX: number
  scaleY: number
}
