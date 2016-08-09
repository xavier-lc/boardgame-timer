import React from 'react';

import Timer from './Timer.jsx';

function Player(props) {
  return (
    <div>
      <span className={props.isActive ? 'active' : ''}>{props.name}</span>

      <Timer elapsed={props.elapsed} />
    </div>
  );
}

export default Player;
