import React, { PropTypes } from 'react';
import _ from 'lodash';

import { twoDigits } from '../utils/date';

const propTypes = {
  max: PropTypes.number.isRequired,
};

function TimeSelector(props) {
  return (
    <select>
      {_.range(props.max + 1).map((el) => (
        <option
          key={el}
          value={el}
        >
          {twoDigits(el)}
        </option>
      ))}
    </select>
  );
}

TimeSelector.propTypes = propTypes;

export default TimeSelector;
