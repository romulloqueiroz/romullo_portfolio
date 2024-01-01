import { Front } from './Front/Front'
import { Back } from './Back/Back'
import { View } from '@atoms'
import { MaskedTextProps } from './MaskedText.types'
import { useRef } from 'react'
import { useMousePosition } from '@hooks'

export const MaskedText: React.FC<MaskedTextProps> = ({ type, color, txtBack, txtFront }) => {
  const ref = useRef(null)
  const { xNumber, yNumber } = useMousePosition(ref)

  return (
    <View 
      cross='center' 
      h={type === 'h1' ? 480 : 380} // 380 is temporary yet
      w='100%'
      ref={ref}
    >
      <Back 
        type={type} 
        txtBack={txtBack} 
        color={color} 
        x={xNumber}
        y={yNumber}
      />
      <Front 
        type={type} 
        txtFront={txtFront} 
      />
    </View>
  )
}
