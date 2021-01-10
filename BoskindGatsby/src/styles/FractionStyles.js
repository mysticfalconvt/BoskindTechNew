import React from 'react';
import styled from 'styled-components';

export const SingleFractionStyle = styled.div`
  background: var(--yellow);
  display: grid;
  border-radius: 0.5rem;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  padding: 0.5rem;
  margin: 0.8rem;
  .fractionBar {
    background: var(--black);
    height: 0.5rem;
  }

  input {
    width: 10rem;
    @media (max-width: 400px) {
      width: 5rem;
    }
  }
`;
