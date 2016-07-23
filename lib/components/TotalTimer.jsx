const React = require('react');

const Timer = require('./Timer.jsx');
const TimerControls = require('./TimerControls.jsx');
const Statistics = require('./Statistics.jsx');

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
