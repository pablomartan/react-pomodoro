import React from 'react';

let started = false;
const play = <i className="fa-solid fa-play"></i>;
const pause = <i className="fa-solid fa-pause"></i>;

export const TimerControls = props => {
  const reset = () => {
    props.setBr(5);
    props.setSe(25);
  };

  return(
    <div id="timer-controls">
      <div id="start_stop">{started? play : pause}</div>
      <div id="reset" onClick={() => reset()}><i className="fa-solid fa-repeat"></i></div>
    </div>
  );
};
