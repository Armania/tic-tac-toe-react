import React, { useState } from 'react';
import './Game.css';
import Board from './Board';
import History from './History';
import Status from './Status';

function Game() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = i => {
    const chistory =  history.slice(0, stepNumber + 1);
    const current = chistory[chistory.length - 1];
    const squares = current.squares.slice();
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    const present = chistory.concat([
      {
        squares: squares
      }
    ]);
    setHistory(present);
    setStepNumber(chistory.length);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(squares));
  }

  const jumpTo = step => {
    let nxt = ((step % 2) === 0);
    setStepNumber(step);
    setXIsNext(nxt);
    setWinner(calculateWinner(history[step].squares));
    console.log(stepNumber, xIsNext, winner);
  }

  const calculateWinner = squares => {
    if (squares === Array(9).fill(null)) {
      return null;
    }
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
    <div className="game clear-after">
      <section className="game-board">
        <Board
          history={history}
          stepNumber={stepNumber}
          winner={winner}
          handleClick={(i) => handleClick(i)} />
      </section>
      <section className="game-info">
        <Status
          winner={winner}
          stepNumber={stepNumber}
          xIsNext={xIsNext}
          />
        <History
          history={history}
          jumpTo={(i) => {jumpTo(i);}}/>
      </section>
    </div>
  );
}

export default Game;