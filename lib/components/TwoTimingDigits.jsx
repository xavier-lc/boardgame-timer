const React = require('react');

const twoDigits = require('./../utils/date').twoDigits;

const propTypes = {
  value: React.PropTypes.number.isRequired,
};

function TwoTimingDigits(props) {
  return (
    <span>
      {twoDigits(props.value)}
    </span>
  );
}

TwoTimingDigits.propTypes = propTypes;

module.exports = TwoTimingDigits;
