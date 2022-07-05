import React from 'react';
import ReactDOM from 'react-dom';

function Step(props){
  const desc = props.step ? 'Return to move #' + prop.step : 'Reset';
  return (
    <button 
      onClick={props.onClick}>
        {desc}
      </button>
  )
}

export default Step;