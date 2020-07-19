import useAuthor from '@hooks/author'

import Img from '@components/Img'
import Link from '@components/Link'
import Social from '@components/Social'

import './Author.scss'

const Author = () => {
  const { imageData, author } = useAuthor()

  return (
    <div className="author-bio">
      <Link to="/">
        <Img fixed={imageData} alt="Avatar" />
        <h1 className="title">{author.name}</h1>
      </Link>
      <p className="summary">{author.summary}</p>
      <Social />
    </div>
  )
}

export default Author
