import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 30em;
  height: 30em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: 1em;
  background: whitesmoke url(${stripes});
  background-size: 150em;
  border: var(--borderSize) solid var(--red);
  display: flex;
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }
  .est {
    font-size: 1.5em;
    align-self: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
    transform: translateY(-0.7em);
  }

  .tech {
    font-size: 3.2em;
    letter-spacing: 0.2em;
    transform: translateY(-0.15em);
  }
  .name {
    transform: scale(1.4);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    perspective: 100px;
  }
  .letter {
    font-size: 3.2em;
    color: var(--yellow);
    --scale: 1.4;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
    &.b {
      --translateX: -0.05;
      --scale: 1.9;
    }
    &.o {
      --rotate: 2deg;
      --scale: 0.9;
      --translateX: 0.05em;
      --translateY: +0.15em;
    }
    &.s {
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.k {
      --rotate: 3deg;
      --scale: 0.9;
      --translateX: 0.1em;
      --translateY: 0.23em;
    }
    &.i {
      --rotate: -12deg;
      --scale: 1.2;
      --translateX: 0.06em;
    }
    &.n {
      --translateX: 0.1em;
      --translateY: -0.2em;
      --rotate: 2deg;
      --scale: 0.9;
    }
    &.d {
      --rotate: 12deg;
      --scale: 0.9;
      --translateY: 0.1em;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="est">EST 1981</span>
        <h1>
          <span className="name">
            <span className="letter b">B</span>
            <span className="letter o">O</span>
            <span className="letter s">S</span>
            <span className="letter k">K</span>
            <span className="letter i">I</span>
            <span className="letter n">N</span>
            <span className="letter d">D</span>
          </span>
          <span className="tech">.TECH</span>
        </h1>
      </div>
    </LogoStyles>
  );
}
