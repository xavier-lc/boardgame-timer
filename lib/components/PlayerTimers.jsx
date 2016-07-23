const React = require('react');

const Player = require('./Player.jsx');
const TimerButton = require('./TimerButton.jsx');

function PlayerTimers(props) {
  return (
    <div>
      {props.players.ids.map((id) => (
        <Player
          key={id}
          {...props.players.data[id]}
          {...props.players.time[id]}
        />
      ))}

      <TimerButton
        clickHandler={props.clickAddHandler}
        isVisible={!props.stopwatch.isOn && props.stopwatch.start === null}
        txt="Add player"
      />

      <TimerButton
        clickHandler={props.clickNextHandler}
        isVisible={props.stopwatch.isOn}
        txt="Next"
      />
    </div>
  );
}

module.exports = PlayerTimers;
