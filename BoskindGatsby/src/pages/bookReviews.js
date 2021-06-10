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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    img {
      max-width: 80%;
      max-height: 80%;
      padding-top: 1rem;
      position: relative;
      /* margin-top: -10rem; */
      z-index: 0;
    }
    .rating {
      padding: 0.5rem 1rem;

      background: var(--grey);
      margin-left: auto;
      margin-right: auto;
      border-radius: 1000px;
    }
  }
`;

function ShowBook({ bookInfo }) {
  // console.log(bookInfo.properties.image);
  const hasImage = bookInfo.properties.image?.value;
  return (
    <div className="singleBook">
      {!hasImage && (
        <>
          <h3 className="center">{bookInfo.title}</h3>
          <p>By: {bookInfo.properties.Author.value[0].name}</p>
          <p className="rating">{bookInfo.properties.Score__5?.value?.name}</p>
        </>
      )}
      {hasImage && (
        <>
          <img src={bookInfo.properties.image.value} />
          <p className="rating">{bookInfo.properties.Score__5?.value?.name}</p>
        </>
      )}
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
  // console.log(books);
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
          image {
            value
          }
          Finished_on {
            value {
              start
            }
          }
        }
        id
      }
    }
  }
`;
