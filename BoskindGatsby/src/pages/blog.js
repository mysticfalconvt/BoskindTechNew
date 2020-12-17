import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import BlogPost from '../components/BlogPost';

const SingleBlockCardStyles = styled.div`
  background: red;
`;

const BlogGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto auto;
`;

function SingleBlogCard({ singleBlog }) {
  function truncate(str, no_words) {
    return str.split(' ').splice(0, no_words).join(' ');
  }
  const shortBlog = truncate('this is my testing text', 10);
  return (
    <SingleBlockCardStyles>
      <h2>{singleBlog.title}</h2>
      <Img fluid={singleBlog.mainImage.asset.fluid} />

      <p>{shortBlog}</p>
    </SingleBlockCardStyles>
  );
}

export default function blog({ data }) {
  return (
    <div>
      <p> The blog page goes here</p>
      <BlogGridStyles>
        {data.blogs.nodes.map((singleBlog) => (
          <div key={singleBlog.id}>
            <SingleBlogCard singleBlog={singleBlog} />
            <BlogPost blog={singleBlog} />
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
        body {
          children {
            _key
            _type
            text
            marks
          }
          style
          list
          _rawChildren
          _key
          _type
        }
        author {
          name
        }
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
