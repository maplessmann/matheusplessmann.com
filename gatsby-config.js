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
          maxWidth: 768,
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
    trackingId: process.env.GOOGLE_ANALYTICS_ID,
    head: false,
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

const gatsbyPluginSass = {
  resolve: `gatsby-plugin-sass`,
  options: {
    data: `
      @import "${__dirname}/src/styles/index";
    `,
  },
}

const gatsbyPluginAliasImports = {
  resolve: `gatsby-plugin-alias-imports`,
  options: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@static': path.resolve(__dirname, 'static'),
      '@context': path.resolve(__dirname, 'src/context'),
    },
    extensions: [],
  },
}

module.exports = {
  siteMetadata: {
    title: `Matheus Plessmann`,
    summary: `Aqui eu abordo assuntos que envolvem JavaScript e o ecossistema em torno da linguagem`,
    author: {
      name: `Matheus Plessmann`,
      summary: `A Front-End developer who loves to create things with JavaScript and the ecosystem around it.`,
    },
    description: `My personal blog.`,
    siteUrl: `https://matheusplessmann.netlify.app/`,
    social: {
      twitter: `maplessmann`,
      github: `maplessmann`,
      linkedin: `matheus-plessmann`,
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
    gatsbyPluginSass,
    `gatsby-plugin-provide-react`,
    gatsbyPluginAliasImports,
    `gatsby-plugin-layout`,
  ],
}
