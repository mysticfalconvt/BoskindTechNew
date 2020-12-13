import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-items: center;
  border: 1px solid var(--grey);
  margin: 2rem 0;
  text-align: center;
  border-radius: 5px;
  & > * {
    padding: 1rem;
    flex: 1;
    border-right: 1px solid var(--grey);
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--red);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
  @media (max-width: 800px) {
    .word {
      display: none;
    }
    font-size: 1.4rem;
  }
`;

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <PaginationStyles>
      <Link
        disabled={!hasPrevPage}
        to={`/${base}/${prevPage}`}
        title="Previous Page"
      >
        ← <span className="word">Prev</span>
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          className={currentPage === 1 && i === 0 ? 'current' : ''}
          to={`/${base}/${i > 0 ? i + 1 : ''}`}
          key={`page${i}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link
        disabled={!hasNextPage}
        to={`/${base}/${nextPage}`}
        title="Next Page"
      >
        <span className="word">Next</span> →
      </Link>
    </PaginationStyles>
  );
}
