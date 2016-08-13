import React from 'react';

import Player from './Player.jsx';
import TimerButton from './TimerButton.jsx';

import { timeToMs } from './../utils/date';

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
          isStopwatchOn={props.stopwatch.isOn}
          {...props.players.data[id]}
          turns={props.players.turns[id]}
          turnLimit={timeToMs({
            minutes: props.config.turnTime.minutes,
            seconds: props.config.turnTime.seconds,
          })}
          inputChangeHandler={props.inputChangeHandler}
        />
      ))}
    </div>
  );
}

export default PlayerTimers;
