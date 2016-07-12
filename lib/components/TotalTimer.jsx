const React = require('react');

const Timer = require('./Timer');
const TimerControls = require('./TimerControls');
const Statistics = require('./Statistics');

const propTypes = {
  start: React.PropTypes.number,
};

function TotalTimer(props) {
  return (
    <div>
      <Timer
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
      />

      <TimerControls {...props} />

      <Statistics {...props} />
    </div>
  );
}

TotalTimer.propTypes = propTypes;

module.exports = TotalTimer;
