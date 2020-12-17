import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import BlogPost from '../components/BlogPost';

const SingleBlockCardStyles = styled.div`
  background: grey;
  padding: 20px;
`;

const BlogGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto auto;
`;

function SingleBlogCard({ singleBlog }) {
  return (
    <SingleBlockCardStyles>
      <h2>{singleBlog.title}</h2>
      <Img fluid={singleBlog.mainImage.asset.fluid} />
      {singleBlog.categories.map((category) => (
        <div key={category.title}>
          <h4>{category.title}</h4>
          <p>{category.description}</p>
        </div>
      ))}
    </SingleBlockCardStyles>
  );
}

export default function blog({ data }) {
  return (
    <div>
      <p>Latest Blog Post</p>
      <BlogPost blog={data.blogs.nodes[0]} />
      <BlogGridStyles>
        {data.blogs.nodes.map((singleBlog) => (
          <div key={singleBlog.id}>
            <SingleBlogCard singleBlog={singleBlog} />
            {/* <BlogPost blog={singleBlog} /> */}
          </div>
        ))}
      </BlogGridStyles>
    </div>
  );
}

export const query = graphql`
  query blogsQuery {
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
