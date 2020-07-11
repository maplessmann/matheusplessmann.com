import useAuthor from '@hooks/author'

import Img from '@components/Img'
import Link from '@components/Link'

const Author = () => {
  const { imageData, author, social } = useAuthor()

  return (
    <div className="author-bio">
      <Img fixed={imageData} alt={author.name} />
      <p className="summary">
        <Link external href={`http://github.com/${social.github}`}>
          {author.name}
        </Link>
        , {author.summary}
      </p>
    </div>
  )
}

export default Author
