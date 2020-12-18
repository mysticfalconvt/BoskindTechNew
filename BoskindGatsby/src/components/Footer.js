import React from 'react';

export default function Footer() {
  return (
    <footer className="center">
      <p> &copy; Rob Boskind {new Date().getFullYear()}</p>
      <a href="https://twitter.com/dan_spratling/status/1339268209611067394">
        "Made with Wordpress"
      </a>
    </footer>
  );
}
