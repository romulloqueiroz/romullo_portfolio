import { View } from '@atoms'
import { BilingualText, MaskedText } from '@molecules'

const backgroundUrl = 'https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg'

const engTxt = 'Feel free to contact me for any work or suggestions.'
const japTxt = '仕事や提案についてはお気軽にご連絡ください'

const txtHidden = 'お問い合わせ'
const txtVisible = 'CONTACT'

const ContactCard = () => (
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
)

const Contact = () => (
  <View 
    w='100vw'
    h='100vh'
    as='section'
    cross='center'
    style={{
      background: `linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)), url(${backgroundUrl})`,
    }}
  >
    <View mv={140} />

    <BilingualText
      txtBack={japTxt}
      txtFront={engTxt}
      maxWidth='447px'
    />

    <View
      absolute
      y='10vh'
      w='100%'
      cross='center'
    >
      <MaskedText 
        type='h2' 
        txtHidden={txtHidden}
        txtVisible={txtVisible}
        color='yellow'
      />
    </View>

    <ContactCard />
  </View>
)

export { Contact }
