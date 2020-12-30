import React, { useState } from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';

const GameboardStyles = styled.div`
  background: var(--yellow);
  border-radius: 2em;
  display: grid;

  grid-template-columns: minmax(220px, 300px) auto minmax(220px, 300px);
  grid-gap: 2rem;
  .sign {
    align-self: center;
    text-align: center;
    font-size: 6rem;
    min-width: max-content;
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

  button {
    text-align: center;
  }
  @media (max-width: 600px) {
    grid-gap: 1rem;
    font-size: 1.5rem;
    grid-template-columns: minmax(140px, 300px) auto minmax(140px, 300px);
    div {
      margin: 0.5rem;
      padding: 0.5rem;
    }
    input {
      width: 30px;
    }
  }
`;

function getGreater({ left, right }) {
  const leftValue = left.numerator / left.denominator;
  const rightValue = right.numerator / right.denominator;
  if (leftValue > rightValue) {
    return '>';
  }
  if (rightValue > leftValue) {
    return '<';
  }
  if (rightValue === leftValue) {
    return '==';
  }

  return 'error';
}
function checkSign({ right, left, sign, setSign }) {
  const greater = getGreater({ right, left });

  setSign(greater);
}

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
      <div>
        Junk Pile
        <input
          name="leftJunk"
          type="number"
          value={left.junk}
          min="1"
          onChange={(e) => setLeft({ ...left, junk: e.target.value })}
        />
      </div>
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
      <div>
        Junk Pile
        <input
          name="rightJunk"
          type="number"
          value={right.junk}
          min="0"
          onChange={(e) => setRight({ ...right, junk: e.target.value })}
        />
      </div>
    </div>
  );
}

function Inequality({ sign, setSign, left, right }) {
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
        <button
          type="button"
          onClick={() => {
            checkSign({ left, right, setSign, sign });
          }}
        >
          Click here to check winner
        </button>
      </GameboardStyles>
    </div>
  );
}
