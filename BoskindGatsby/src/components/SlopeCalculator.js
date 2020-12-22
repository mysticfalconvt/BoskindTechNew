import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SlopeCalcStyles = styled.div`
  background: var(--grey);
  display: grid;
  border-radius: 10px;
  padding: 10px;
  grid-template-columns: repeat(2, 1fr);
`;

export default function SlopeCalculator() {
  const [x1Value, setX1Value] = useState(1);
  const [y1Value, setY1Value] = useState(1);
  const [x2Value, setX2Value] = useState(1);
  const [y2Value, setY2Value] = useState(1);
  const [slope, updateSlope] = useState();
  const [yInt, updateyInt] = useState();

  useEffect(() => {
    updateSlope((y2Value - y1Value) / (x2Value - x1Value));
  }, [x1Value, x2Value, y1Value, y2Value]);

  useEffect(() => {
    updateyInt(y1Value - slope * x1Value);
  });

  const onX1Change = (e) => {
    setX1Value(e.currentTarget.value);
  };
  const onY1Change = (e) => {
    setY1Value(e.currentTarget.value);
  };
  const onX2Change = (e) => {
    setX2Value(e.currentTarget.value);
  };
  const onY2Change = (e) => {
    setY2Value(e.currentTarget.value);
  };
  return (
    <SlopeCalcStyles>
      <div>
        <p>Point 1</p>
        <div>
          <span>(</span>
          <input type="text" name="x1Value" size="2" onChange={onX1Change} />
          <span>,</span>
          <input type="text" name="y1Value" size="2" onChange={onY1Change} />
          <span>)</span>
        </div>
      </div>
      <div>
        <p>Point 2</p>
        <div>
          <span>(</span>
          <input type="text" name="x2Value" size="2" onChange={onX2Change} />
          <span>,</span>
          <input type="text" name="y2Value" size="2" onChange={onY2Change} />
          <span>)</span>
        </div>
      </div>
      <p>The slope of the line is: {slope}</p>
      <h2>
        y={slope ? `${slope}x+` : ""}
        {yInt}
      </h2>
    </SlopeCalcStyles>
  );
}
