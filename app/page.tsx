import styles from './page.module.css'
import { View } from '@atoms'

export default function Home() {
  return (
    <main className={styles.main}>
      <View 
        h={300} 
        w={1300}
        main='center'
        ph={200}
      >
        <h1 className={styles.title}>SOMETHING</h1>
      </View>
    </main>
  )
}
