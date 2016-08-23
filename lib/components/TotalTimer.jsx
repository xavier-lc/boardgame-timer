import React from 'react';

import Timer from './Timer.jsx';
import TimerControls from './TimerControls.jsx';
import Statistics from './Statistics.jsx';

function TotalTimer(props) {
  return (
    <div className="panel panel-primary">
      <div className="panel-body">
        <Timer
          elapsed={props.stopwatch.elapsed}
          isOn={props.stopwatch.isOn}
          isVisible={props.stopwatch.start !== null && props.stopwatch.finish === null}
        />

        <TimerControls
          isOn={props.stopwatch.isOn}
          start={props.stopwatch.start}
          finish={props.stopwatch.finish}
          clickPlayHandler={props.clickPlayHandler}
          clickAddHandler={props.clickAddHandler}
          clickNextHandler={props.clickNextHandler}
          clickPauseHandler={props.clickPauseHandler}
          clickResumeHandler={props.clickResumeHandler}
          clickStopHandler={props.clickStopHandler}
        />

        <Statistics
          elapsed={props.stopwatch.elapsed}
          isOn={props.stopwatch.isOn}
          start={props.stopwatch.start}
          finish={props.stopwatch.finish}
        />
      </div>
    </div>
  );
}

export default TotalTimer;
