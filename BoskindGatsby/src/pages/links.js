import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import Toggle from 'react-toggle';
import SEO from '../components/SEO';
import LinksTableSearchable from '../components/LinksTableSearchable';
import 'react-toggle/style.css';

const LinkGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto auto;
  overflow: hidden;
  a {
    animation: 0.5s ease-out 0s 1 fadeIn;
    transition: 0.5s;
    margin-top: 5px;
    :hover {
      transform: scale(1.01);
      transition: 0.3s;
      text-shadow: 0 0 1px var(--red);
    }
  }
`;

function ShowLink({ linkInfo }) {
  return (
    <>
      <a href={linkInfo.url}>
        <h3 className="center">{linkInfo.name}</h3>
        <GatsbyImage image={linkInfo.image.childImageSharp.gatsbyImageData} />
        <p>{linkInfo.description}</p>
      </a>
    </>
  );
}

function LinkGrid({ links }) {
  return (
    <LinkGridStyles>
      {links.map((link) => (
        <ShowLink linkInfo={link} key={link.name} />
      ))}
    </LinkGridStyles>
  );
}

export default function LinksPage({ data }) {
  const links = data.links.nodes;
  const [viewAsTable, setViewAsTable] = useState(false);
  return (
    <>
      <SEO title="Helpful Links" />
      <h1 className="center">Helpful Links</h1>
      <label>
        <span style={{ marginRight: '5px' }}>Searchable Table</span>
        <Toggle
          checked={viewAsTable}
          onChange={() => setViewAsTable(!viewAsTable)}
        />
      </label>
      {viewAsTable ? (
        <LinksTableSearchable links={links} />
      ) : (
        <LinkGrid links={links} />
      )}
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
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
