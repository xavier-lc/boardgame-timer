const React = require('react');

const Timer = require('./Timer');
const TimerButton = require('./TimerButton');

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

      <TimerButton
        clickHandler={props.clickPlayHandler}
        isVisible={!props.isOn && props.start === null}
        txt="Play"
      />

      <TimerButton
        clickHandler={props.clickPauseHandler}
        isVisible={props.isOn && props.start !== null}
        txt="Pause"
      />

      <TimerButton
        clickHandler={props.clickResumeHandler}
        isVisible={!props.isOn && props.elapsed !== 0}
        txt="Resume"
      />
    </div>
  );
}

TotalTimer.propTypes = propTypes;

module.exports = TotalTimer;
