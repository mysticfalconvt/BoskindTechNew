import React from 'react';
import { withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function FizzBuzz() {
  return (
    <div className="center">
      <Helmet>
        <script src={withPrefix('fizzBuzz.js')} type="text/javascript" />
      </Helmet>
      <div className="center">
        <input id="FBRange" type="text" className="validate" />
        <label htmlFor="FBRange">FizzBuzz Value</label>

        <table className="center">
          <thead>
            <tr>
              <th>Number</th>
              <th>Response</th>
            </tr>
          </thead>

          <tbody id="FizzBuzzTable">
            <tr />
          </tbody>
        </table>
      </div>
    </div>
  );
}
