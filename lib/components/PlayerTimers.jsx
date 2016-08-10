import React from 'react';

import Player from './Player.jsx';
import TimerButton from './TimerButton.jsx';

function PlayerTimers(props) {
  return (
    <div className="playerTimers">
      <TimerButton
        clickHandler={props.clickAddHandler}
        isVisible={props.stopwatch.start === null}
        txt="Add player"
      />

      <TimerButton
        clickHandler={props.clickNextHandler}
        isVisible={props.stopwatch.isOn}
        txt="Next"
      />

      {props.players.ids.map((id) => (
        <Player
          key={id}
          id={id}
          isEditable={props.stopwatch.start === null}
          {...props.players.data[id]}
          elapsed={props.players.time[id].elapsed}
          inputChangeHandler={props.inputChangeHandler}
        />
      ))}
    </div>
  );
}

export default PlayerTimers;
