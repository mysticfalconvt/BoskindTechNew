import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

export default function PizzasPage({ data, pageContext }) {
  const units = data.units.nodes;
  console.log(units);
  return (
    <>
      <SEO title="Math Units" />
    </>
  );
}

export const query = graphql`
  query unitQuery {
    units: allSanityUnit {
      nodes {
        name
      }
    }
  }
`;
