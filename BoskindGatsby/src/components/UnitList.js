import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const UnitGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto auto;
`;

const UnitStyles = styled.div`
  display: grid;
  animation: 0.5s ease-out 0s 1 fadeIn;
  /* Take your row sizing not from the pizzaStyles div, but from the  PizzaGridStyles grid */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
  :hover {
    transform: scale(1.02);
    transition: 0.2s;
    text-shadow: 0 0 3px var(--red);
  }
  @keyframes fadeIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

function SingleUnit({ unit }) {
  return (
    <UnitStyles>
      <Link to={`/unit/${unit.slug.current}`}>
        <p className="center">
          Grade {unit.GradeLevel} - Unit #{unit.UnitNumber}
        </p>
        <Img fluid={unit.image.asset.fluid} />

        <h3 className="center">{unit.name}</h3>
      </Link>
    </UnitStyles>
  );
}

export default function UnitList({ units }) {
  return (
    <UnitGridStyles>
      {units.map((unit) => (
        <SingleUnit unit={unit} key={`Unit - ${unit.name}`} />
      ))}
    </UnitGridStyles>
  );
}
