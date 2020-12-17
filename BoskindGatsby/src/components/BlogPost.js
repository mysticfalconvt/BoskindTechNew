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
  console.log(blog._rawBody);
  return (
    <div>
      <Img fluid={blog.mainImage.asset.fluid} />
      <BlogTitleStyles>{blog.title}</BlogTitleStyles>
      <PortableText blocks={blog._rawBody} />
    </div>
  );
}
