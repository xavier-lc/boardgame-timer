import React from 'react';

import TurnTime from './TurnTime.jsx';

function Config(props) {
  return (
    <div className="panel panel-primary">
      <div className="panel-body">
        <TurnTime
          minutes={props.config.turnTime.minutes}
          seconds={props.config.turnTime.seconds}
          maxMinutes={props.config.turnTime.maxMinutes}
          selectChangeHandler={props.selectChangeHandler}
        />
      </div>
    </div>
  );
}

export default Config;
