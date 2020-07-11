import { graphql, useStaticQuery } from 'gatsby'

const useSocial = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            linkedin
          }
        }
      }
    }
  `)

  return {
    socialMedia: [
      {
        name: 'GitHub',
        link: `https://github.com/${data.site.siteMetadata.social.github}`,
      },
      {
        name: 'Linkedin',
        link: `https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`,
      },
    ],
  }
}

export default useSocial
