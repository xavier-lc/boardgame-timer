import React from 'react';

import Player from './Player.jsx';
import TimerButton from './TimerButton.jsx';

function PlayerTimers(props) {
  return (
    <div>
      {props.players.ids.map((id) => (
        <Player
          key={id}
          {...props.players.data[id]}
          elapsed={props.players.time[id].elapsed}
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

export default PlayerTimers;
