import React from 'react';
import { graphql, Link } from 'gatsby';
import { SingleBlogCard } from '../components/BlogPost';
import { HomePageGrid } from '../styles/Grids';
import Calculator from '../components/Calculator';
import SlopeCalculator from '../components/SlopeCalculator';
import SEO from '../components/SEO';

export default function HomePage({ data }) {
  return (
    <div className="center">
      <SEO title="Boskind.Tech!!!" />
      <h1>The Best Math Teacher Around</h1>
      <p>Calculating A New Digit Of π Every Single Day</p>
      <HomePageGrid>
        <SlopeCalculator />
        <SingleBlogCard singleBlog={data.blogs.nodes[0]} />
        <Calculator className="center" />
      </HomePageGrid>
    </div>
  );
}
export const query = graphql`
  query IndexQuery {
    blogs: allSanityPost {
      nodes {
        title
        id
        categories {
          title
          description
        }
        author {
          name
        }
        slug {
          current
        }
        publishedAt
        _rawBody
        mainImage {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
