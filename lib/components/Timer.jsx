import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TwoTimingDigits from './TwoTimingDigits.jsx';

import { msToTime, leadingZeros } from '../utils/date';

const propTypes = {
  elapsed: PropTypes.number.isRequired,
  isOn: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

function Timer(props) {
  const timerCls = classnames(
    'timer',
    { no: !props.isVisible }
  );
  const msCls = classnames({ no: props.isOn || props.elapsed === 0 });
  const time = msToTime(props.elapsed);

  return (
    <div className={timerCls}>
      <span>{props.title ? (props.title + ' ') : ''}</span>

      <TwoTimingDigits value={time.hours} />
      :
      <TwoTimingDigits value={time.minutes} />
      :
      <TwoTimingDigits value={time.seconds} />

      <span className={msCls}>
        .{leadingZeros(time.milliseconds, 3)}
      </span>
    </div>
  );
}

Timer.propTypes = propTypes;

export default Timer;
