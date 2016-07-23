import React from 'react';

import Timer from './Timer.jsx';

function Player(props) {
  return (
    <div>
      <span className={props.isActive ? 'active' : ''}>{props.name}</span>

      <Timer
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
      />
    </div>
  );
}

export default Player;
