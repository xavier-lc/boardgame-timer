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

  return (
    <div className={playerCls}>
      <PlayerNameInput
        id={props.id}
        isVisible={props.isEditable}
        changeHandler={props.inputChangeHandler}
        value={props.name}
      />

      <span className={spanCls}>{props.name}</span>

      <Timer
        elapsed={turnElapsed}
        isOn={props.isStopwatchOn}
        isVisible={!props.isEditable}
        className="inb"
        hideHours
      />

      <div className={progressCls}>
        <div className={progressBarCls} style={progressBarStyle}>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = propTypes;

export default Player;
