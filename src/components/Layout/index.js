import Header from '@components/Header'

import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
