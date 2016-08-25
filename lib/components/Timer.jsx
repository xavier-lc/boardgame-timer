import React, { PropTypes } from 'react';
import classnames from 'classnames';

import TwoTimingDigits from './TwoTimingDigits.jsx';

import { msToTime, leadingZeros } from '../utils/date';

const propTypes = {
  elapsed: PropTypes.number.isRequired,
  isOn: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

function Timer(props) {
  const timerCls = classnames({
    hidden: !props.isVisible,
    [`${props.className}`]: props.className,
  });
  const msCls = classnames({ hidden: props.isOn || props.elapsed === 0 });

  const time = msToTime(props.elapsed);

  return (
    <div className={timerCls}>
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
