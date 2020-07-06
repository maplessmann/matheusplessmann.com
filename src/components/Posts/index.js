import { Link } from 'gatsby'

const Posts = ({ posts }) => {
  return posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug

    return (
      <article key={node.fields.slug}>
        <header>
          <h2>
            <Link to={node.fields.slug}>{title}</Link>
          </h2>
          <small>{node.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </section>
      </article>
    )
  })
}

export default Posts
