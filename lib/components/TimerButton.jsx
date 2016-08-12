import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  txt: PropTypes.string.isRequired,
};

function TimerButton(props) {
  const btnCls = classnames(
    'btn',
    'btn-default',
    { no: !props.isVisible }
  );

  return (
    <button
      className={btnCls}
      onClick={props.clickHandler}
    >
      {props.txt}
    </button>
  );
}

TimerButton.propTypes = propTypes;

export default TimerButton;
