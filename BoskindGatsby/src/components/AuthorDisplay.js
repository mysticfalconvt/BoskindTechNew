import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import { GatsbyImage } from "gatsby-plugin-image";
import serializer from '../utils/serializer';

const AuthorStyles = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(255, 198, 0, 0.3),
    var(--red)
  );
  border-radius: 2rem;
  justify-content: center;
  align-items: center;
  display: grid;
  align-self: center;
  grid-template-columns: minmax(50px, 400px) minmax(200px, 1fr);
  grid-gap: 2rem;
  .imageFade {
    display: block;
    position: relative;
    padding: 20px;
    Img {
      border-radius: 500px;
      width: 70%;
      height: 70%;
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: minmax(50px, 300px);
  }
`;
export default function AuthorDisplay({ blog }) {
  const [url, setUrl] = useState('');
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    setUrl(String(window.location.href));
  }, []);
  if (url.includes(blog.slug.current)) {
    return (
      <AuthorStyles>
        <div className="imageFade">
          <GatsbyImage image={blog.author.image.asset.gatsbyImageData} />
        </div>
        <div>
          <h2>Post by: {blog.author.name}</h2>

          <PortableText blocks={blog.author._rawBio} serializers={serializer} />
        </div>
      </AuthorStyles>
    );
  }

  return <div />;
}
