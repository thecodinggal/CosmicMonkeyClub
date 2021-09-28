module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "cosmic",
  },
  plugins: [
    `gatsby-plugin-image`,      //for images
    `gatsby-plugin-sharp`,      //for images
    `gatsby-transformer-sharp`, //for images
    'gatsby-plugin-postcss',    //for tailwindcss
    `gatsby-plugin-fontawesome-css`,  //fontawesome smooth loading
  ],
};
