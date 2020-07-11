import { useStaticQuery, graphql } from 'gatsby'

const useHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 48, quality: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
          social {
            github
          }
        }
      }
    }
  `)

  return {
    imageData: data.image.childImageSharp.fixed,
    appTitle: data.site.siteMetadata.title,
    social: data.site.siteMetadata.social,
  }
}

export default useHeader
