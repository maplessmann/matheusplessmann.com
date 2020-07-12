import Typography from "typography"
import customTheme from './typographyTheme'

const typography = new Typography(customTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const { rhythm, scale } = typography
