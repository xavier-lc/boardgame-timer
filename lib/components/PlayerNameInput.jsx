import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const propTypes = {
  id: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

function PlayerNameInput(props) {
  const inputCls = classnames(
    'form-control',
    { hidden: !props.isVisible }
  );

  return (
    <input
      data-playerid={props.id}
      className={inputCls}
      onChange={props.changeHandler}
      value={props.value}
    />
  );
}

PlayerNameInput.propTypes = propTypes;

export default PlayerNameInput;
