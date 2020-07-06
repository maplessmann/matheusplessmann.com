import useBio from './hooks'

import Img from 'gatsby-image'

const Bio = () => {
  const { imageData, author, social } = useBio()

  return (
    <div className="bio">
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
