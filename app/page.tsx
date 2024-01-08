'use client'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import { Home, About, Projects, Contact } from '@pages'
// import { View } from '@atoms'
import { LinkMenu } from '@organisms'
import { RecoilRoot } from 'recoil'

const Page = () => {
  const [dimension, setDimension] = useState({width:0, height:0})

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time: any) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener('resize', resize)
    requestAnimationFrame(raf)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <RecoilRoot>
      <Home />
      <LinkMenu />
      {/* 
      <About />
      <Projects />
      <Contact /> */}
    </RecoilRoot>
  )
}

export default Page
