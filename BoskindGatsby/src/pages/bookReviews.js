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
    border: 2px solid var(--yellow);
    text-align: center;
    border-radius: 1rem;
    box-shadow: 1px 1px var(--yellow);
  }
`;

function ShowBook({ bookInfo }) {
  return (
    <div className="singleBook">
      <h3 className="center">{bookInfo.title}</h3>
      <p>{bookInfo.properties.Author.value[0].name}</p>
      <p>{bookInfo.properties.Score__5.value.name}</p>
    </div>
  );
}

function BookGrid({ books }) {
  return (
    <LinkGridStyles>
      {books.map((book) => (
        <ShowBook bookInfo={book} key={book.title} />
      ))}
    </LinkGridStyles>
  );
}

export default function BooksPage({ data }) {
  const books = data.allNotion.nodes;
  const [viewAsTable, setViewAsTable] = useState(false);
  return (
    <>
      <SEO title="Mr. Boskind's Reading List" />
      <h1 className="center">Reading List</h1>
      <label>
        <span style={{ marginRight: '5px' }}>Searchable Table</span>
        <Toggle
          checked={viewAsTable}
          onChange={() => setViewAsTable(!viewAsTable)}
        />
      </label>
      {viewAsTable ? (
        <LinksTableSearchable books={books} />
      ) : (
        <BookGrid books={books} />
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
