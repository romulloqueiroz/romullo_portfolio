import styles from './page.module.css'
import { View } from '@atoms'

export default function Home() {
  return (
    <main>
      <View 
        w='100vw'
        main='center'
        cross='center'
      >
        <h1 className={styles.title}>SOMETHING</h1>
      </View>
    </main>
  )
}
