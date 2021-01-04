import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const GameStyle = styled.div`
  .lose {
    background: var(--red);
  }
  .win {
    background: green;
  }
`;

const HeaderStyles = styled.h1`
  text-align: center;
  @media (max-width: 500px) {
    font-size: 2.2rem;
  }
`;

const GameBoardStyles = styled.div`
  background: var(--yellow);
  display: grid;
  grid-template-columns: repeat(6, auto);
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 2rem;
  font-size: 6rem;
  width: auto;
  .lose {
    background: red;
  }

  button {
    font-size: 4rem;
  }

  @media (max-width: 800px) {
    font-size: 4.5rem;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(5, auto);

    font-size: 2.5rem;
    button {
      grid-column: 1/6;
      width: auto;
    }
  }
  @media (max-width: 350px) {
    font-size: 2rem;
  }
`;

const SingleFractionStyle = styled.div`
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

function checkFraction(props) {
  const fractionOne =
    props.fractionValues.numeratorOne / props.fractionValues.denominatorOne;
  const fractionTwo =
    props.fractionValues.numeratorTwo / props.fractionValues.denominatorTwo;
  const answer = fractionOne + fractionTwo;
  const guess = props.answerNumerator / props.answerDenominator;
  console.log(answer);
  console.log(guess);
  console.log(answer === guess);
  if (answer === guess) {
    props.setGameState('win');
  } else {
    props.setGameState('lose');
  }
}

function generateFractions(setFractionValues, max) {
  const denominatorOne = Math.ceil(Math.random() * (max - 2) + 2);
  const denominatorTwo = Math.ceil(Math.random() * (max - 2) + 2);
  const numeratorOne = Math.ceil(Math.random() * denominatorOne);
  const numeratorTwo = Math.ceil(Math.random() * denominatorTwo);
  setFractionValues({
    numeratorOne,
    denominatorOne,
    numeratorTwo,
    denominatorTwo,
  });
}

function GameButton({
  fractionValues,
  answerNumerator,
  answerDenominator,
  setGameState,
  gameState,
}) {
  if (gameState === 'answering') {
    return (
      <button
        type="button"
        name="newRound"
        onClick={() =>
          checkFraction({
            fractionValues,
            answerNumerator,
            answerDenominator,
            setGameState,
          })
        }
      >
        Check <br />
        Answer
      </button>
    );
  }
  return (
    <button
      type="button"
      name="checkAnswer"
      onClick={() => setGameState('newGame')}
    >
      New
      <br />
      Round
    </button>
  );
}

function newGame(props) {
  generateFractions(props.setFractionValues, props.maxFractionSize);
  props.setGameState('answering');
}

export default function addingFractions() {
  const [fractionValues, setFractionValues] = useState({});
  const [answerNumerator, setAnswerNumerator] = useState(Number);
  const [answerDenominator, setAnswerDenominator] = useState(Number);
  const [gameState, setGameState] = useState('answering');
  const [maxFractionSize, setMaxFractionSize] = useState(10);

  useEffect(() => {
    if (gameState === 'newGame') {
      newGame({
        fractionValues,
        answerNumerator,
        answerDenominator,
        setGameState,
        setFractionValues,
        maxFractionSize,
      });
    }
  }, [gameState]);
  useEffect(() => {
    generateFractions(setFractionValues, maxFractionSize);
  }, []);
  return (
    <GameStyle>
      <HeaderStyles>adding fractions game</HeaderStyles>
      <GameBoardStyles className={gameState}>
        <SingleFractionStyle>
          <h3>{fractionValues.numeratorOne}</h3>
          <div className="fractionBar" />
          <h3>{fractionValues.denominatorOne}</h3>
        </SingleFractionStyle>
        <div className="plus">+</div>
        <SingleFractionStyle>
          <h3>{fractionValues.numeratorTwo}</h3>
          <div className="fractionBar" />
          <h3>{fractionValues.denominatorTwo}</h3>
        </SingleFractionStyle>
        <div>=</div>
        <SingleFractionStyle>
          <input
            className="answer"
            type="number"
            name="answerNumerator"
            value={answerNumerator}
            onChange={(e) => setAnswerNumerator(e.target.value)}
          />
          <div className="fractionBar" />
          <input
            className="answer"
            type="number"
            name="answerDenominator"
            value={answerDenominator}
            onChange={(e) => {
              setAnswerDenominator(e.target.value);
            }}
          />
        </SingleFractionStyle>
        <GameButton
          fractionValues={fractionValues}
          answerNumerator={answerNumerator}
          answerDenominator={answerDenominator}
          gameState={gameState}
          setGameState={setGameState}
        />
      </GameBoardStyles>
    </GameStyle>
  );
}
