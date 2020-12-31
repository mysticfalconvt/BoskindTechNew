import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Dice from '../../components/Dice';
import SEO from '../../components/SEO';
import computerPlayer from '../../utils/computerPlayer';

const GameboardStyles = styled.div`
  background: var(--yellow);
  border-radius: 2em;
  display: grid;
  min-height: max-content;

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
  .winner {
    background: green;
    div {
      background: lightgreen;
    }
  }
  .hidden {
    display: none;
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
async function checkSign({ right, left, setSign }) {
  const greater = getGreater({ right, left });

  setSign(greater);
  return greater;
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
  leftWinner,
}) {
  return (
    <div
      className={
        turn === 'left' && computerTurn < 4 ? 'activeTurn' : 'NotActive'
      }
    >
      <div className={leftWinner ? 'winner fraction' : 'fraction'}>
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
  rightWinner,
}) {
  return (
    <div className={turn === 'right' ? 'activeTurn' : 'NotActive'}>
      <div className={rightWinner ? 'winner fraction' : 'fraction'}>
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

async function setWinner(
  computerTurn,
  right,
  left,
  setSign,
  setRightWinner,
  setLeftWinner,
  sign,
  setComputerTurn,
  playRecord,
  setPlayRecord
) {
  if (computerTurn === 4) {
    const newSign = await checkSign({ right, left, setSign });
    if (newSign === '>') {
      setLeftWinner(true);
      setPlayRecord({ ...playRecord, wins: playRecord.wins + 1 });
    } else if (newSign === '<') {
      setPlayRecord({ ...playRecord, losses: playRecord.losses + 1 });
      setRightWinner(true);
    } else if (newSign === '==') {
      setRightWinner(true);
      setLeftWinner(true);
    }

    setComputerTurn(5);
  }
}

export default function FractionGame() {
  const [left, setLeft] = useState({ junk: 0, numerator: 0, denominator: 0 });
  const [right, setRight] = useState({ junk: 0, numerator: 0, denominator: 0 });
  const [sign, setSign] = useState('?=?');
  const [dice, setDice] = useState(4);
  const [choosing, setChoosing] = useState(false);
  const [turn, setTurn] = useState('left');
  const [computerTurn, setComputerTurn] = useState(1);
  const [leftWinner, setLeftWinner] = useState(false);
  const [rightWinner, setRightWinner] = useState(false);
  const [playRecord, setPlayRecord] = useState(
    localStorage && localStorage.getItem('playRecord')
      ? JSON.parse(localStorage.getItem('playRecord'))
      : { wins: 0, losses: 0 }
  );

  useEffect(
    () => localStorage.setItem('playRecord', JSON.stringify(playRecord)),
    [playRecord]
  );

  useEffect(() => {
    setWinner(
      computerTurn,
      right,
      left,
      setSign,
      setRightWinner,
      setLeftWinner,
      sign,
      setComputerTurn,
      playRecord,
      setPlayRecord
    );
  }, [computerTurn]);
  function startNewGame(props) {
    setLeft({ junk: 0, numerator: 0, denominator: 0 });
    setRight({ junk: 0, numerator: 0, denominator: 0 });
    setSign('?=?');
    setDice(4);
    setChoosing(false);
    setTurn('left');
    setComputerTurn(1);
    setLeftWinner(false);
    setRightWinner(false);
  }

  function ResetButton() {
    return (
      <button
        type="button"
        className={leftWinner || rightWinner ? '' : 'hidden'}
        onClick={() =>
          startNewGame({
            setLeft,
            setRight,
            setSign,
            setDice,
            setChoosing,
            setTurn,
            setComputerTurn,
            setLeftWinner,
            setRightWinner,
          })
        }
      >
        Start a new game
      </button>
    );
  }

  return (
    <div style={{ height: '700px' }}>
      <SEO title="Fraction Game" />
      <h1 className="center">The fracton dice game</h1>
      <h4 className="center">
        The goal of this game is to get the greatest fraction. <br />
        Start out by rolling the dice and then you can put the value of that
        roll into the Numerator, Denominator or your junk pile.
        <br /> Complete 3 rolls and the player with the greatest value wins.
      </h4>
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
          leftWinner={leftWinner}
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
          rightWinner={rightWinner}
        />
        <ResetButton leftWinner={leftWinner} rightWinner={rightWinner} />
        {/* <button
          type="button"
          className="check button"
          onClick={() => {
            checkSign({ left, right, setSign, sign });
          }}
        >
          Click here to check winner
        </button> */}
        <DiceRoller
          dice={dice}
          choosing={choosing}
          setChoosing={setChoosing}
          setDice={setDice}
        />
      </GameboardStyles>
      <div>
        Wins: {playRecord.wins} Losses: {playRecord.losses}
      </div>
    </div>
  );
}
