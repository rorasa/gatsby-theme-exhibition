module.exports = {
  siteMetadata: {
    title: 'Wattanit.info',
    description: 'Personal landing page of Wattanit Hotrakool',
    keywords: 'rorasa, wattanit, hotrakool, landing page, portfolio, research, programmer',
    navbar: [
      {
        text: 'Main',
        href: '/',
      },
      {
        text: 'Research',
        href: '/research/'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-offline',
  ],
}
