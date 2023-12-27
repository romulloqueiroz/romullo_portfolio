'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { View, Floating } from '@atoms'
import Lenis from '@studio-freight/lenis'

const Home = () => {
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
    <main>
      <View 
        w='100vw'
        h='100vh'
        main='center'
        cross='center'
        style={{
          border: '4px solid green'
        }}
        as='main'
      >
        {/* <h1 className={styles.title}>SOMETHING</h1> */}
        <Floating />
      </View>
      <View 
        w='100vw'
        h='100vh'
        main='center'
        cross='center'
        style={{
          border: '4px solid yellow'
        }}
        as='main'
      >
        <h1 className={styles.title}>SOMETHING ELSE</h1>
      </View>
      <View 
        w='100vw'
        h='100vh'
        main='center'
        cross='center'
        style={{
          border: '4px solid red'
        }}
        as='main'
      >
        <h1 className={styles.title}>EVEN ANOTHER THING</h1>
      </View>
    </main>
  )
}

export default Home
