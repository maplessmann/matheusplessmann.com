import { Link } from 'gatsby'

import './Posts.scss'

const Posts = ({ posts }) => {
  return posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug

    return (
      <article className="post-summary" key={node.fields.slug}>
        <Link className="link" to={node.fields.slug}>
          <header className="header">
            <h2 className="title">{title}</h2>
            <small>{node.frontmatter.date}</small>
          </header>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
        </Link>
      </article>
    )
  })
}

export default Posts
