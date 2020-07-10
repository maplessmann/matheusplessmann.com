import useHeader from './hooks'

import { Link } from 'gatsby'
import Img from '@components/Img'

import './Header.scss'

const Header = () => {
  const { imageData, appTitle } = useHeader()

  return (
    <header className="app-header">
      <Link className="link" to="/">
        <Img fixed={imageData} alt={appTitle} />
        <h1 className="title">{appTitle}</h1>
      </Link>
    </header>
  )
}

export default Header
