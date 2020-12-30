import React, { useState } from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';

const GameboardStyles = styled.div`
  background: var(--yellow);
  border-radius: 2em;
  display: grid;

  grid-template-columns: minmax(200px, 1fr) auto minmax(200px, 1fr);
  grid-gap: 2rem;
  .sign {
    align-self: center;
  }
  .fraction {
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
  }
  .fractionBar {
    all: unset;
    width: 10rem;
    height: 5px;
    margin: 5px;
    background: var(--black);
  }
  div {
    background: var(--grey);
    border-radius: 3rem;
    padding: 2rem;
    margin: 2rem;
  }
  input {
    width: 50px;
  }
`;

function LeftUserboard({ left, setLeft }) {
  return (
    <div>
      <div className="fraction">
        <input
          name="leftNumerator"
          type="number"
          value={left.numerator}
          min="1"
          onChange={(e) => setLeft({ ...left, numerator: e.target.value })}
        />
        <div className="fractionBar" />
        <input
          name="leftdenominator"
          type="number"
          value={left.denominator}
          min="1"
          onChange={(e) => setLeft({ ...left, denominator: e.target.value })}
        />
      </div>
      <label htmlFor="leftJunk">Junk Pile</label>
      <input
        name="leftJunk"
        type="number"
        value={left.junk}
        min="1"
        onChange={(e) => setLeft({ ...left, junk: e.target.value })}
      />
    </div>
  );
}

function RightUserboard({ right, setRight }) {
  return (
    <div>
      <div className="fraction">
        <input
          name="rightNumerator"
          type="number"
          value={right.numerator}
          min="1"
          onChange={(e) => setRight({ ...right, numerator: e.target.value })}
        />
        <div className="fractionBar" />
        <input
          name="rightdenominator"
          type="number"
          value={right.denominator}
          min="1"
          onChange={(e) => setRight({ ...right, denominator: e.target.value })}
        />
      </div>
      <label htmlFor="rightJunk">Junk Pile</label>
      <input
        name="rightJunk"
        type="number"
        value={right.junk}
        min="0"
        onChange={(e) => setRight({ ...right, junk: e.target.value })}
      />
    </div>
  );
}

function Inequality({ sign }) {
  console.log(sign);
  return <h1 className="sign">{sign}</h1>;
}

export default function fractionGame() {
  const [left, setLeft] = useState({ junk: 0, numerator: 0, denominator: 0 });
  const [right, setRight] = useState({ junk: 0, numerator: 0, denominator: 0 });
  const [sign, setSign] = useState('?=?');
  console.log(sign);
  console.log(left);
  console.log(right);
  return (
    <div>
      <SEO title="Fraction Game" />
      <GameboardStyles>
        <LeftUserboard left={left} setLeft={setLeft} className="left" />
        <Inequality sign={sign} style={{ background: 'blue' }} />
        <RightUserboard right={right} setRight={setRight} className="right" />
      </GameboardStyles>
    </div>
  );
}
