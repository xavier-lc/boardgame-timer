import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TimerButton from './TimerButton.jsx';

const propTypes = {
  isOn: PropTypes.bool.isRequired,
  start: PropTypes.number,
  finish: PropTypes.number,
  clickPlayHandler: PropTypes.func.isRequired,
  clickAddHandler: PropTypes.func.isRequired,
  clickNextHandler: PropTypes.func.isRequired,
  clickPauseHandler: PropTypes.func.isRequired,
  clickResumeHandler: PropTypes.func.isRequired,
  clickStopHandler: PropTypes.func.isRequired,
};

function TimerControls(props) {
  const timerControlsCls = classnames(
    { no: props.finish !== null }
  );

  return (
    <div className={timerControlsCls}>
      <TimerButton
        clickHandler={props.clickAddHandler}
        isVisible={props.start === null}
        txt="Add player"
        className="btn-info btn-block btn-lg"
      />

      <TimerButton
        clickHandler={props.clickPlayHandler}
        isVisible={props.start === null}
        txt="Play"
        className="btn-primary btn-block btn-lg"
      />

      <TimerButton
        clickHandler={props.clickNextHandler}
        isVisible={props.isOn}
        txt="Next"
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
