import { graphql } from 'gatsby';
import React from 'react';
import BlogPost from '../components/BlogPost';
import SEO from '../components/SEO';

export default function SingleBlogPost({ data }) {
  return (
    <div>
      <SEO title={data.blog.title} />
      <BlogPost blog={data.blog} />
    </div>
  );
}

export const query = graphql`
  query ($slug: String!) {
    blog: sanityPost(slug: { current: { eq: $slug } }) {
      title
      id
      categories {
        title
        description
      }
      author {
        name
        _rawBio
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
      slug {
        current
      }
      publishedAt(formatString: "MM-DD-YYYY")
      _rawBody
      mainImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
`;
