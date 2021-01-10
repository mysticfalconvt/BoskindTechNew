import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EquationPicker from '../../components/equationPicker';
import LinearChart from '../../components/LinearChart';
import SEO from '../../components/SEO';
import SlopeCalculator from '../../components/SlopeCalculator';
import { getRandomPoints } from '../../utils/getRandomPoints';

const GraphAppStyles = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 400px) auto;

  @media (max-width: 800px) {
    grid-template-columns: auto;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
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
  });
  const [points, setPoints] = useState(getRandomPoints(5));

  return (
    <>
      <SEO title="Equation of a line game" />
      <GraphAppStyles>
        <h1 className="center">Find the equation of the line from 2 points</h1>
        <EquationPicker
          chartInfo={chartInfo}
          points={points}
          setChartInfo={setChartInfo}
          setPoints={setPoints}
        />
        <LinearChart chartInfo={chartInfo} points={points} />
      </GraphAppStyles>
    </>
  );
}
