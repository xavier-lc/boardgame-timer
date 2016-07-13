const React = require('react');

const Player = require('./Player');
const TimerButton = require('./TimerButton');

function PlayerTimers(props) {
  return (
    <div>
      <Player
        name="Player #1"
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
      />

      <TimerButton
        clickHandler={props.clickAddHandler}
        isVisible
        txt="Add player"
      />
    </div>
  );
}

module.exports = PlayerTimers;
