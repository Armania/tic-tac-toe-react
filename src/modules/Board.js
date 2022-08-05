import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';

function Board(props) {
  const history = props.history.slice(0, props.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  const listItems = squares.map((square, index) => {
    return (
      <li key={index.toString()} className="square-container">
        <Square  value={square} handleClick={() => {props.handleClick(index);}}/>
      </li>);
    });
    console.log(listItems);
  return (
    <div>
      <ul className="board-row">
        {listItems[0]}
        {listItems[1]}
        {listItems[2]}
      </ul>
      <ul className="board-row">
        {listItems[3]}
        {listItems[4]}
        {listItems[5]}
      </ul>
      <ul className="board-row">
        {listItems[6]}
        {listItems[7]}
        {listItems[8]}
      </ul>
    </div>
  );
}

export default Board;