import React from 'react';

import Timer from './Timer.jsx';
import TimerControls from './TimerControls.jsx';
import Statistics from './Statistics.jsx';

function TotalTimer(props) {
  return (
    <div className="totalTimer">
      <Timer
        elapsed={props.stopwatch.elapsed}
        isVisible={props.stopwatch.finish === null}
      />

      <TimerControls
        isOn={props.stopwatch.isOn}
        start={props.stopwatch.start}
        finish={props.stopwatch.finish}
        clickPlayHandler={props.clickPlayHandler}
        clickPauseHandler={props.clickPauseHandler}
        clickResumeHandler={props.clickResumeHandler}
        clickStopHandler={props.clickStopHandler}
      />

      <Statistics
        elapsed={props.stopwatch.elapsed}
        start={props.stopwatch.start}
        finish={props.stopwatch.finish}
      />
    </div>
  );
}

export default TotalTimer;
