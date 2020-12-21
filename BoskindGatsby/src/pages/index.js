import React from 'react';
import { graphql, Link } from 'gatsby';
import { SingleBlogCard } from '../components/BlogPost';
import { HomePageGrid } from '../styles/Grids';
import Calculator from '../components/Calculator';
import SlopeCalculator from '../components/SlopeCalculator';

export default function HomePage({ data }) {
  return (
    <div className="center">
      <h1>The Best Math Teacher Around</h1>
      <p>Calculating A New Digit Of π Every Single Day</p>
      <HomePageGrid>
        <Link to="/blog">
          <SingleBlogCard singleBlog={data.blogs.nodes[0]} />
        </Link>
        <Calculator className="center" />
        <SlopeCalculator />
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
