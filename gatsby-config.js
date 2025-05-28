/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Clément Karl`,
    description: `Clément Karl est un graphiste avec un goût prononcé pour les visuels épurés et le dessin.`,
    siteUrl: `https://clementkarl2924.netlify.app/`,
    image: `/home/2_JEUX_DE_CARTES_ILLUSTRATIONS_2.webp`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
