import React from 'react';
import BlogPost from '../components/BlogPost';
import SEO from '../components/SEO';
import blog from '../pages/blog';

export default function SingleBlogPost({ data }) {
  return (
    <div>
      <SEO title={data.blog.title} />
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
      publishedAt(formatString: "MM-DD-YYYY")
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
