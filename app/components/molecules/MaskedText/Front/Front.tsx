import { Text, View } from '@atoms'
import { FrontProps } from './Front.types'

export const Front: React.FC<FrontProps> = ({ type, txtFront }) => (
  <View
    w='100%'
    h='100%'
    cross='center'
    main='center'
    style={{
      // border: '2px solid orangered',
    }}
  >
    <Text as={type}>{txtFront}</Text>
  </View>
)
