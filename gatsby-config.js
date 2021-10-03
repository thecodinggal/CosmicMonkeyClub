module.exports = {
  siteMetadata: {
    siteUrl: "https://www.cosmicmonkeyclub.com",
    title: "Cosmic Monkey Club",
    description: "Welcome to the future of cosmic monkey NFTs",
    author: "Cosmic Labs LLC"
  },
  plugins: [
    `gatsby-plugin-image`,      //for images
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
    'gatsby-plugin-postcss',    //for tailwindcss
    'gatsby-plugin-react-helmet', //react helmet
    `gatsby-plugin-fontawesome-css`,  //fontawesome smooth loading
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: "cosmicmonkeyclub.com",
        protocol: "https",
        hostname: "www.cosmicmonkeyclub.com",
      },
    },
  ],
};
