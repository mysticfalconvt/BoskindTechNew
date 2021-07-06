import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import UnitList from '../components/UnitList';

export default function UnitsPage({ data, pageContext }) {
  const units = data.units.nodes;
  return (
    <>
      <SEO title="Math Units" />
      <h1 className="center">Illustrative Math Grade 8</h1>

      <h2 className="center">Math Videos</h2>
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
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
