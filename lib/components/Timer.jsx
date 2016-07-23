import React from 'react';

import TwoTimingDigits from './TwoTimingDigits.jsx';

function Timer(props) {
  return (
    <div>
      <TwoTimingDigits value={props.hours} />
      :
      <TwoTimingDigits value={props.minutes} />
      :
      <TwoTimingDigits value={props.seconds} />
    </div>
  );
}

export default Timer;
