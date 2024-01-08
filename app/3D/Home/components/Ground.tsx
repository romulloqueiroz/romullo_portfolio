import { Grid } from '@react-three/drei'
import { colors } from '@styles'

export const Ground = () => {
  const gridConfig = {
    cellSize: 0.5,
    cellThickness: 0.5,
    cellColor: colors.card,
    sectionSize: 3,
    sectionThickness: 1,
    sectionColor: colors.purple,
    fadeDistance: 30,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true
  }
  return <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
}
