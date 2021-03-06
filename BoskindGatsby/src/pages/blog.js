import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import BlogPost, { SingleBlogCard } from '../components/BlogPost';
import SEO from '../components/SEO';

const BlogGridStyles = styled.div`
  animation: 0.5s ease-out 0s 1 fadeIn;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto auto;
`;

export default function blog({ data }) {
  return (
    <div>
      <SEO title="Blog Posts" />
      <p>Latest Blog Post</p>
      <BlogPost blog={data.blogs.nodes[0]} />
      <h4 className="center">Previous Blog Posts</h4>
      <BlogGridStyles>
        {data.blogs.nodes.map((singleBlog) => (
          <div key={singleBlog.id}>
            <SingleBlogCard singleBlog={singleBlog} />
          </div>
        ))}
      </BlogGridStyles>
    </div>
  );
}

export const query = graphql`
  query blogsQuery {
    blogs: allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
      nodes {
        title
        id
        categories {
          title
          description
        }
        author {
          name
          _rawBio
          image {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        slug {
          current
        }
        publishedAt(formatString: "MM-DD-YYYY")
        _rawBody
        mainImage {
          asset {
            fluid(maxWidth: 1200) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
