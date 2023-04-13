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
    <div id="length-control" className="row">
        <div id="break-control" className="row col text-center">
          <div id="break-label">Break</div>
          <div id="break-decrement" className="col" onClick={() => brDec()}><i class="fa-solid fa-arrow-down"></i></div>
          <div id="break-lenght" className="col">{props.brLength}</div>
          <div id="break-increment" className="col" onClick={() => brInc()}><i class="fa-solid fa-arrow-up"></i></div>
        </div>

        <div id="session-control" className="row col text-center">
          <div id="session-label">Session</div>
          <div id="session-decrement" className="col" onClick={() => seDec()}><i class="fa-solid fa-arrow-down"></i></div>
          <div id="session-length" className="col">{props.seLength}</div>
          <div id="session-increment" className="col" onClick={() => seInc()}><i class="fa-solid fa-arrow-up"></i></div>
        </div>
    </div>
  )
};
