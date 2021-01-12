import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EquationPicker from '../../components/equationPicker';
import LinearChart from '../../components/LinearChart';
import SEO from '../../components/SEO';
import SlopeCalculator from '../../components/SlopeCalculator';
import { getRandomPoints } from '../../utils/getRandomPoints';

const GraphAppStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

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
  const [gameState, setGameState] = useState('starting');

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
      setPlayRecordLineEquation({
        ...playRecordLineEquation,
        correct: playRecordLineEquation.correct + 1,
      });
      setGameState('guessing');
    }
  }, [gameState]);
  return (
    <>
      <SEO title="Equation of a line game" />
      <GraphAppStyles>
        <div className="titles">
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
          <h1 className="center">
            Find the equation of the line from 2 points
          </h1>
          <button
            name="reset"
            type="button"
            onClick={() => {
              setChartInfo({ ...chartInfo, visible: 0, animation: 3000 });
              setGameState('newGame');
              setPoints(getRandomPoints(5));
            }}
          >
            {' '}
            Get New Points{' '}
          </button>
        </div>
        <EquationPicker
          chartInfo={chartInfo}
          points={points}
          setChartInfo={setChartInfo}
          setPoints={setPoints}
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
    </>
  );
}
