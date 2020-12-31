import React from 'react';
import styled from 'styled-components';

const DiceContainer = styled.div`
  padding: 200px;
  background: unset;

  all: unset;
  width: 200px;
  height: auto;
  perspective: 50px;
  margin: 0px;

  .cube {
    /* position: auto; */
    width: auto;
    height: auto;
    background: unset;
    transform-style: preserve-3d;
    transform: rotate3d(1, 1, 0, 45deg);
    animation: turn 5s linear infinite;
    font-size: 4rem;
    :hover {
      font-size: 5rem;
    }
    &.clickable {
      .face {
        background: var(--red);
      }
    }
  }

  .face {
    width: 100px;
    height: 100px;
    background: var(--yellow);
    padding: 0;
    border-radius: 0%;
    border: 3px solid black;
    position: absolute;
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
  }
  .front {
    transform: translateX(0px) translateZ(50px);
  }
  .back {
    transform: translateX(0px) translateZ(-50px) rotateY(180deg);
  }
  .left {
    transform: translateX(-50px) rotateY(-90deg);
  }

  .right {
    transform: translateX(50px) rotateY(90deg);
  }
  .top {
    transform: translateX(0px) translateY(-50px) rotateX(90deg);
  }

  .bottom {
    transform: translateX(0px) translateY(50px) rotateX(-90deg);
  }
  @keyframes turn {
    from {
      transform: rotate3d(0, 0, 0, 0);
    }
    to {
      transform: rotate3d(1, 1, 0, 360deg);
    }
  }
`;

export default function Dice({ dice, setDice, clickable, setChoosing }) {
  const cubeClass = `cube ${!clickable ? 'clickable' : ''}`;
  return (
    <DiceContainer className="container">
      <div
        className={cubeClass}
        onClick={() => {
          if (clickable) {
            setDice(Math.floor(Math.random() * 6 + 1));
            setChoosing(clickable);
          }
        }}
      >
        <div className="face top">{dice}</div>
        <div className="face bottom">{dice}</div>
        <div className="face left">{dice}</div>
        <div className="face right">{dice}</div>
        <div className="face front">{dice}</div>
        <div className="face back">{dice}</div>
      </div>
    </DiceContainer>
  );
}
