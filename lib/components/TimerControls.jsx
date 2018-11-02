import PropTypes from 'prop-types';
import React from 'react';
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
    'flexRow',
    { hidden: props.start === null || props.finish !== null }
  );

  return (
    <div className={timerControlsCls}>
      <div className="controlBtn controlBtn--lft">
        <TimerButton
          clickHandler={props.clickPauseHandler}
          isVisible={props.isOn}
          icon="pause"
          className="btn-info btn-block btn-lg"
        />

        <TimerButton
          clickHandler={props.clickResumeHandler}
          isVisible={!props.isOn}
          icon="play"
          className="marginTop0 btn-info btn-block btn-lg"
        />
      </div>

      <div className="flex1">
        <Timer
          elapsed={props.elapsed}
          isOn={props.isOn}
          isVisible={props.finish === null}
          className="centerHorVert"
        />
      </div>

      <div className="controlBtn controlBtn--rgt">
        <TimerButton
          clickHandler={props.clickNextHandler}
          isVisible={props.isOn}
          txt="Next"
          className="btn-primary btn-block btn-lg"
        />

        <TimerButton
          clickHandler={props.clickStopHandler}
          isVisible={!props.isOn}
          icon="stop"
          className="marginTop0 btn-warning btn-block btn-lg"
        />
      </div>
    </div>
  );
}

TimerControls.propTypes = propTypes;

export default TimerControls;
