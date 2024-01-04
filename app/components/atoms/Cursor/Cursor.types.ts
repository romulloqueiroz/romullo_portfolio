import { RefObject } from 'react'

export interface CursorProps {
  stickyElement: { id: string, rect: DOMRect } | null
}

export interface TransformProps {
  rotate: number
  scaleX: number
  scaleY: number
}
