import React from 'react';

export const LengthControl = props => {
  let brValue = props.brLength.valueOf();
  let seValue = props.seLength.valueOf();
  
  const brDec = (value = brValue) => {
    props.setBr(value > 1 ? value - 1 : value);
  };
  const brInc = (value = brValue) => {
    props.setBr(value < 60 ? value + 1 : value);
  };
  const seDec = (value = seValue) => {
    props.setSe(value > 1 ? value - 1 : value);
  };
  const seInc = (value = seValue) => {
    props.setSe(value < 60 ? value + 1 : value);
  };

  return(
    <div id="length-control">
        <div id="break-control">
          <div id="break-label">Break</div>
          <div id="break-decrement" onClick={() => brDec()}></div>
          <div id="break-lenght">{props.brLength}</div>
          <div id="break-increment" onClick={() => brInc()}></div>
        </div>

        <div id="session-control">
          <div id="session-label">Session</div>
          <div id="session-decrement" onClick={() => seDec()}></div>
          <div id="session-length">{props.seLength}</div>
          <div id="session-increment" onClick={() => seInc()}></div>
        </div>
    </div>
  )
};
