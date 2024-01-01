import { useRef } from 'react'
import { Visible } from './Visible/Visible'
import { Hidden } from './Hidden/Hidden'
import { View } from '@atoms'
import { MaskedTextProps } from './MaskedText.types'
import { useMousePosition } from '@hooks'

export const MaskedText: React.FC<MaskedTextProps> = ({ type, color, txtHidden, txtVisible }) => {
  const ref = useRef(null)
  const { xNumber, yNumber } = useMousePosition(ref)

  return (
    <View 
      cross='center' 
      h={type === 'h1' ? 360 : 260}
      w='100%'
      ref={ref}
      z={400}
    >
      <Visible 
        type={type} 
        txtVisible={txtVisible} 
      />
      <Hidden 
        type={type} 
        txtHidden={txtHidden} 
        color={color} 
        x={xNumber}
        y={yNumber}
      />
    </View>
  )
}
