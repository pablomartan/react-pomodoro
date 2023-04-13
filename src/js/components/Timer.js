import React from 'react';

export const Timer = props => {
  const label = props.runs % 2 == 0 ? 'Session' : 'Break';

  return(
    <div id="timer">
      <div id="timer-label">{label}</div>
      <div id="time-left">{props.timeLeft}</div>
    </div>
  )
};
