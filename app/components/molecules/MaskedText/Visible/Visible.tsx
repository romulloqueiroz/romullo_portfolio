import { Text, View } from '@atoms'
import { VisibleProps } from './Visible.types'

export const Visible: React.FC<VisibleProps> = ({ type, txtVisible }) => (
  <View
    w='100%'
    h='100%'
    cross='center'
    main='center'
  >
    <Text as={type}>{txtVisible}</Text>
  </View>
)
