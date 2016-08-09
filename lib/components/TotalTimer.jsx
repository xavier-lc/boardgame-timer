import React from 'react';

import Timer from './Timer.jsx';
import TimerControls from './TimerControls.jsx';
import Statistics from './Statistics.jsx';

const propTypes = {
  start: React.PropTypes.number,
};

function TotalTimer(props) {
  return (
    <div>
      <Timer elapsed={props.stopwatch.elapsed} />

      <TimerControls {...props} />

      <Statistics {...props.stopwatch} />
    </div>
  );
}

TotalTimer.propTypes = propTypes;

export default TotalTimer;
