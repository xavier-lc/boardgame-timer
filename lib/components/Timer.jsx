const React = require('react');

const TwoTimingDigits = require('./TwoTimingDigits.jsx');

function Timer(props) {
  return (
    <div>
      <TwoTimingDigits value={props.hours} />
      :
      <TwoTimingDigits value={props.minutes} />
      :
      <TwoTimingDigits value={props.seconds} />
    </div>
  );
}

module.exports = Timer;
