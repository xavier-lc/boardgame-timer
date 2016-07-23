import React from 'react';

import TimerButton from './TimerButton.jsx';

function TimerControls(props) {
  return (
    <div className={props.stopwatch.finish === null ? '' : 'no'}>
      <TimerButton
        clickHandler={props.clickPlayHandler}
        isVisible={!props.stopwatch.isOn && props.stopwatch.start === null}
        txt="Play"
      />

      <TimerButton
        clickHandler={props.clickPauseHandler}
        isVisible={props.stopwatch.isOn && props.stopwatch.start !== null}
        txt="Pause"
      />

      <TimerButton
        clickHandler={props.clickResumeHandler}
        isVisible={!props.stopwatch.isOn && props.stopwatch.elapsed !== 0}
        txt="Resume"
      />

      <TimerButton
        clickHandler={props.clickStopHandler}
        isVisible={!props.stopwatch.isOn && props.stopwatch.elapsed !== 0}
        txt="Stop"
      />
    </div>
  );
}

export default TimerControls;
