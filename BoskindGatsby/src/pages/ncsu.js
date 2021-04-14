import React from 'react';
import styled from 'styled-components';

const ColumnsStyles = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 100px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export default function schoolIdeas() {
  return (
    <div>
      <h1 className="center">NCSU Benefits</h1>
      <ColumnsStyles>
        <div>
          <p>
            In my time at NCUJHS I have become more and more focused on
            supporting the technology of the school. As the staff of the school
            learned of my skills they have relied more and more on my abilities
            to improve their effectiveness through technology.
          </p>
          <p>One of my most useful skills is software engineering. </p>
        </div>
        <div>
          <h3>Specific applications</h3>
          <ul>
            <li>
              <a href="/blog/ncujhs-tech-guided-tour">School Dashboard</a>
            </li>
          </ul>
        </div>
      </ColumnsStyles>
    </div>
  );
}
