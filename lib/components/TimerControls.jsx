const React = require('react');

const TimerButton = require('./TimerButton');

function TimerControls(props) {
  return (
    <div className={props.finish === null ? '' : 'no'}>
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

      <TimerButton
        clickHandler={props.clickStopHandler}
        isVisible={!props.isOn && props.elapsed !== 0}
        txt="Stop"
      />
    </div>
  );
}

module.exports = TimerControls;
