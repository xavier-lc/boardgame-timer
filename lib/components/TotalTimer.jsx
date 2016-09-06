import React from 'react';

import TimerControls from './TimerControls.jsx';
import TimerControlsUnstarted from './TimerControlsUnstarted.jsx';
import Statistics from './Statistics.jsx';

import { getCurrentTurn } from './../reducers/players';

function TotalTimer(props) {
  return (
    <div className="panel panel-primary">
      <div className="panel-body">
        <TimerControlsUnstarted
          isVisible={props.stopwatch.start === null}
          clickAddHandler={props.clickAddHandler}
          clickPlayHandler={props.clickPlayHandler}
        />

        <TimerControls
          isOn={props.stopwatch.isOn}
          elapsed={props.stopwatch.elapsed}
          start={props.stopwatch.start}
          finish={props.stopwatch.finish}
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
          turns={getCurrentTurn(props.players)}
        />
      </div>
    </div>
  );
}

export default TotalTimer;
