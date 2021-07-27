import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
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
     
      {/* <BlogPost blog={data.blogs.nodes[0]} /> */}
      <h1 className="center">Previous Blog Posts</h1>
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
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
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
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
