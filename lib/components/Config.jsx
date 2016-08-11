import React from 'react';

import TurnTime from './TurnTime.jsx';

function Config(props) {
  return (
    <div className="config">
      <h2>Config</h2>

      <TurnTime
        minutes={props.config.turnTime.minutes}
        seconds={props.config.turnTime.seconds}
        maxMinutes={props.config.turnTime.maxMinutes}
        selectChangeHandler={props.selectChangeHandler}
      />
    </div>
  );
}

export default Config;
