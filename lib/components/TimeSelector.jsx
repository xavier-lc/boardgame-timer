import React, { PropTypes } from 'react';
import range from 'lodash/range';

import { leadingZeros } from '../utils/date';

const propTypes = {
  value: PropTypes.number.isRequired,
  units: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
};

function TimeSelector(props) {
  return (
    <select
      className="form-control form-control--inb"
      data-units={props.units}
      onChange={props.changeHandler}
      value={props.value}
    >
      {range(props.max + 1).map((el) => (
        <option
          key={el}
          value={el}
        >
          {leadingZeros(el)}
        </option>
      ))}
    </select>
  );
}

TimeSelector.propTypes = propTypes;

export default TimeSelector;
