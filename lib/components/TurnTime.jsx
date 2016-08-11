import React, { PropTypes } from 'react';
import TimeSelector from './TimeSelector.jsx';

const propTypes = {
  maxMinutes: PropTypes.number.isRequired,
  limitSelectChange: PropTypes.func.isRequired,
};

function TurnTime(props) {
  return (
    <div>
      <span>Turn time:</span>

      <div>
        <TimeSelector
          max={props.maxMinutes}
          limitSelectChange={props.limitSelectChange}
        />
        :
        <TimeSelector
          max={59}
          limitSelectChange={props.limitSelectChange}
        />
      </div>
    </div>
  );
}

TurnTime.propTypes = propTypes;

export default TurnTime;
