const React = require('react');
const PropTypes = React.PropTypes;

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  hasStarted: PropTypes.bool.isRequired,
};

function PlayButton(props) {
  return (
    <button onClick={props.clickHandler} className={props.hasStarted ? 'no' : ''}>
      Play
    </button>
  );
}

PlayButton.propTypes = propTypes;

module.exports = PlayButton;
