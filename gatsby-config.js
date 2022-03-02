const myCustomQueries = {
  xs: "(max-width: 480px)", // Widest and most relevant phone has a width of 480px.
  sm: "(min-width: 481px)", // Anything at or above this breakpoint is assumed to be a tablet or laptop.
  l: "(min-width: 1440px)", // Anything at or above this breakpoint is assumed to be a desktop.
}

module.exports = {
  pathPrefix: '/gengreen-prelaunch',
  siteMetadata: {
    title: "gengreen-prelaunch",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-svg",
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon-32x32.svg",
      },
    },
  ],
}
