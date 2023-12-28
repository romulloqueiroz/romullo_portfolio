export type ColorType = typeof colors
export const colors = {
  // B&W
  black: '#111',
  white:'#FFF',

  gray1: '#333',
  gray2: '#555',
  gray3: '#666',

  card: '#F1F1F1',
  border: '#A1A5AC',
  placeholder: '#BDBDBD',
  background: '#fafafa',

  // Colors
  purple: '#7843e9',
  blue: '#4285F4',        // Complementary color to orange (opposite on the color wheel)
  orange: '#FFA500',      // Complementary color to blue (opposite on the color wheel)
  green: '#00C851',       // Analogous color to blue (next to each other on the color wheel)
  pink: '#FF4081',        // Analogous color to purple (next to each other on the color wheel)
  yellow: '#FFD300',      // Analogous color to orange (next to each other on the color wheel)
  teal: '#008080',        // Triadic color with blue and green
  red: '#FF0000',         // Complementary color to green (opposite on the color wheel)
  cyan: '#00FFFF',        // Triadic color with blue and green
  lavender: '#967bb6',    // Analogous color to purple (varied shade)
  gold: '#FFD700',        // Triadic color with purple and green

  // Transparencies
  glass: 'rgba(153,153,153,.2)',
  transparent: 'transparent',
}
