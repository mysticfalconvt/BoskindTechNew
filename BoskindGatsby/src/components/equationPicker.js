import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SingleFractionStyle } from '../styles/FractionStyles';

const EquationPickerStyles = styled.div`
  padding: 2rem;
  div {
    background: inherit;
  }
  span.nowrap {
    white-space: nowrap;
  }
  .inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      width: 7rem;
      @media (max-width: 600px) {
        font-size: 2rem;

        width: 4rem;
      }
    }
  }
  button {
    margin-right: 10px;
  }
`;

function EquationPicker({
  points,
  chartInfo,
  setChartInfo,
  gameState,
  setGameState,
}) {
  const [slopeFraction, setSlopeFraction] = useState({
    numerator: 1,
    denominator: 1,
  });
  useEffect(
    () =>
      setChartInfo({
        ...chartInfo,
        slope: slopeFraction.numerator / slopeFraction.denominator,
        animation: 0,
      }),
    [slopeFraction]
  );
  useEffect(() => {
    if (gameState === 'restart') {
      setChartInfo({ ...chartInfo, intercept: 1 });
      setSlopeFraction({ numerator: 1, denominator: 1 });
      setGameState('guessing');
    }
  }, [gameState]);

  const editableValues = gameState !== 'guessing';
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
            readOnly={editableValues}
            name="slopeNumerator"
            value={slopeFraction.numerator}
            onChange={(e) =>
              setSlopeFraction({ ...slopeFraction, numerator: e.target.value })
            }
          />
          <div className="fractionBar" />
          <input
            type="number"
            readOnly={editableValues}
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
          readOnly={editableValues}
          name="intercept"
          value={chartInfo.intercept}
          onChange={(e) => {
            setChartInfo({
              ...chartInfo,
              intercept: Number(e.target.value),
              animation: 0,
            });
          }}
        />
      </div>
    </EquationPickerStyles>
  );
}

export default EquationPicker;
