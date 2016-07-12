const React = require('react');

const Timer = require('./Timer');
const PlayButton = require('./PlayButton');

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

      <PlayButton
        clickHandler={props.clickPlayHandler}
        hasStarted={props.start !== null}
      />
    </div>
  );
}

TotalTimer.propTypes = propTypes;

module.exports = TotalTimer;
