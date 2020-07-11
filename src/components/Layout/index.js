import Header from '@components/Header'
import Sidebar from '@components/Sidebar'

import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="main-content">
        <div className="wrapper">{children}</div>
      </main>
    </div>
  )
}

export default Layout
