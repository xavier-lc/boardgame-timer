const React = require('react');

function PlayButton(props) {
  return (
    <button onClick={props.clickHandler} className={props.hasStarted ? 'no' : ''}>
      Play
    </button>
  );
}

module.exports = PlayButton;
