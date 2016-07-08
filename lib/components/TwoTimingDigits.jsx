const React = require('react');

const twoDigits = require('./../utils/date').twoDigits;

function TwoTimingDigits(props) {
  return (
    <span>
      {twoDigits(props.value)}
    </span>
  );
}

module.exports = TwoTimingDigits;
