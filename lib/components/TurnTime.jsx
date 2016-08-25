import React, { PropTypes } from 'react';
import TimeSelector from './TimeSelector.jsx';

const propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  maxMinutes: PropTypes.number.isRequired,
  selectChangeHandler: PropTypes.func.isRequired,
};

function TurnTime(props) {
  return (
    <div>
      <span className="configTitle">Player turn time</span>

      <TimeSelector
        value={props.minutes}
        units="minutes"
        changeHandler={props.selectChangeHandler}
        max={props.maxMinutes}
      />
      :
      <TimeSelector
        value={props.seconds}
        units="seconds"
        changeHandler={props.selectChangeHandler}
        max={59}
      />
    </div>
  );
}

TurnTime.propTypes = propTypes;

export default TurnTime;
