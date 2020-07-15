import { Link } from 'gatsby'

import './Posts.scss'

const PostSummary = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug

  return (
    <article className="post-summary">
      <Link className="link" to={node.fields.slug}>
        <header className="header">
          <h2 className="title">{title}</h2>
          <small>{node.frontmatter.date}</small>
        </header>
        <section>
          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </section>
      </Link>
    </article>
  )
}

const Posts = ({ posts }) => {
  return posts.map(({ node }) => {
    return <PostSummary node={node} key={node.fields.slug} />
  })
}

export default Posts
