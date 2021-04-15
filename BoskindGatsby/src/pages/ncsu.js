import React from 'react';
import styled from 'styled-components';

const ColumnsStyles = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  li {
    padding: 10px;
  }
  div {
    border: 2px solid var(--grey);
    padding: 5px;
    border-radius: 1rem;
  }
`;

export default function schoolIdeas() {
  return (
    <div>
      <ColumnsStyles>
        <div>
          <h1 className="center">Benefits of a staff software engineer</h1>
          <p>
            In my time at NCUJHS I have become more and more focused on
            supporting the technology of the school. As the staff of the school
            learned of my skills they have increasingly relied on my abilities
            to improve their effectiveness through technology.
          </p>
          <p>
            One of my most useful skills is software engineering. As technology
            becomes more and more a part of every classroom and more schools
            develop a 1-1 device policy it is becoming more important to have
            applications designed around the needs of our specific schools. The
            software used in our schools comes from many different sources.
            Teachers and students are frequently overwhelmed by the number of
            different websites they must remember and access. By creating custom
            software that combines an increasing number of the functions that
            teachers and students use on a regular basis into a single custom
            application we can improve efficiency by reducing context switching.
          </p>
          <p>
            Another advantage of a staff software developer is the quick
            implementation of education ideas by the members of our educational
            community. When the Ericka Behrsing had the idea of a website to
            search for books by one or more social issue she immediately
            approached me. Having a go-to resource for creating functional
            websites would give teachers the opportunity to quickly add to roll
            out new and customized resources.
          </p>
          <p>
            I realize that this is a shift for the focus of the SU. This would
            be a new position, adding to the staff at central office. The time I
            have spent performing these tech tasks within a single school is
            continuously increasing. My real goal is to help students learn. I
            can have a greater impact on this community and help the success of
            more students by focusing on using technology to improve student
            outcomes.
          </p>
        </div>
        <div>
          <h3 className="center">Specific Applications</h3>
          <ul>
            <li>
              <a href="/blog/ncujhs-tech-guided-tour">School Dashboard</a>
              {' - '}
              Improving communication with students, teachers and parents
            </li>
            <li>
              <a href="https://bookdatabase.netlify.app/">
                Searchable Book Database
              </a>
              {' - '}
              This is a proof of concept for something that was an idea that the
              Librarian team had on their last S.U. wide librarian meeting. I
              was asked if I could create a nice visual book search sorted by
              social categories, a frequent request by students and staff.
            </li>
            <li>
              <a href="/code/theFabulousFractionGame/">Fraction Game</a>
              {' - '}
              Students love this one. I have many students over 500 rounds
            </li>
            <li>
              <a href="/links/">Improved Searchable Links</a>
              {' - '}
              Students are frequently stuck staring at the SU page of links. By
              integrating this into a school specific dashboard links can even
              be customized for a student based on factors like grade level, or
              even teacher.
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1DAZ47Z_gvB85f9vQeg_eer_slhdRS4Ut/view?usp=sharing">
                Quick Tutorial Videos
              </a>
              {' - '}I am frequently recording small video tutorials to assist
              with common tech tasks. I would like to create a searchable
              database of similar videos to make it easier for teachers to
              quickly access needed skills
            </li>
            <li>
              Google apps optimizations - Creating automated processes and
              queries to improve the functionality of using spreadsheets and
              forms as a database
            </li>
          </ul>
        </div>
      </ColumnsStyles>
    </div>
  );
}
