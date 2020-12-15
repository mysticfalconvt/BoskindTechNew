import { Link } from 'gatsby';
import React from 'react';
import { HomePageGrid } from '../styles/Grids';

export default function Code() {
  return (
    <div className="center">
      <HomePageGrid>
        <Link to="/code/etchASketch">Etch A Sketch</Link>
        <Link to="/code/fizzBuzz">Fizz Buzz</Link>
      </HomePageGrid>
    </div>
  );
}
