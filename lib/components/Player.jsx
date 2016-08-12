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
  elapsed: PropTypes.number.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
};

function Player(props) {
  const spanCls = classnames({
    active: props.isActive,
    no: props.isEditable,
  });

  return (
    <div>
      <span className={spanCls}>{props.name}</span>

      <PlayerNameInput
        id={props.id}
        isEditable={props.isEditable}
        changeHandler={props.inputChangeHandler}
        value={props.name}
      />

      <Timer
        elapsed={props.elapsed}
        isOn={props.isStopwatchOn}
        isVisible={!props.isEditable}
      />
    </div>
  );
}

Player.propTypes = propTypes;

export default Player;
