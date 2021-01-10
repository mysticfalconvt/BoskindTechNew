import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SingleFractionStyle } from '../styles/FractionStyles';
import { getRandomPoints } from '../utils/getRandomPoints';

const EquationPickerStyles = styled.div`
  padding: 2rem;

  span.nowrap {
    white-space: nowrap;
  }
  .inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 7rem;
    }
  }
  button {
    margin-right: 10px;
  }
`;

function EquationPicker({ points, chartInfo, setChartInfo, setPoints }) {
  const [slopeFraction, setSlopeFraction] = useState({
    numerator: 1,
    denominator: 1,
  });
  useEffect(
    () =>
      setChartInfo({
        ...chartInfo,
        slope: slopeFraction.numerator / slopeFraction.denominator,
      }),
    [slopeFraction]
  );
  return (
    <EquationPickerStyles>
      <h3 className="center">
        Equation of the line
        <span> through </span>
        <span className="nowrap">
          ({points.x1}, {points.y1})
        </span>
        &
        <span className="nowrap">
          ({points.x2}, {points.y2})
        </span>
      </h3>
      <p className="center">
        y={chartInfo.slope}x
        {/* display the plus b only if b is not 0 and only display the plus if its positive */}
        {chartInfo.intercept !== 0
          ? chartInfo.intercept >= 0
            ? `+${chartInfo.intercept}`
            : chartInfo.intercept
          : ''}
      </p>
      <div className="inputs">
        <div>y=</div>
        <SingleFractionStyle>
          <input
            type="number"
            name="slopeNumerator"
            value={slopeFraction.numerator}
            onChange={(e) =>
              setSlopeFraction({ ...slopeFraction, numerator: e.target.value })
            }
          />
          <div className="fractionBar" />
          <input
            type="number"
            name="slopeDenominator"
            value={slopeFraction.denominator}
            onChange={(e) => {
              setSlopeFraction({
                ...slopeFraction,
                denominator: e.target.value,
              });
            }}
          />
        </SingleFractionStyle>
        x+
        <input
          className="intercept"
          type="number"
          name="intercept"
          value={chartInfo.intercept}
          onChange={(e) => {
            setChartInfo({ ...chartInfo, intercept: Number(e.target.value) });
            console.log(chartInfo);
          }}
        />
      </div>
      <button
        name="button"
        type="button"
        onClick={() =>
          setChartInfo({
            ...chartInfo,
            visible: chartInfo.visible === 1 ? 0 : 1,
          })
        }
      >
        {' '}
        Check my line{' '}
      </button>
      <button
        name="reset"
        type="button"
        onClick={() => {
          setChartInfo({ ...chartInfo, visible: 0 });
          setPoints(getRandomPoints(5));
        }}
      >
        {' '}
        Get New Points{' '}
      </button>
    </EquationPickerStyles>
  );
}

export default EquationPicker;
