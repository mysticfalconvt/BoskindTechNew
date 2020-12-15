import { withPrefix } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const GameStyle = styled.div`
  padding: 20px 20px 400px 20px;
  background: var(--grey);
`;

const ColorPickerStyles = styled.div`
  .square {
    width: 30%;
    background: purple;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 15%;
    transition: background 0.3s;
    -webkit-transition: background 0.3s;
    -moz-transition: background 0.3s;
  }

  #container {
    margin: 20px auto;
    max-width: 600px;
  }

  h1 {
    text-align: center;
    line-height: 1.1;
    color: white;
    font-weight: 400;
    background: steelblue;
    margin: 0;
    text-transform: uppercase;
    padding: 20px 0;
  }

  #colorDisplay {
    font-size: 200%;
  }

  #message {
    display: inline-block;
    width: 20%;
  }

  #stripe {
    background: white;
    height: 30px;
    text-align: center;
    color: black;
  }

  .selected {
    color: white;
    background: steelblue;
  }

  button {
    border: none;
    background: none;
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    color: steelblue;
    letter-spacing: 1px;
    font-size: inherit;
    transition: all 0.3s;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    outline: none;
  }

  button:hover {
    color: white;
    background: steelblue;
  }
`;

export default function ColorGame() {
  return (
    <GameStyle>
      <Helmet>
        <script src={withPrefix('colorPicker.js')} type="text/javascript" />
      </Helmet>
      <ColorPickerStyles>
        <h1 className="headerTitle">
          The Great
          <br />
          <span id="colorDisplay">RGB</span>
          <br />
          Color Game
        </h1>

        <div id="stripe">
          <button id="reset" type="button">
            New Colors
          </button>
          <span id="message" />
          <button className="mode" type="button">
            Easy
          </button>
          <button className="mode selected" type="button">
            Hard
          </button>
        </div>

        <div id="container">
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
        </div>
      </ColorPickerStyles>
    </GameStyle>
  );
}
