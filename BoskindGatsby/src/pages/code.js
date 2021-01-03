import { graphql, Link, withPrefix } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import SEO from '../components/SEO';
import { HomePageGrid } from '../styles/Grids';

const YodaStyles = styled.div`
  .turt {
    z-index: 1000;
    position: relative;
    --x: 0;
    --y: 0;
    --rotateX: 0;
    --rotate: 0;
    margin-bottom: 200px;
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

export default function Code({ data }) {
  return (
    <div className="center">
      <Helmet>
        <script src={withPrefix('yoda.js')} type="text/javascript" />
      </Helmet>
      <SEO title="Code Stuff!" />
      <HomePageGrid>
        {data.files.nodes.map((singleFile) => {
          const rawName = singleFile.internalComponentName;
          const spacedName = rawName.replace(/([A-Z])/g, ' $1');
          const formatedName = spacedName.split(' ').slice(3).join(' ');
          return (
            <AniLink key={singleFile.path} fade to={singleFile.path}>
              <p>{formatedName}</p>
            </AniLink>
          );
        })}
      </HomePageGrid>
      <YodaStyles>
        <img src="/babyYoda.png" alt="yoda" height="200" className="turt" />
      </YodaStyles>
    </div>
  );
}
export const query = graphql`
  query fileQuery {
    files: allSitePage(filter: { path: { regex: "/code/./" } }) {
      nodes {
        path
        internalComponentName
      }
    }
  }
`;
