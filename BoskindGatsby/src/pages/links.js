import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

const LinkGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto auto;
`;

function ShowLink({ linkInfo }) {
  console.log(linkInfo);
  return (
    <>
      <a href={linkInfo.url}>
        <h3 className="center">{linkInfo.name}</h3>
        <Img fluid={linkInfo.image.asset.fluid} />
        <p>{linkInfo.description}</p>
      </a>
    </>
  );
}

export default function LinksPage({ data, pageContext }) {
  const links = data.links.nodes;

  return (
    <>
      <SEO title="Math Units" />
      <h1 className="center">Important Links</h1>
      <LinkGridStyles>
        {links.map((link) => (
          <ShowLink linkInfo={link} key={link.name} />
        ))}
      </LinkGridStyles>
    </>
  );
}

export const query = graphql`
  query linksQuery {
    links: allSanityLinks {
      nodes {
        name
        url
        description
        image {
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
