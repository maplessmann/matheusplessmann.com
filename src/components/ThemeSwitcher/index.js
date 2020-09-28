import classNames from 'classnames'
import useTheme from '@hooks/theme'

import './ThemeSwitcher.scss'

const ThemeSwitcher = () => {
  const { onThemeSwitch, isActive } = useTheme()

  return (
    <div className="theme-switcher">
      <button
        className={classNames('switcher-button', { '-active': isActive })}
        role="switch"
        title="Toggle dark theme"
        aria-checked={isActive}
        onClick={onThemeSwitch}
      >
        <div className="switcher"></div>
      </button>
    </div>
  )
}

export default ThemeSwitcher
