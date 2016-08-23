import React, { PropTypes } from 'react';
import classnames from 'classnames';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  txt: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

function TimerButton(props) {
  const btnCls = classnames(
    'btn',
    {
      hidden: !props.isVisible,
      'btn-default': !props.className,
      [`${props.className}`]: props.className,
    }
  );

  return (
    <button
      className={btnCls}
      onClick={props.clickHandler}
    >
      {props.txt ?
        props.txt :
        <span className={`glyphicon glyphicon-${props.icon}`} />
      }
    </button>
  );
}

TimerButton.propTypes = propTypes;

export default TimerButton;
