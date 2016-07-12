const React = require('react');

const Timer = require('./Timer');
const PlayButton = require('./PlayButton');
const PauseButton = require('./PauseButton');
const ResumeButton = require('./ResumeButton');

const propTypes = {
  start: React.PropTypes.number,
};

function TotalTimer(props) {
  return (
    <div>
      <Timer
        hours={props.hours}
        minutes={props.minutes}
        seconds={props.seconds}
      />

      <PlayButton
        clickHandler={props.clickPlayHandler}
        isVisible={!props.isOn && props.start === null}
      />

      <PauseButton
        clickHandler={props.clickPauseHandler}
        isVisible={props.isOn && props.start !== null}
      />

      <ResumeButton
        clickHandler={props.clickResumeHandler}
        isVisible={!props.isOn && props.elapsed !== 0}
      />
    </div>
  );
}

TotalTimer.propTypes = propTypes;

module.exports = TotalTimer;
