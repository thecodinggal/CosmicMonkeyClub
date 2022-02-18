module.exports = {
  siteMetadata: {
    siteUrl: "https://www.cosmicmonkeyclub.com", // probably need to change this
    title: "Cosmic Monkey Club",
    description: "Welcome to the Cosmic Monkey Club Universe",
    author: "Cosmic Labs LLC",
  },
  plugins: [
    `gatsby-plugin-image`, //for images
    {
      resolve: `gatsby-plugin-sharp`, //for images
      options: {
        defaults: {
          placeholder: `dominantColor`,
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`, //for images
    "gatsby-plugin-postcss", //for tailwindcss
    "gatsby-plugin-react-helmet", //react helmet
    `gatsby-plugin-fontawesome-css`, //fontawesome smooth loading
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: "cosmicmonkeyclub.com", // here too
        protocol: "https",
        hostname: "www.cosmicmonkeyclub.com", // here too
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,    //favicon
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#04194a`,
        theme_color: `#3f1e9c`,
        display: `standalone`,
        icon: "src/images/favicon.png",
      },
    },
  ],
};
