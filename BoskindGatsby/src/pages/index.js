import React from 'react';
import { graphql, Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { SingleBlogCard } from '../components/BlogPost';
import { HomePageGrid } from '../styles/Grids';
import Calculator from '../components/Calculator';
import SlopeCalculator from '../components/SlopeCalculator';
import SEO from '../components/SEO';

export default function HomePage({ data }) {
  return (
    <div className="center"style={{overflow:"hidden"}}>
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
    blogs: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
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
        publishedAt(formatString: "MM-DD-YYYY")
        _rawBody
        mainImage {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
