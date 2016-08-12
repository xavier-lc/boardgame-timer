import React, { PropTypes } from 'react';

import { leadingDigits } from './../utils/date';

const propTypes = { value: PropTypes.number.isRequired };

function TwoTimingDigits(props) {
  return (
    <span>
      {leadingDigits(props.value)}
    </span>
  );
}

TwoTimingDigits.propTypes = propTypes;

export default TwoTimingDigits;
