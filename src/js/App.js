import React, { useState } from 'react';
import { LengthControl } from './components/LengthControl';
import { Timer } from './components/Timer';
import { TimerControls } from './components/TimerControls';

export const App = () => {
  const [ breakLength, setBreakLength ] = useState(5);
  const [ sessionLength, setSessionLength ] = useState(25);

  return(
    <div id="app" className="w-100">
      <h1 className="text-center">Work + break timer</h1>
      <LengthControl brLength={breakLength} seLength={sessionLength} setBr={setBreakLength} setSe={setSessionLength} />
      <Timer />
      <TimerControls />
    </div>
  );
};
