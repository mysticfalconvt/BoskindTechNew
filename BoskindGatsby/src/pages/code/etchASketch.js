import React from 'react';
import { withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const etchStyles = styled.div`
  canvas {
    border: 30px solid #e80000;
    border-radius: 10px;
    /* Set the width and height to half the actual size so it doesn't look pixelated */
    width: 800px;
    height: 500px;
    background: white;
  }

  canvas.shake {
    animation: shake 0.5s linear 2;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

export default function etchASketch() {
  return (
    <>
      <Helmet>
        <script src={withPrefix('etch.js')} type="text/javascript" />
      </Helmet>
      <etchStyles className="canvasWrap">
        <canvas width="1000" height="600" id="etch-a-sketch" />
        <div className="buttons">
          <button className="shake" type="button">
            Shake!
          </button>
        </div>
      </etchStyles>
    </>
  );
}
