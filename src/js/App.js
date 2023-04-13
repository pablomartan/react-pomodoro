import React, { useState } from 'react';

export const App = () => {
  const [ breakLength, setBreakLength ] = useState(5);
  const [ sessionLength, setSessionLength ] = useState(25);

  return(
    <div id="app" className="w-100">
      <h1 className="text-center">Work + break timer</h1>
    </div>
  );
};
