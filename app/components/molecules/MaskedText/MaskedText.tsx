import { Front } from './Front/Front'
import { Back } from './Back/Back'
import { View } from '@atoms'
import { MaskedTextProps } from './MaskedText.types'

export const MaskedText: React.FC<MaskedTextProps> = ({ type, txtBack, txtFront }) => (
  <View 
    cross='center' 
    h={type === 'h1' ? 480 : 380} // 380 is temporary yet
    style={{ border: '1px solid black' }}
  >
    <Back type={type} txtBack={txtBack} />
    <Front type={type} txtFront={txtFront} />
  </View>
)
