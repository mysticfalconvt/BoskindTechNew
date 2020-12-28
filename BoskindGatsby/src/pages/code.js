import { Link, withPrefix } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import SEO from '../components/SEO';
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
    animation: 1s ease-out 0s 1 fadeIn;
    @keyframes scaleIn {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

export default function Code() {
  return (
    <div className="center">
      <Helmet>
        <script src={withPrefix('yoda.js')} type="text/javascript" />
      </Helmet>
      <SEO title="Code Stuff!" />
      <HomePageGrid>
        <AniLink cover to="/code/etchASketch">
          Etch A Sketch
        </AniLink>
        <AniLink cover to="/code/fizzBuzz">
          Fizz Buzz
        </AniLink>
        <AniLink cover to="/code/colorPickerGame">
          Color Picker Game
        </AniLink>
      </HomePageGrid>
      <YodaStyles>
        <img src="/babyYoda.png" alt="yoda" height="200" className="turt" />
      </YodaStyles>
    </div>
  );
}
