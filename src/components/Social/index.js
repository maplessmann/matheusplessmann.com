import useSocial from './hooks'

import Link from '@components/Link'

import './Social.scss'

const Social = () => {
  const { socialMedia } = useSocial()

  return (
    <div className="social-media">
      {socialMedia.map(({ name, link }, index) => (
        <Link external to={link} key={index}>
          {name}
        </Link>
      ))}
    </div>
  )
}

export default Social
