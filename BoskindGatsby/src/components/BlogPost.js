import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const BlogTitleStyles = styled.h2`
  text-align: center;
  font-size: 4rem;
  padding: 0 2px 2px 2px;
  margin: 0;
  transform: translateY(-3rem) rotate(-7deg);
  z-index: auto;
  display: block;
`;

export default function BlogPost({ blog }) {
  const publishedDate = new Date(blog.publishedAt);
  return (
    <div>
      <h3>{publishedDate.toDateString()}</h3>
      <Img fluid={blog.mainImage.asset.fluid} />
      <BlogTitleStyles>{blog.title}</BlogTitleStyles>

      <PortableText blocks={blog._rawBody} />
    </div>
  );
}

const SingleBlockCardStyles = styled.div`
  background: grey;
  padding: 20px;
`;

export function SingleBlogCard({ singleBlog }) {
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
