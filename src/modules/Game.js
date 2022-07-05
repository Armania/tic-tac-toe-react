import React, { useState } from 'react';
import './Game.css';
import Board from './Board';
import History from './History';
import Status from './Status';

function Game() {
  const [history, setHistory] = useState({ squares: Array(9).fill(null) });
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  handleClick = (i) => {
    // make a copy of the game history to edit
    const chistory =  this.state.history.slice(0, this.state.stepNumber + 1); // where is the state obj?
    const current = chistory[chistory.length - 1];
    const squares = current.squares.slice();

    // nxt check if there is a winner,
    // or
    // if this square already has a value
    if (this.state.winner || squares[i]) {
      return;
    }

    // add the value to the given square (i: number)
    squares[i] = xIsNext ? "X" : "O";
    // append, or .concat(), the new squares array, whith the new above clicked value added, with the copy of the game's history
    const present = chistory.concat([
      {
        squares: squares
      }
    ])
    // set all the state values.
    // ? do I update each state property oneByOne? or update state once?
    setHistory(present);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(squares));
  }

  jumpTo = (step) => {
    let nxt = ((step % 2) === 0);
    setStepNumber(step);
    setXIsNext(nxt);
  }

  calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="game">
      <section className="game-board">
        <Board
          history={state.history}
          step={state.stepNumber}
          winner={state.winner}
          onClick={(i) => handleClick(i)} />
      </section>
      <section className="game-info">
        <Status
          winner={state.winner}
          stepNumber ={state.stepNumber}
          xIsNext={state.xIsNext}
          />
        <History
          history={history}
          onClick={(i) => jumpTo(i)}/>
      </section>
    </div>
  );
}

export default Game;