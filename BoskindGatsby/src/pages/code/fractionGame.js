import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dice from '../../components/Dice';
import SEO from '../../components/SEO';
import computerPlayer from '../../utils/computerPlayer';

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
    text-align: center;
    background: var(--yellow);
    border-radius: 3rem;
    padding: 2rem;
    /* margin: 2rem; */
  }
  input {
    width: 50px;
  }

  button {
    text-align: center;
    max-width: max-content;
    max-height: 8rem;
    justify-self: center;

    box-shadow: var(--cast) var(--cast) 0 black;
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
  .activeTurn {
    background: var(--grey);
  }
  .unused {
    background: var(--grey);
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

function LeftUserboard({
  left,
  setLeft,
  right,
  setRight,
  dice,
  setDice,
  choosing,
  setChoosing,
  turn,
  setTurn,
  computerTurn,
  setComputerTurn,
}) {
  return (
    <div className={turn === 'left' ? 'activeTurn' : 'NotActive'}>
      <div className="fraction">
        <div
          className={!left.numerator && turn === 'left' ? 'unused' : ''}
          onClick={() => {
            if (choosing && left.numerator === 0) {
              setLeft({ ...left, numerator: dice });
              setChoosing(!choosing);
              setTurn('right');
              computerPlayer({
                dice,
                right,
                left,
                choosing,
                setChoosing,
                setRight,
                computerTurn,
                setComputerTurn,
                setDice,
                setTurn,
              });
            }
          }}
        >
          {left.numerator}
        </div>

        <div className="fractionBar" />
        <div
          className={!left.denominator && turn === 'left' ? 'unused' : ''}
          onClick={() => {
            if (choosing && left.denominator === 0) {
              setLeft({ ...left, denominator: dice });
              setChoosing(!choosing);
              setTurn('right');
              computerPlayer({
                dice,
                right,
                left,
                choosing,
                setChoosing,
                setRight,
                computerTurn,
                setComputerTurn,
                setDice,
                setTurn,
              });
            }
          }}
        >
          {left.denominator}
        </div>
        <div>
          Junk Pile
          <div
            className={!left.junk && turn === 'left' ? 'unused' : ''}
            onClick={() => {
              if (choosing && left.junk === 0) {
                setLeft({ ...left, junk: dice });
                setChoosing(!choosing);
                setTurn('right');
                computerPlayer({
                  dice,
                  right,
                  left,
                  choosing,
                  setChoosing,
                  setRight,
                  computerTurn,
                  setComputerTurn,
                  setDice,
                  setTurn,
                });
              }
            }}
          >
            {left.junk}
          </div>
        </div>
      </div>
    </div>
  );
}

function RightUserboard({
  right,
  setRight,
  dice,
  choosing,
  setChoosing,
  turn,
  setTurn,
}) {
  return (
    <div className={turn === 'right' ? 'activeTurn' : 'NotActive'}>
      <div className="fraction">
        <div
          className={!right.numerator && turn === 'right' ? 'unused' : ''}
          onClick={() => {
            if (choosing && right.numerator === 0) {
              setRight({ ...right, numerator: dice });
              setChoosing(!choosing);
              setTurn('left');
            }
          }}
        >
          {right.numerator}
        </div>

        <div className="fractionBar" />
        <div
          className={!right.denominator && turn === 'right' ? 'unused' : ''}
          onClick={() => {
            if (choosing && right.denominator === 0) {
              setRight({ ...right, denominator: dice });
              setChoosing(!choosing);
              setTurn('left');
            }
          }}
        >
          {right.denominator}
        </div>
        <div>
          Junk Pile
          <div
            className={!right.junk && turn === 'right' ? 'unused' : ''}
            onClick={() => {
              if (choosing && right.junk === 0) {
                setRight({ ...right, junk: dice });
                setChoosing(!choosing);
                setTurn('left');
              }
            }}
          >
            {right.junk}
          </div>
        </div>
      </div>
    </div>
  );
}

function Inequality({ sign }) {
  return <h1 className="sign">{sign}</h1>;
}

function DiceRoller({ dice, setDice, choosing, setChoosing }) {
  return (
    <div>
      <Dice
        dice={dice}
        setDice={setDice}
        clickable={!choosing}
        setChoosing={setChoosing}
      />
    </div>
  );
}

export default function fractionGame() {
  const [left, setLeft] = useState({ junk: 0, numerator: 0, denominator: 0 });
  const [right, setRight] = useState({ junk: 0, numerator: 0, denominator: 0 });
  const [sign, setSign] = useState('?=?');
  const [dice, setDice] = useState(4);
  const [choosing, setChoosing] = useState(false);
  const [turn, setTurn] = useState('left');
  const [computerTurn, setComputerTurn] = useState(1);
  return (
    <div>
      <SEO title="Fraction Game" />
      <h1 className="center">The fracton dice game</h1>
      <h4 className="center">The game description goes here</h4>
      <GameboardStyles>
        <LeftUserboard
          left={left}
          setLeft={setLeft}
          right={right}
          setRight={setRight}
          dice={dice}
          setDice={setDice}
          turn={turn}
          choosing={choosing}
          setChoosing={setChoosing}
          setTurn={setTurn}
          computerTurn={computerTurn}
          setComputerTurn={setComputerTurn}
        />
        <Inequality sign={sign} style={{ background: 'blue' }} />
        <RightUserboard
          right={right}
          setRight={setRight}
          choosing={choosing}
          dice={dice}
          turn={turn}
          setTurn={setTurn}
          setChoosing={setChoosing}
          className="right"
        />
        <DiceRoller
          dice={dice}
          choosing={choosing}
          setChoosing={setChoosing}
          setDice={setDice}
        />
        <button
          type="button"
          className="check button"
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
