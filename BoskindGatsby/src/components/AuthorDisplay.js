import React from 'react';
import styled from 'styled-components';

const AuthorStyles = styled.div`
  display: flex;
`;

export default function AuthorDisplay({ blog }) {
  const url = String(window.location.href);
  console.log(url);
  if (url.includes(blog.slug.current)) {
    return (
      <AuthorStyles>
        <h2>Post by: {blog.author.name}</h2>
      </AuthorStyles>
    );
  }

  return <div />;
}
