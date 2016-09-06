import React from 'react';
import classnames from 'classnames';

import Player from './Player.jsx';
import PlayerTotals from './PlayerTotals.jsx';

import { getCurrentTurn } from './../reducers/players';
import { timeToMs } from './../utils/date';

function PlayerTimers(props) {
  const timersCls = classnames('text-center', { hidden: props.stopwatch.finish !== null });
  const turnCls = classnames({ hidden: props.stopwatch.start === null });

  return (
    <div className="panel panel-primary">
      <div className="panel-body">
        <div className={timersCls}>
          <h4 className={turnCls}>{`Turn ${getCurrentTurn(props.players)}`}</h4>

          {props.players.ids.map(id => (
            <Player
              key={`player_${id}`}
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

        <PlayerTotals
          players={props.players}
          stopwatch={props.stopwatch}
        />
      </div>
    </div>
  );
}

export default PlayerTimers;
