import React, { PropTypes } from 'react';

import Timer from './Timer.jsx';
import PlayerNameInput from './PlayerNameInput.jsx';

const propTypes = {
  id: PropTypes.number.isRequired,
  isEditable: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
};

/**
 * Get the class for the <span> element with the user's name depending on the crrent props
 *
 * @param {object} props
 * @returns {('no'|'active'|'')}
 */
function getNameClass(props) {
  if (props.isEditable) {
    return 'no';
  }

  if (props.isActive) {
    return 'active';
  }

  return '';
}

function Player(props) {
  return (
    <div>
      <span className={getNameClass(props)}>{props.name}</span>

      <PlayerNameInput
        id={props.id}
        isEditable={props.isEditable}
        changeHandler={props.inputChangeHandler}
        value={props.name}
      />

      <Timer elapsed={props.elapsed} />
    </div>
  );
}

Player.propTypes = propTypes;

export default Player;
