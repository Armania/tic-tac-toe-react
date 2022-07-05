import React from 'react';
import Square from './Square';

function Board(props) {
  // copy the history prop passed from Game, into a history variable to edit.
  const history = props.history.slice(0, props.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  // itterate throgh the items in history's squares property to get a list of the game's squares and values. we will add the arrray index number(square number) and value as props to each square.
  const listItems = squares.map((square, index) => {
    <li key={index.toString()} className="square-container">
      <Square  value={square} onClick={() => props.onClick(index)}/>
    </li>
  });
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Board;