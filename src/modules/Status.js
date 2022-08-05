import React from 'react';
import ReactDOM from 'react-dom';

function Status(props) {
  let text = "";
  if (props.winner) {
    text = "Winner: " + props.winner;
  } else {
    text = "Turn " + props.stepNumber + ": " + (props.xIsNext ? "X" : "O") + "'s go.";
  }
  return (
    <p>
      {text}
    </p>
  )
}

export default Status;