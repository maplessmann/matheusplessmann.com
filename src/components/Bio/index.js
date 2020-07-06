import useBio from './hooks'

import Img from '@components/Img'

import './Bio.scss'

const Bio = () => {
  const { imageData, author, social } = useBio()

  return (
    <div className="author-bio">
      <Img fixed={imageData} alt={author.name} />
      <p className="summary">
        <a
          href={`http://github.com/${social.github}`}
          target="_blank"
          rel="noreferrer"
        >
          {author.name}
        </a>
        , {author.summary}
      </p>
    </div>
  )
}

export default Bio
