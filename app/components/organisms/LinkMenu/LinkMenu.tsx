import { useState, useRef, createRef, RefObject } from 'react'
import { View, Cursor } from '@atoms'
import { StickyButton } from '@molecules'

export const LinkMenu = () => {
  const initialRef: RefObject<HTMLDivElement> = createRef()
  const [activeElement, setActiveElement] = useState<RefObject<HTMLDivElement>>(initialRef)
  const refs = useRef<{ [key: string]: RefObject<HTMLDivElement> }>({
    github: createRef(),
    linkedin: createRef(),
    medium: createRef(),
  })

  const handleMouseEnter = (key: string) => setActiveElement(refs.current[key])
  const handleMouseLeave = () => setActiveElement(initialRef)

  return (
    <>
      <Cursor stickyElement={refs.current.github} />
      <Cursor stickyElement={refs.current.linkedin} />
      <Cursor stickyElement={refs.current.medium} />
      <View
        as='nav'
        fixed
        x={20}
        by={20}
        w={60}
        h={160}
        main='space-between'
        cross='center'
        z={100}
      >
        <StickyButton
          ref={refs.current.github}
          name='github'
          onMouseEnter={() => handleMouseEnter('github')}
          onMouseLeave={handleMouseLeave}
          url='https://github.com/romulloqueiroz'
        />
        <StickyButton
          ref={refs.current.linkedin}
          name='linkedin'
          onMouseEnter={() => handleMouseEnter('linkedin')}
          onMouseLeave={handleMouseLeave}
          url='https://www.linkedin.com/in/romullo-bernardo/'
        />
        <StickyButton
          ref={refs.current.medium}
          name='medium'
          onMouseEnter={() => handleMouseEnter('medium')}
          onMouseLeave={handleMouseLeave}
          url='https://medium.com/@romulloqueiroz'
        />
      </View>
    </>
  )
}
