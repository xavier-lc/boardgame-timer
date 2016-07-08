const React = require('react');

function PlayButton(props) {
  return (
    <button onClick={props.clickHandler}>
      Play
    </button>
  );
}

module.exports = PlayButton;
