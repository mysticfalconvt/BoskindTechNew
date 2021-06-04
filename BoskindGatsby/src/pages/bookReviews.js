import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
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

  .singleBook {
    border: 1px solid red;
    text-align: center;
  }
`;

function ShowLink({ linkInfo }) {
  return (
    <div className="singleBook">
      <h3 className="center">{linkInfo.title}</h3>
      <p>{linkInfo.properties.Author.value[0].name}</p>
      <p>{linkInfo.properties.Score__5.value.name}</p>
    </div>
  );
}

function LinkGrid({ links }) {
  return (
    <LinkGridStyles>
      {links.map((link) => (
        <ShowLink linkInfo={link} key={link.title} />
      ))}
    </LinkGridStyles>
  );
}

export default function LinksPage({ data }) {
  const books = data.allNotion.nodes;
  const [viewAsTable, setViewAsTable] = useState(false);
  console.log(books);
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
        <LinksTableSearchable links={books} />
      ) : (
        <LinkGrid links={books} />
      )}
    </>
  );
}

export const query = graphql`
  query booksRead {
    allNotion(
      filter: {
        properties: {
          Type: { value: { name: { eq: "Book" } } }
          Status: { value: { name: { eq: "Finished" } } }
        }
      }
    ) {
      nodes {
        title
        properties {
          Score__5 {
            value {
              name
            }
          }
          Author {
            value {
              name
            }
          }
        }
        id
      }
    }
  }
`;
