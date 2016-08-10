import React, { PropTypes } from 'react';

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  txt: PropTypes.string.isRequired,
};

function TimerButton(props) {
  return (
    <button onClick={props.clickHandler} className={props.isVisible ? '' : 'no'}>
      {props.txt}
    </button>
  );
}

TimerButton.propTypes = propTypes;

export default TimerButton;
