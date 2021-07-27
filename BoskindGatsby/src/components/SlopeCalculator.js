import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SlopeCalcStyles = styled.div`
  background: var(--grey);
  display: grid;
  border-radius: 10px;
  padding: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
`;

export default function SlopeCalculator() {
  const [x1Value, setX1Value] = useState(1);
  const [y1Value, setY1Value] = useState(1);
  const [x2Value, setX2Value] = useState(1);
  const [y2Value, setY2Value] = useState(1);
  const [slope, updateSlope] = useState();
  const [yInt, updateyInt] = useState();

  useEffect(() => {
    if(Number(x1Value)  && Number(y1Value) && Number(x2Value) && Number(y2Value)) {
    updateSlope(((y2Value - y1Value) / (x2Value - x1Value)));
    }else{
    updateSlope("No Slope")}
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
  const slopeRounded = Number(slope) ? Math.round(slope * 100) / 100: "No Slope";
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
      <p>The slope of the line is: {slopeRounded}</p>
      <h2>{(slope == "No Slope") ? "No Slope" : `y = ${slopeRounded}x + ${yInt}`}</h2>
        
  
    </SlopeCalcStyles>
  );
}
