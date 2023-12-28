'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { View } from '@atoms'
import Lenis from '@studio-freight/lenis'
import { Home } from '@pages'

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
    <>
      <Home />
      {/* <View 
        w='100vw'
        h='100vh'
        main='center'
        cross='center'
        // style={{
        //   border: '4px solid yellow'
        // }}
        as='main'
      >
        <h1 className={styles.title}>SOMETHING ELSE</h1>
      </View>
      <View 
        w='100vw'
        h='100vh'
        main='center'
        cross='center'
        // style={{
        //   border: '4px solid red'
        // }}
        as='main'
      >
        <h1 className={styles.title}>EVEN ANOTHER THING</h1>
      </View> */}
    </>
  )
}

export default Page
