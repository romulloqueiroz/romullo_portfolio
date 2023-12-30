import { View, Text } from '@atoms'
import { BilingualText } from '@molecules'

const backgroundUrl = 'https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg'

const engTxt = 'Feel free to contact me for any work or suggestions.'
const japTxt = '仕事や提案についてはお気軽にご連絡ください'

const Contact = () => (
  <View 
    w='100vw'
    h='100vh'
    as='section'
    pt='12rem'
    style={{
      background: `linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)), url(${backgroundUrl})`,
    }}
  >
    <View mb='6rem' cross='center'>
      <Text as='h2'>CONTACT</Text>
      <BilingualText
        txtBack={japTxt}
        txtFront={engTxt}
        maxWidth='447px'
      />
    </View>

    <View 
      style={{ 
        maxWidth: '80rem',
        background: 'white',
        boxShadow: 'rgba(100,100,111,.2) 0 7px 29px 0'
      }}
      br={5}
      m='5rem auto 0 auto'
      w='95%'
      h={400}
      p='4rem'
    />
  </View>
)

export { Contact }
