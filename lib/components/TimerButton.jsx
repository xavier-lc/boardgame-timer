import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  txt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

function TimerButton(props) {
  const btnCls = classnames(
    'btn',
    {
      no: !props.isVisible,
      'btn-default': !props.className,
      [`${props.className}`]: props.className,
    }
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
