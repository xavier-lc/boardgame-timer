import React from 'react';

import Player from './Player.jsx';

import { timeToMs } from './../utils/date';

function PlayerTimers(props) {
  return (
    <div className="panel panel-primary">
      <div className="panel-body">
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
    </div>
  );
}

export default PlayerTimers;
