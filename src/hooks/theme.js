import { useState } from 'react'

const useTheme = () => {
  const [isActive, setIsActive] = useState()

  const onThemeSwitch = () => {
    setIsActive(!isActive)
  }

  return {
    onThemeSwitch,
    isActive,
  }
}

export default useTheme
