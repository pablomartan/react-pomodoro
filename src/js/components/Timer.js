import React from 'react';

export const Timer = props => {

  return(
    <div id="timer">
      <div id="timer-label"></div>
      <div id="time-left">{props.timeLeft}</div>
    </div>
  )
};
