import { useStaticQuery, graphql } from 'gatsby'

const useHeader = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 56, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return {
    imageData: data.image.childImageSharp.fixed,
    appTitle: data.site.siteMetadata.title,
  }
}

export default useHeader
