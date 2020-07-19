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
        id: 'github',
        name: 'GitHub',
        link: `https://github.com/${data.site.siteMetadata.social.github}`,
      },
      {
        id: 'linkedin',
        name: 'Linkedin',
        link: `https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`,
      },
    ],
  }
}

export default useSocial
