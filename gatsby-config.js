require("dotenv")

const cms = require("./src/data/cms")

module.exports = {
  siteMetadata: {
    ...cms,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/data/posts`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-sharp`,

   {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-emoji-unicode`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              withWebp: true
            },
          },
        ],
      },
    },

    
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.giselebertoni.com.br`,
        stripQueryString: true,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gisele-bertoni-make`,
        short_name: `gimake`,
        start_url: `/`,
        background_color: `#e3117c`,
        theme_color: `#e3117c`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, //512 x 512
      },
    },

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#e3117c`,
        showSpinner: true,
      },
    },

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `500`, `700`, `900`],
          },
          {
            family: `Raleway`,
            variants: [`300`, `400`, `500`, `700`, `900`],
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },

    `gatsby-plugin-offline`,
  ],
}
