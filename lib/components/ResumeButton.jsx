const React = require('react');
const PropTypes = React.PropTypes;

const propTypes = {
  clickHandler: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

function ResumeButton(props) {
  return (
    <button onClick={props.clickHandler} className={props.isVisible ? '' : 'no'}>
      Resume
    </button>
  );
}

ResumeButton.propTypes = propTypes;

module.exports = ResumeButton;
