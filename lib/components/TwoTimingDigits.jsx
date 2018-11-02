import PropTypes from 'prop-types';
import React from 'react';

import { leadingZeros } from './../utils/date';

const propTypes = { value: PropTypes.number.isRequired };

function TwoTimingDigits(props) {
  return (
    <span>
      {leadingZeros(props.value)}
    </span>
  );
}

TwoTimingDigits.propTypes = propTypes;

export default TwoTimingDigits;
