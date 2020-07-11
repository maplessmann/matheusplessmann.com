import { useStaticQuery, graphql } from 'gatsby'

const useAuthor = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 64, quality: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  return {
    imageData: data.profileImage.childImageSharp.fixed,
    author: data.site.siteMetadata.author,
  }
}

export default useAuthor
