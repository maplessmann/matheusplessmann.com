const path = require('path')

const gatsbySourceFilesystemBlog = {
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/content/blog`,
    name: `blog`,
  },
}

const gatsbySourceFilesystemAssets = {
  resolve: `gatsby-source-filesystem`,
  options: {
    path: `${__dirname}/content/assets`,
    name: `assets`,
  },
}

const gatsbyTransformerRemark = {
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 590,
        },
      },
      {
        resolve: `gatsby-remark-responsive-iframe`,
        options: {
          wrapperStyle: `margin-bottom: 1.0725rem`,
        },
      },
      `gatsby-remark-prismjs`,
      `gatsby-remark-copy-linked-files`,
      `gatsby-remark-smartypants`,
    ],
  },
}

const gatsbyPluginGoogleAnalytics = {
  resolve: `gatsby-plugin-google-analytics`,
  options: {
    //trackingId: `ADD YOUR TRACKING ID HERE`,
  },
}

const gatsbyPluginManifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `Matheus Plessmann Blog`,
    short_name: `Matheus Plessmann`,
    start_url: `/`,
    background_color: `#ffffff`,
    theme_color: `#5E53D5`,
    display: `minimal-ui`,
    icon: `content/assets/matheus-plessmann-logo.png`,
  },
}

const gatsbyPluginTypography = {
  resolve: `gatsby-plugin-typography`,
  options: {
    pathToConfigModule: `src/utils/typography`,
  },
}

const gatsbyPluginAliasImports = {
  resolve: `gatsby-plugin-alias-imports`,
  options: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
    extensions: [],
  },
}

module.exports = {
  siteMetadata: {
    title: `Matheus Plessmann`,
    author: {
      name: `Matheus Plessmann`,
      summary: `um desenvolvedor front-end que ama aprender e compartilhar conhecimento.`,
    },
    description: `My personal blog.`,
    siteUrl: `https://matheusplessmann.netlify.app/`,
    social: {
      twitter: `maplessmann`,
      github: `maplessmann`,
    },
  },
  plugins: [
    gatsbySourceFilesystemBlog,
    gatsbySourceFilesystemAssets,
    gatsbyTransformerRemark,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    gatsbyPluginGoogleAnalytics,
    `gatsby-plugin-feed`,
    gatsbyPluginManifest,
    `gatsby-plugin-react-helmet`,
    gatsbyPluginTypography,
    `gatsby-plugin-sass`,
    `gatsby-plugin-provide-react`,
    gatsbyPluginAliasImports,
  ],
}
