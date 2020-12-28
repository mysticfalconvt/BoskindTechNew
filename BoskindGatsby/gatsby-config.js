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
  ],
};
