module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter for IONOS Deploy Now',
    author: 'Devscover / Wayne Covell',
    description: 'A Gatsby.js Starter for IONOS Deploy Now',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-ionos-deploy-now-starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
