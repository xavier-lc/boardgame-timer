import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Timer from './Timer.jsx';
import PlayerNameInput from './PlayerNameInput.jsx';

const propTypes = {
  id: PropTypes.number.isRequired,
  isEditable: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  isStopwatchOn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  turns: PropTypes.arrayOf(PropTypes.number).isRequired,
  turnLimit: PropTypes.number.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
};

function Player(props) {
  const turns = props.turns.length;
  const turnElapsed = turns ? props.turns[turns - 1] : 0;

  const percent = 100 * turnElapsed / props.turnLimit;
  const progressBarStyle = {
    width: `${percent.toFixed(2)}%`,
  };

  const playerCls = classnames(
    'player',
    { inactive: !props.isEditable && !props.isActive }
  );

  const spanCls = classnames(
    'player__name',
    { hidden: props.isEditable }
  );

  const progressCls = classnames(
    'progress',
    { hidden: props.isEditable }
  );

  const progressBarCls = classnames(
    'progress-bar',
    'progress-bar-striped',
    {
      active: props.isActive && props.isStopwatchOn,
      'progress-bar-danger': percent >= 90,
    }
  );

  //// sum the turns to get the elapsed time
  //const totalElapsed = props.turns.reduce(
  //  (previous, current) => previous + current,
  //  0
  //);

  return (
    <div className={playerCls}>
      <span className={spanCls}>{props.name}</span>

      <PlayerNameInput
        id={props.id}
        isEditable={props.isEditable}
        changeHandler={props.inputChangeHandler}
        value={props.name}
      />

      <Timer
        elapsed={turnElapsed}
        isOn={props.isStopwatchOn}
        isVisible={!props.isEditable}
      />

      <div className={progressCls}>
        <div className={progressBarCls} style={progressBarStyle}>
        </div>
      </div>

      {
        /*
      <Timer
        title="Total"
        elapsed={totalElapsed}
        isOn={props.isStopwatchOn}
        isVisible={!props.isEditable}
      />
        */
      }
    </div>
  );
}

Player.propTypes = propTypes;

export default Player;
