import React from 'react';
import styled from 'styled-components';

export const FlashCardStyles = styled.div`
  .container {
    max-width: 900px;
    margin: 1rem 2rem;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    background-color: white;
    padding: 0 1.5rem;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
  }

  .form-group > label {
    color: #777;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }

  .btn {
    background-color: hsl(200, 100%, 50%);
    color: white;
    padding: 0.5em 1em;
    border-radius: 0.3em;
    border: none;
    cursor: pointer;
  }

  .btn:hover {
    background-color: hsl(200, 100%, 40%);
  }

  .card-grid {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 0.25rem;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
    background-color: white;
    transform-style: preserve-3d;
    transition: 150ms;
    cursor: pointer;
    transform: perspective(1000px) rotateY(var(--rotate-y, 0))
      translateY(var(--translate-y, 0));
  }

  .card:hover {
    --translate-y: -2px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  }

  .card.flip {
    --rotate-y: 180deg;
  }

  .card .front {
    left: 0;
  }

  .card .front,
  .card .back {
    position: absolute;
    padding: 1rem;
    backface-visibility: hidden;
  }

  .card .back {
    transform: rotateY(180deg);
  }

  .flashcard-options {
    margin-top: 0.5rem;
  }

  .flashcard-option {
    margin-top: 0.25rem;
    color: #555;
    font-size: 0.75rem;
  }

  .flashcard-option:first-child {
    margin-top: 0;
  }
`;
