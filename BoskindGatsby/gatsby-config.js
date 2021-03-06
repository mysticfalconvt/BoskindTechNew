import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
export default {
  siteMetadata: {
    title: `Rob Boskind`,
    siteUrl: `https://Boskind.tech`,
    description: 'The best Boskind in the world',
    twitter: '@RobBoskind',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-31032206-2', // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   trackingId: 'UA-31032206-2',
    //   head: true,
    //   anonymize: true,
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'jzq9n05y',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Boskind.Tech`,
        short_name: `Boskind`,
        start_url: `/`,
        background_color: `#FF4949`,
        theme_color: `#ffc600`,
        display: `standalone`,
        icon: `static/boskind.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog/`, `/units/*`, `/links/`],
      },
    },
  ],
};
