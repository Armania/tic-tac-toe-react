import React from 'react';
import Step from './Step';

function History(props) {
  const history = props.history;
  const listitems = history.map((squares, step) =>
    <li key={step.toString()}>
      <Step jumpTo={() => props.jumpTo(step)} step={step}/>
    </li>
  );
  return (
      <ul>
        {listitems}
      </ul>
  )
}

export default History;