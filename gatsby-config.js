/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: "Drupal Cooking Blog",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
        options: {
          typeName: "DrupalGraqhQL",
          fieldName: "Drupal",
          url: "https://csc496f22demo.tldr.dev/graphql",
        },
      },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "path-browserify",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
  ],
}; 