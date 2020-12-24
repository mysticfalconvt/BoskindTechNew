import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import urlBuilder from '@sanity/image-url';
import { Link } from 'gatsby';

const urlFor = (source) =>
  urlBuilder({ projectId: 'jzq9n05y', dataset: 'production' }).image(source);

const serializer = {
  types: {
    image: (props) => (
      <figure>
        <img
          src={urlFor(props.node.asset).width(600).url()}
          alt={props.node.alt}
        />
      </figure>
    ),
  },
};

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

      <PortableText blocks={blog._rawBody} serializers={serializer} />
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
    <SingleBlockCardStyles>
      <Link to={`/blog/${singleBlog.slug.current}`}>
        <h2 className="tilt">{singleBlog.title}</h2>
        <Img fluid={singleBlog.mainImage.asset.fluid} />
        <h4>Categories:</h4>
        {singleBlog.categories.map((category) => (
          // <div key={category.title}>
          <span>{category.title} </span>

          // </div>
        ))}
      </Link>
    </SingleBlockCardStyles>
  );
}
