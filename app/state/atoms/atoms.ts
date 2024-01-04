import { ColorType } from '@/app/styles'
import { atom } from 'recoil'

type CursorColor = keyof ColorType

export const cursorColorState = atom<CursorColor>({
  key: 'notificationsState',
  default: 'blue',
})