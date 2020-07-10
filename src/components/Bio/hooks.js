import { useStaticQuery, graphql } from 'gatsby'

const useBio = () => {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 56, quality: 56) {
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
          social {
            github
          }
        }
      }
    }
  `)

  return {
    imageData: data.profileImage.childImageSharp.fixed,
    author: data.site.siteMetadata.author,
    social: data.site.siteMetadata.social,
  }
}

export default useBio
