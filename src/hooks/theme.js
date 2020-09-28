import { useAppContext } from '@context'

const themes = ['dark', 'light']
const oppositeTheme = (current) => (theme) => theme !== current
const getOppositeTheme = (current) => themes.find(oppositeTheme(current))

const useTheme = () => {
  const { context, updateContext } = useAppContext()
  const { theme } = context

  const onThemeSwitch = () => {
    updateContext({ theme: getOppositeTheme(theme) })
  }

  return {
    onThemeSwitch,
    isSwitcherActive: theme === themes[1],
  }
}

export default useTheme
