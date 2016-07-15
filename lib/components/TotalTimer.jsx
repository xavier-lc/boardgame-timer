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
        hours={props.stopwatch.hours}
        minutes={props.stopwatch.minutes}
        seconds={props.stopwatch.seconds}
      />

      <TimerControls {...props} />

      <Statistics {...props.stopwatch} />
    </div>
  );
}

TotalTimer.propTypes = propTypes;

module.exports = TotalTimer;
