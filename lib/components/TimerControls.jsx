import React, { PropTypes } from 'react';

import TimerButton from './TimerButton.jsx';

const propTypes = {
  isOn: PropTypes.bool.isRequired,
  elapsed: PropTypes.number.isRequired,
  start: PropTypes.number,
  finish: PropTypes.number,
  clickPlayHandler: PropTypes.func.isRequired,
  clickPauseHandler: PropTypes.func.isRequired,
  clickResumeHandler: PropTypes.func.isRequired,
  clickStopHandler: PropTypes.func.isRequired,
};

function TimerControls(props) {
  return (
    <div className={props.finish === null ? '' : 'no'}>
      <TimerButton
        clickHandler={props.clickPlayHandler}
        isVisible={!props.isOn && props.start === null}
        txt="Play"
      />

      <TimerButton
        clickHandler={props.clickPauseHandler}
        isVisible={props.isOn && props.start !== null}
        txt="Pause"
      />

      <TimerButton
        clickHandler={props.clickResumeHandler}
        isVisible={!props.isOn && props.elapsed !== 0}
        txt="Resume"
      />

      <TimerButton
        clickHandler={props.clickStopHandler}
        isVisible={!props.isOn && props.elapsed !== 0}
        txt="Stop"
      />
    </div>
  );
}

TimerControls.propTypes = propTypes;

export default TimerControls;
