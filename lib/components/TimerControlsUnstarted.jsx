import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TimerButton from './TimerButton.jsx';

const propTypes = {
  isVisible: PropTypes.bool.isRequired,
  clickAddHandler: PropTypes.func.isRequired,
  clickPlayHandler: PropTypes.func.isRequired,
};

function TimerControlsUnstarted(props) {
  const timerControlsCls = classnames(
    { no: !props.isVisible }
  );

  return (
    <div className={timerControlsCls}>
      <TimerButton
        clickHandler={props.clickAddHandler}
        isVisible
        txt="Add player"
        className="btn-info btn-block btn-lg"
      />

      <TimerButton
        clickHandler={props.clickPlayHandler}
        isVisible
        txt="Play"
        className="btn-primary btn-block btn-lg"
      />
    </div>
  );
}

TimerControlsUnstarted.propTypes = propTypes;

export default TimerControlsUnstarted;
