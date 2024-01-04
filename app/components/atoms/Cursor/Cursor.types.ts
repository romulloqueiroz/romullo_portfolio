import { ColorType } from '@/app/styles'

export interface CursorProps {
  stickyElement: { id: string, rect: DOMRect } | null
  color: keyof ColorType
}

export interface TransformProps {
  rotate: number
  scaleX: number
  scaleY: number
}
