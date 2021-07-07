import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import { Link } from 'gatsby';
import AuthorDisplay from './AuthorDisplay';
import serializer from '../utils/serializer';

const BlogTitleStyles = styled.h2`
  text-align: center;
  font-size: 4rem;
  padding: 0 2px 2px 2px;
  margin: 0;
  transform: translateY(-3rem) rotate(-7deg);
  z-index: auto;
  display: block;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

export default function BlogPost({ blog }) {
  return (
    <div>
      <h3>{blog.publishedAt}</h3>
      <GatsbyImage image={blog.mainImage.asset.gatsbyImageData} />
      <BlogTitleStyles>{blog.title}</BlogTitleStyles>

      <PortableText blocks={blog._rawBody} serializers={serializer} />
      <AuthorDisplay blog={blog} />
    </div>
  );
}

const SingleBlockCardStyles = styled.div`
  background: var(--grey);
  border-radius: 20px;
  padding: 20px;
  margin: auto;
`;

export function SingleBlogCard({ singleBlog }) {
  return (
    <SingleBlockCardStyles key={singleBlog.slug.current}>
      <Link to={`/blog/${singleBlog.slug.current}`}>
        <h2 className="tilt">{singleBlog.title}</h2>
        <GatsbyImage image={singleBlog.mainImage.asset.gatsbyImageData} />
        <h4>Categories:</h4>
        {singleBlog.categories.map((category) => (
          // <div key={category.title}>
          <span key={category.title}>{category.title} </span>

          // </div>
        ))}
        <p>{singleBlog.publishedAt}</p>
      </Link>
    </SingleBlockCardStyles>
  );
}
