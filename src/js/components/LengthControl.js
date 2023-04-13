import React from 'react';

export const LenghtControl = props => {
  return(
    <div id="length-control">
        <div id="break-control">
          <div id="break-label"></div>
          <div id="break-decrement"></div>
          <div id="break-lenght"></div>
          <div id="break-increment"></div>
        </div>

        <div id="session-control">
          <div id="session-label"></div>
          <div id="session-decrement"></div>
          <div id="session-length"></div>
          <div id="session-increment"></div>
        </div>
    </div>
  )
};
