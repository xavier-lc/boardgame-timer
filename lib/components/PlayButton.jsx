const React = require('react');
const PropTypes = React.PropTypes;

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

function PlayButton(props) {
  return (
    <button onClick={props.clickHandler} className={props.isVisible ? '' : 'no'}>
      Play
    </button>
  );
}

PlayButton.propTypes = propTypes;

module.exports = PlayButton;
