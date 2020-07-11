import useHeader from './hooks'

import Link from '@components/Link'
import Img from '@components/Img'
import GithubIcon from './GithubIcon'

import './Header.scss'

const Header = () => {
  const { imageData, appTitle, social } = useHeader()

  return (
    <header className="app-header">
      <Link to="/">
        <Img fixed={imageData} alt={appTitle} />
        <h1 className="title">{appTitle}</h1>
      </Link>
      <Link external to={`http://github.com/${social.github}`}>
        <GithubIcon />
      </Link>
    </header>
  )
}

export default Header
