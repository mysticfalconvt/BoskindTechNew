import { Link, withPrefix } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { HomePageGrid } from '../styles/Grids';

const YodaStyles = styled.div`
  .turt {
    position: relative;
    --x: 0;
    --y: 0;
    --rotateX: 0;
    --rotate: 0;
    transform: translateX(var(--x)) translateY(var(--y)) rotateY(var(--rotateX))
      rotate(var(--rotate));
    transition: transform 0.2s;
  }
`;

export default function Code() {
  return (
    <div className="center">
      <Helmet>
        <script src={withPrefix('yoda.js')} type="text/javascript" />
      </Helmet>
      <HomePageGrid>
        <Link to="/code/etchASketch">Etch A Sketch</Link>
        <Link to="/code/fizzBuzz">Fizz Buzz</Link>
        <Link to="/code/colorPickerGame">Color Picker Game</Link>
      </HomePageGrid>
      <YodaStyles>
        <img src="/babyYoda.png" alt="yoda" height="200" className="turt" />
      </YodaStyles>
    </div>
  );
}
