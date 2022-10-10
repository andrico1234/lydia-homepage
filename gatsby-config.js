module.exports = {
  siteMetadata: {
    title: `Lydia MacKenzie | Dancer | Choreographer | Instructor`,
    description: `Lydia is a professional dancer, choreographer, and fitness instructor
    based in London.`,
    author: `Andrico Karoulla`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lydia MacKenzie`,
        short_name: `Lydia MacKenzie`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gallery.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "HYGRAPH",
        fieldName: "hygraphData",
        url: "https://api-eu-west-2.hygraph.com/v2/cl92y59e33csv01t6h5os25en/master",
      },
    },
    //   // this (optional) plugin enables Progressive Web App + Offline functionality
    //   // To learn more, visit: https://gatsby.dev/offline
    //   // `gatsby-plugin-offline`,
  ],
}
