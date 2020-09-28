import { graphql } from 'gatsby'

import SEO from "@components/Seo"
import Posts from '@components/Posts'

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <SEO title="Home" />
      <Posts posts={posts} />
    </>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
