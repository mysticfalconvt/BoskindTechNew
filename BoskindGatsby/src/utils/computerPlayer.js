import React from 'react';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function rollDice(props) {
  await delay(500);
  const newDiceRoll = Math.floor(Math.random() * 6 + 1);
  props.setDice(newDiceRoll);
  await delay(500);
  return newDiceRoll;
}

export default async function computerPlayer(props) {
  //   turn 1
  if (props.computerTurn === 0) {
  } else if (props.computerTurn === 1) {
    const newDiceRoll = await rollDice(props);
    if (newDiceRoll === 3 || newDiceRoll === 4) {
      props.setRight({ ...props.right, junk: newDiceRoll });
    } else if (newDiceRoll < 3) {
      props.setRight({ ...props.right, denominator: newDiceRoll });
    } else {
      props.setRight({ ...props.right, numerator: newDiceRoll });
    }
    props.setChoosing(!props.choosing);
    props.setTurn('left');
    props.setComputerTurn(2);
  } else if (props.computerTurn === 2) {
    const newDiceRoll = await rollDice(props);
    if (props.right.junk) {
      if (newDiceRoll >= 4) {
        props.setRight({ ...props.right, numerator: newDiceRoll });
        props.setChoosing(!props.choosing);
        props.setTurn('left');
        props.setComputerTurn(3);
      } else {
        props.setRight({ ...props.right, denominator: newDiceRoll });
        props.setChoosing(!props.choosing);
        props.setTurn('left');
        props.setComputerTurn(3);
      }
    } else if (props.right.numerator) {
      if (newDiceRoll >= 4) {
        props.setRight({ ...props.right, junk: newDiceRoll });
        props.setChoosing(!props.choosing);
        props.setTurn('left');
        props.setComputerTurn(3);
      } else {
        props.setRight({ ...props.right, denominator: newDiceRoll });
        props.setChoosing(!props.choosing);
        props.setTurn('left');
        props.setComputerTurn(3);
      }
    } else if (newDiceRoll >= 4) {
      props.setRight({ ...props.right, numerator: newDiceRoll });
      props.setChoosing(!props.choosing);
      props.setTurn('left');
      props.setComputerTurn(3);
    } else {
      props.setRight({ ...props.right, junk: newDiceRoll });
      props.setChoosing(!props.choosing);
      props.setTurn('left');
      props.setComputerTurn(3);
    }
  } else {
    const newDiceRoll = await rollDice(props);
    if (!props.right.junk) {
      props.setRight({ ...props.right, junk: newDiceRoll });
      props.setChoosing(!props.choosing);
      props.setTurn('left');
      props.setComputerTurn(4);
    } else if (!props.right.numerator) {
      props.setRight({ ...props.right, numerator: newDiceRoll });
      props.setChoosing(!props.choosing);
      props.setTurn('left');
      props.setComputerTurn(4);
    } else if (!props.right.denominator) {
      props.setRight({ ...props.right, denominator: newDiceRoll });
      props.setChoosing(!props.choosing);
      props.setTurn('left');
      props.setComputerTurn(4);
    }
  }
}
