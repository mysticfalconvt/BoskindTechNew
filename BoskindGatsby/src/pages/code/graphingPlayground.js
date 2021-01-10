import React, { useEffect, useState } from 'react';
import LinearChart from '../../components/LinearChart';
import SEO from '../../components/SEO';
import SlopeCalculator from '../../components/SlopeCalculator';

export default function GraphingPlayground() {
  const [chartInfo, setChartInfo] = useState({
    slope: 2,
    intercept: -3,
    min: -10,
    max: 10,
  });
  return (
    <>
      <SEO title="Graphing Playground" />
      <div>
        <h1>Graphing Playground</h1>
        <SlopeCalculator />
        <LinearChart chartInfo={chartInfo} />
      </div>
    </>
  );
}
