import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const SingleBlockCardStyles = styled.div`
  background: red;
`;

const BlogGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto auto;
`;

function SingleBlogCard({ blog }) {
  function truncate(str, no_words) {
    return str.split(' ').splice(0, no_words).join(' ');
  }
  //   console.log(blog.body);
  const shortBlog = truncate('this is my testing text', 10);
  return (
    <SingleBlockCardStyles>
      <h2>{blog.title}</h2>
      <Img fluid={blog.mainImage.asset.fluid} />
      <p>
        {blog.body.map((test) => {
          console.log(test);
          return <p>asdf</p>;
        })}
      </p>
      <p>{shortBlog}</p>
    </SingleBlockCardStyles>
  );
}

export default function blog({ data }) {
  return (
    <div>
      <p> The blog page goes here</p>
      <BlogGridStyles>
        {data.blogs.nodes.map((blog) => (
          <SingleBlogCard blog={blog} key={blog.id} />
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
            text
            marks
          }
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
