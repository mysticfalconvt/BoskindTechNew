import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  div {
    background: lightgray;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  flex-wrap: wrap;

  p::before {
    content: '·';
    padding: 5px;
  }
`;

export default function oldPortfolio() {
  return (
    <main>
      <h1 className="center">Rob Boskind - Web Developer</h1>
      <h3 className="center">
        Looking to work for you <a href="\Resume.pdf"> · Resume · </a>
      </h3>
      <GridContainer>
        <div>
          <h3 className="center">About Me</h3>
          <p>
            I am looking to make peoples lives better with code. What can I
            bring to your company? A love for code, and a love for data
            organization. I am a math teacher, but I have been a software
            developer as well for many years. I want to make the transition into
            full time development.
          </p>
          <p>
            <a href="/blog/ncujhs-tech-guided-tour">School Dashboard</a>- This
            is a dashboard my school has used to coordinate many school
            functions. It was created using Node and Express with a MongoDB
            backend and Pug for templating. This demo allows full use, but the
            data is much better in a school envornment with hundreds of teachers
            and students as users. Read my walkthrough of the app
            <a href="/blog/ncujhs-tech-guided-tour"> HERE. </a>
            The full site is available at{' '}
            <a href="http://ncujhs.tech">NCUJHS.Tech </a>
            but for a demo with an easy login button to test it out as a
            student, teacher, or parent go to{' '}
            <a href="https://school-dashboard-demo.herokuapp.com/login">
              School Dashboard
            </a>
            <br />
            To see some of my code please checkout my
            <a href="https://github.com/mysticfalconvt"> Github.</a>
          </p>
        </div>
        <div>
          <h3 className="center">Technologies</h3>
          <FlexContainer>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>MongoDB</p>
            <p>NodeJS</p>
            <p>Express</p>
            <p>Gatsby</p>
            <p>Next JS</p>
            <p>GraphQL</p>
          </FlexContainer>
        </div>
      </GridContainer>
    </main>
  );
}
