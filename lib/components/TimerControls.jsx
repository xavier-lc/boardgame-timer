import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TimerButton from './TimerButton.jsx';

const propTypes = {
  isOn: PropTypes.bool.isRequired,
  start: PropTypes.number,
  finish: PropTypes.number,
  clickPlayHandler: PropTypes.func.isRequired,
  clickPauseHandler: PropTypes.func.isRequired,
  clickResumeHandler: PropTypes.func.isRequired,
  clickStopHandler: PropTypes.func.isRequired,
};

function TimerControls(props) {
  const timerControlsCls = classnames({ no: props.finish !== null });

  return (
    <div className={timerControlsCls}>
      <TimerButton
        clickHandler={props.clickPlayHandler}
        isVisible={props.start === null}
        txt="Play"
      />

      <TimerButton
        clickHandler={props.clickPauseHandler}
        isVisible={props.isOn && props.start !== null}
        txt="Pause"
      />

      <TimerButton
        clickHandler={props.clickResumeHandler}
        isVisible={!props.isOn && props.start !== null}
        txt="Resume"
      />

      <TimerButton
        clickHandler={props.clickStopHandler}
        isVisible={!props.isOn && props.start !== null}
        txt="Stop"
      />
    </div>
  );
}

TimerControls.propTypes = propTypes;

export default TimerControls;
