import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import UnitList from '../components/UnitList';

export default function PizzasPage({ data, pageContext }) {
  const units = data.units.nodes;
  console.log(units);
  return (
    <>
      <SEO title="Math Units" />
      <UnitList units={units} />
    </>
  );
}

export const query = graphql`
  query unitQuery {
    units: allSanityUnit(sort: { fields: [UnitNumber], order: ASC }) {
      nodes {
        name
        slug {
          current
        }
        GradeLevel
        UnitNumber
        Link
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
