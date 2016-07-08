const React = require('react');

const Timer = require('./Timer');
const PlayButton = require('./PlayButton');

function TotalTimer(props) {
  return (
    <div>
      <Timer
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
      />

      <PlayButton clickHandler={props.clickPlayHandler} />
    </div>
  );
}

module.exports = TotalTimer;
