import { useState } from 'react'
import { View, Cursor } from '@atoms'
import { StickyButton } from '@molecules'

export const LinkMenu = () => {
  const [activeButton, setActiveButton] = useState<{ id: string, rect: DOMRect } | null>(null)

  const handleMouseEnter = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    const rect = target.getBoundingClientRect()
    console.log(rect)
    setActiveButton({ id: target.id, rect })
  }

  return (
    <>
      <Cursor stickyElement={activeButton} />
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
          name='github'
          onMouseEnter={e => handleMouseEnter(e)}
          onMouseLeave={() => setActiveButton(null)}
          url='https://github.com/romulloqueiroz'
        />
        <StickyButton
          name='linkedin'
          onMouseEnter={e => handleMouseEnter(e)}
          onMouseLeave={() => setActiveButton(null)}
          url='https://www.linkedin.com/in/romullo-bernardo/'
        />
        <StickyButton
          name='medium'
          onMouseEnter={e => handleMouseEnter(e)}
          onMouseLeave={() => setActiveButton(null)}
          url='https://medium.com/@romulloqueiroz'
        />
      </View>
    </>
  )
}
