import React, { PropTypes } from 'react';

import { twoDigits } from './../utils/date';

const propTypes = { value: PropTypes.number.isRequired };

function TwoTimingDigits(props) {
  return (
    <span>
      {twoDigits(props.value)}
    </span>
  );
}

TwoTimingDigits.propTypes = propTypes;

export default TwoTimingDigits;
