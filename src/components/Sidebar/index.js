import Author from '@components/Author'
import ThemeSwitcher from '@components/ThemeSwitcher'

import './Sidebar.scss'

const Sidebar = () => {
  return (
    <aside className="sidebar-menu">
      <Author />
      <ThemeSwitcher />
    </aside>
  )
}

export default Sidebar
