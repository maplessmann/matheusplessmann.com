import classNames from 'classnames'
import useTheme from '@hooks/theme'

import './ThemeSwitcher.scss'

const ThemeSwitcher = () => {
  const { onThemeSwitch, isSwitcherActive } = useTheme()

  return (
    <div className="theme-switcher">
      <button
        className={classNames('switcher-button', {
          '-active': isSwitcherActive,
        })}
        role="switch"
        title="Toggle dark theme"
        aria-checked={isSwitcherActive}
        onClick={onThemeSwitch}
      >
        <div className="switcher"></div>
      </button>
    </div>
  )
}

export default ThemeSwitcher
