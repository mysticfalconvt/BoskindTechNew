import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';

const LessonGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
`;

export default function SingleUnitPage({ data }) {
  const { unit } = data;
  const videos = data.lessons.nodes;
  return (
    <>
      <SEO title={unit.name} image={unit.image?.asset?.fluid?.src} />
      <LessonGrid>
        <h3 className="center">
          Grade {unit.GradeLevel} - Unit #{unit.UnitNumber}
        </h3>
        <h2 className="center mark">{unit.name}</h2>

        <h3 className="center">
          <a href={unit.Link} className="center">
            Link to Illustrative
          </a>
        </h3>
      </LessonGrid>
      <h2 className="center">Math Videos</h2>
      <LessonGrid>
        {videos.map((video) => (
          <h2 key={`video-${video.id}`} className="center">
            <a href={video.link}>{video.name}</a>
          </h2>
        ))}
      </LessonGrid>
      <LessonGrid>
        <div />
        <div>
          <Img fluid={unit.image.asset.fluid} className="center" />
        </div>
      </LessonGrid>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    unit: sanityUnit(slug: { current: { eq: $slug } }) {
      name
      slug {
        current
      }
      GradeLevel
      UnitNumber
      Link
      id
      image {
        asset {
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }

    lessons: allSanityVideo(
      filter: { unit: { slug: { current: { eq: $slug } } } }
    ) {
      nodes {
        name
        id
        link
      }
    }
  }
`;
