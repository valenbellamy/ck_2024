/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Graphisme et illustration | Clément Karl`,
    description: `Clément Karl est un graphiste avec un goût prononcé pour les visuels épurés et le dessin.`,
    siteUrl: `https://clementkarl.com/`,
    image: "/static/9e7312766bc08c23c60410ff2f3bb362/19eb8/Jeu_3.webp",
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
