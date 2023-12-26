import styles from './page.module.css'
import { View } from '@atoms'

export default function Home() {
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
        <h1 className={styles.title}>SOMETHING</h1>
      </View>
    </main>
  )
}
