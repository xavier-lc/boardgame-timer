import React, { PropTypes } from 'react';

const propTypes = {
  id: PropTypes.number.isRequired,
  isEditable: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

function PlayerNameInput(props) {
  return (
    <input
      data-playerid={props.id}
      className={props.isEditable ? '' : 'no'}
      onChange={props.changeHandler}
      value={props.value}
    />
  );
}

PlayerNameInput.propTypes = propTypes;

export default PlayerNameInput;
