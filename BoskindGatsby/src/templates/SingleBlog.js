import React from 'react';
import BlogPost from '../components/BlogPost';

export default function SingleBlogPost({ data }) {
  return (
    <div>
      <BlogPost blog={data.blog} />
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    blog: sanityPost(slug: { current: { eq: $slug } }) {
      title
      id
      categories {
        title
        description
      }
      author {
        name
      }
      slug {
        current
      }
      publishedAt
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
`;
