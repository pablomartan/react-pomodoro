import React, { useState } from 'react';

export const Timer = props => {
  const [ runs, setRuns ] = useState(0);
  const label = runs % 2 == 0 ? 'Session' : 'Break';

  return(
    <div id="timer">
      <div id="timer-label">{label}</div>
      <div id="time-left">{props.timeLeft}</div>
    </div>
  )
};
