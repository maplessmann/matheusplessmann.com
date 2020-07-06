import './Header.scss'

const Header = ({ title }) => {
  return (
    <header className="main-header">
      <h1 className="title">{title}</h1>
    </header>
  )
}

export default Header
