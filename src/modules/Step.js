import React from 'react';
import ReactDOM from 'react-dom';

function Step(props){
  const desc = props.step ? 'Return to move #' + props.step : 'Reset';
  return (
    <button
      onClick={props.jumpTo}>
        {desc}
      </button>
  )
}

export default Step;