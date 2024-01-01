import { useRef } from 'react'
import { View, Cursor } from '@atoms'
import { StickyButton } from '@molecules'

export const LinkMenu = () => {
  const githubRef = useRef<HTMLDivElement>(null)
  const linkedinRef = useRef<HTMLDivElement>(null)
  const mediumRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <Cursor stickyElement={githubRef} />
      <Cursor stickyElement={linkedinRef} />
      <Cursor stickyElement={mediumRef} />
      <View
        as='nav'
        absolute
        x={10}
        by={48}
        w={60}
        h={160}
        main='space-between'
        cross='center'
        z={100}
      >
        <StickyButton
          ref={githubRef}
          name='github'
          url='https://github.com/romulloqueiroz'
        />
        <StickyButton
          ref={linkedinRef}
          name='linkedin'
          url='https://www.linkedin.com/in/romullo-bernardo/'
        />
        <StickyButton
          ref={mediumRef}
          name='medium'
          url='https://medium.com/@romulloqueiroz'
        />
      </View>
    </>
  )
}
