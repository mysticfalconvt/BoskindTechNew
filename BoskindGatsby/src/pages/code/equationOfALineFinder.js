import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EquationPicker from '../../components/equationPicker';
import LinearChart from '../../components/LinearChart';
import SEO from '../../components/SEO';
import SlopeCalculator from '../../components/SlopeCalculator';
import { getRandomPoints } from '../../utils/getRandomPoints';

const AppStyleForWinner = styled.div`
  padding: 1.5rem;
  .win {
    @keyframes shine {
      from {
        border-radius: 1rem;
        background-position: 200%;
      }
      to {
        border-radius: 1rem;
        background-position: -200%;
      }
    }

    --shine: rgba(0, 255, 0, 0.2);
    --background: rgba(0, 180, 0, 0.1);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 80px,
      var(--background) 160px
    );
    background-size: 500px;
    animation: shine 3s infinite alternate ease-in-out;
  }

  .lose {
    @keyframes shine {
      from {
        border-radius: 1rem;
        background-position: 200%;
      }
      to {
        border-radius: 1rem;
        background-position: -200%;
      }
    }

    --shine: rgba(255, 0, 0, 0.2);
    --background: rgba(180, 0, 0, 0.1);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 80px,
      var(--background) 160px
    );
    background-size: 500px;
    animation: shine 3s infinite alternate ease-in-out;
  }
`;

const GraphAppStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  h1 {
    /* grid-column: span 2; */
    padding: 10px;
  }
  .titles {
    display: flex;

    grid-column: span 3;
    justify-content: center;
  }
  .chart {
    grid-column: span 2;
  }
  @media (max-width: 800px) {
    grid-template-columns: auto;
    .titles {
      flex-wrap: wrap;
    }

    .chart {
      grid-column: span 1;
    }
    .titles {
      grid-column: span 1;
    }
  }
  @media (max-width: 600px) {
    font-size: 2rem;
    input {
      width: 2rem;
    }
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

function NewGameButton({
  setGameState,
  setPoints,
  setChartInfo,
  chartInfo,
  gameState,
  setWinnerClass,
}) {
  console.log('game reset');
  if (gameState === 'logged') {
    return (
      <button
        name="reset"
        type="button"
        onClick={() => {
          setChartInfo({ ...chartInfo, visible: 0, animation: 2000 });
          setGameState('restart');
          setPoints(getRandomPoints(5));
          setWinnerClass('');
        }}
      >
        {' '}
        Get New Points{' '}
      </button>
    );
  }
  return <div />;
}

function CheckMyLineButton({
  setGameState,
  setChartInfo,
  chartInfo,
  gameState,
}) {
  console.log('button');
  if (gameState === 'guessing') {
    return (
      <button
        name="button"
        type="button"
        onClick={() => {
          setGameState('check');
          setChartInfo({
            ...chartInfo,
            visible: chartInfo.visible === 1 ? 0 : 1,
            animation: 3000,
          });
        }}
      >
        {' '}
        Check my line{' '}
      </button>
    );
  }
  return <div />;
}

export default function GraphingPlayground() {
  const range = 5;
  const [chartInfo, setChartInfo] = useState({
    slope: 1,
    intercept: 1,
    min: 0 - range,
    max: range,
    visible: 0,
    animation: 3000,
  });
  const [points, setPoints] = useState(getRandomPoints(range));
  const [gameState, setGameState] = useState('guessing');
  const [winnerClass, setWinnerClass] = useState('');

  const [playRecordLineEquation, setPlayRecordLineEquation] = useState({
    correct: 0,
    incorrect: 0,
  });
  useEffect(() => {
    localStorage.getItem('playRecordLineEquation') &&
      setPlayRecordLineEquation(
        JSON.parse(localStorage.getItem('playRecordLineEquation'))
      );
  }, []);
  useEffect(
    () =>
      localStorage.setItem(
        'playRecordLineEquation',
        JSON.stringify(playRecordLineEquation)
      ),
    [playRecordLineEquation]
  );

  useEffect(() => {
    if (gameState === 'check') {
      if (
        chartInfo.slope - points.slope < 0.001 &&
        chartInfo.intercept - points.intercept < 0.001
      ) {
        setPlayRecordLineEquation({
          ...playRecordLineEquation,
          correct: (playRecordLineEquation.correct || 0) + 1,
        });
        setWinnerClass('win');
      } else {
        setPlayRecordLineEquation({
          ...playRecordLineEquation,
          incorrect: (playRecordLineEquation.incorrect || 0) + 1,
        });
        setWinnerClass('lose');
      }
      setGameState('logged');
    }
  }, [gameState]);
  return (
    <>
      <SEO title="Equation of a line game" />
      <AppStyleForWinner>
        <div className={winnerClass}>
          <GraphAppStyles>
            <div className="titles">
              <CheckMyLineButton
                chartInfo={chartInfo}
                setChartInfo={setChartInfo}
                setGameState={setGameState}
                gameState={gameState}
              />
              <h1 className="center">
                Find the equation of the line from 2 points
              </h1>
              <NewGameButton
                setGameState={setGameState}
                setPoints={setPoints}
                setChartInfo={setChartInfo}
                chartInfo={chartInfo}
                gameState={gameState}
                setWinnerClass={setWinnerClass}
              />
            </div>
            <EquationPicker
              chartInfo={chartInfo}
              points={points}
              setChartInfo={setChartInfo}
              setPoints={setPoints}
              gameState={gameState}
              setGameState={setGameState}
            />
            <div className="chart">
              <LinearChart
                className="chart"
                chartInfo={chartInfo}
                points={points}
              />
            </div>
          </GraphAppStyles>
          <div>
            Wins: {playRecordLineEquation.correct} Losses:{' '}
            {playRecordLineEquation.incorrect}
          </div>
        </div>
      </AppStyleForWinner>
    </>
  );
}
