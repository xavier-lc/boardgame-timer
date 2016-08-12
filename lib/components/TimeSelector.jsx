import React, { PropTypes } from 'react';
import _ from 'lodash';

import { twoDigits } from '../utils/date';

const propTypes = {
  value: PropTypes.number.isRequired,
  units: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
};

function TimeSelector(props) {
  return (
    <select data-units={props.units} onChange={props.changeHandler}>
      {_.range(props.max + 1).map((el) => (
        <option
          className="form-control"
          key={el}
          value={el}
          selected={el === props.value}
        >
          {twoDigits(el)}
        </option>
      ))}
    </select>
  );
}

TimeSelector.propTypes = propTypes;

export default TimeSelector;
