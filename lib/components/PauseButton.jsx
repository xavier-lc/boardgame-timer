const React = require('react');
const PropTypes = React.PropTypes;

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

function PauseButton(props) {
  return (
    <button onClick={props.clickHandler} className={props.isVisible ? '' : 'no'}>
      Pause
    </button>
  );
}

PauseButton.propTypes = propTypes;

module.exports = PauseButton;
