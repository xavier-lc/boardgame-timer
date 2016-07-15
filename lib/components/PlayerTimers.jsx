const React = require('react');

const Player = require('./Player');
const TimerButton = require('./TimerButton');

function PlayerTimers(props) {
  return (
    <div>
      {props.players.ids.map((id) => (
        <Player
          key={id}
          name={props.players.data[id].name}
          {...props.players.time[id]}
        />
      ))}

      <TimerButton
        clickHandler={props.clickAddHandler}
        isVisible={!props.stopwatch.isOn && props.stopwatch.start === null}
        txt="Add player"
      />
    </div>
  );
}

module.exports = PlayerTimers;
