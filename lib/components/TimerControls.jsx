import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Timer from './Timer.jsx';
import TimerButton from './TimerButton.jsx';

const propTypes = {
  isOn: PropTypes.bool.isRequired,
  elapsed: PropTypes.number.isRequired,
  start: PropTypes.number,
  finish: PropTypes.number,
  clickNextHandler: PropTypes.func.isRequired,
  clickPauseHandler: PropTypes.func.isRequired,
  clickResumeHandler: PropTypes.func.isRequired,
  clickStopHandler: PropTypes.func.isRequired,
};

function TimerControls(props) {
  const timerControlsCls = classnames(
    'row',
    { no: props.start === null || props.finish !== null }
  );

  return (
    <div className={timerControlsCls}>
      <div className="col-xs-4 text-center">
        <TimerButton
          clickHandler={props.clickPauseHandler}
          isVisible={props.isOn}
          txt="Pause"
          className="btn-info btn-lg"
        />

        <TimerButton
          clickHandler={props.clickResumeHandler}
          isVisible={!props.isOn}
          txt="Resume"
          className="btn-primary btn-lg"
        />
      </div>

      <div className="col-xs-4 text-center">
        <Timer
          elapsed={props.elapsed}
          isOn={props.isOn}
          isVisible={props.finish === null}
        />
      </div>

      <div className="col-xs-4 text-center">
        <TimerButton
          clickHandler={props.clickNextHandler}
          isVisible={props.isOn}
          txt="Next"
          className="btn-primary btn-lg"
        />

        <TimerButton
          clickHandler={props.clickStopHandler}
          isVisible={!props.isOn}
          txt="Stop"
          className="btn-warning btn-lg"
        />
      </div>
    </div>
  );
}

TimerControls.propTypes = propTypes;

export default TimerControls;
