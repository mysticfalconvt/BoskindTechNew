import React from 'react';

export default function Footer() {
  return (
    <footer className="center">
      <p>
        {' '}
        &copy; <a href="https://twitter.com/RobBoskind">@RobBoskind</a>{' '}
        {new Date().getFullYear()}{' '}
      </p>
      <a href="https://twitter.com/dan_spratling/status/1339268209611067394">
        "Made with Wordpress"
      </a>
      <sup>1</sup>
      <p>
        <sup>1</sup>It's Gatsby
      </p>
    </footer>
  );
}
