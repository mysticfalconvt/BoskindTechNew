import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Logo from './Logo';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
      animation: 1s ease-out 0s 1 slideRight;
    }
    &:nth-child(2) {
      animation: 1s ease-out 0s 1 slideRight;
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      animation: 1s ease-out 0s 1 slideLeft;
      --rotate: -1.5deg;
    }
    &:nth-child(5) {
      animation: 1s ease-out 0s 1 slideLeft;
      --rotate: -3.5deg;
    }
    &:hover {
      --rotate: 4deg;
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--red);
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
  @media (max-width: 600px) {
    --columns: 4;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--grey);
    padding-bottom: 2rem;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }
    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }
    .logo {
      transform: none;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
  }
  @keyframes slideRight {
    0% {
      transform: translateX(-500%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
  @keyframes slideLeft {
    0% {
      transform: translateX(500%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <AniLink fade duration={0.8} bg="rgba(247, 200, 68,1)" to="/units">
            Illustrative Math
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/links">
            Helpful Links
          </AniLink>
        </li>
        <li className="logo-item">
          <AniLink fade to="/">
            <Logo />
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/blog">
            Blog
          </AniLink>
        </li>
        <li>
          <AniLink fade to="/code">
            Code Projects
          </AniLink>
        </li>
      </ul>
    </NavStyles>
  );
}
