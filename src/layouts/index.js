import { ContextProvider, useAppContext } from '@context'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'

import './Layout.scss'

const App = ({ children }) => {
  const { context } = useAppContext()

  return (
    <div className={`app -${context?.theme}`}>
      <Header />
      <Sidebar />
      <main className="main-content">
        <div className="wrapper">{children}</div>
      </main>
    </div>
  )
}

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <App>{children}</App>
    </ContextProvider>
  )
}

export default Layout
