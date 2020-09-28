import { ContextProvider } from '@context'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'

import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <div className="app">
        <Header />
        <Sidebar />
        <main className="main-content">
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </ContextProvider>
  )
}

export default Layout
