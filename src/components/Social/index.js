import useSocial from './hooks'

import Link from '@components/Link'
import Icon from '@components/Icon'

import './Social.scss'

const Social = () => {
  const { socialMedia } = useSocial()

  return (
    <div className="social-media">
      {socialMedia.map(({ id, name, link }, index) => (
        <Link external to={link} title={name} key={index}>
          <Icon id={id} />
        </Link>
      ))}
    </div>
  )
}

export default Social
