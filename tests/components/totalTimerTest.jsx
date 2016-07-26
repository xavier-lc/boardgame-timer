import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Timer from '../../lib/components/Timer.jsx';
import TimerControls from '../../lib/components/TimerControls.jsx';
import Statistics from '../../lib/components/Statistics.jsx';
import TotalTimer from '../../lib/components/TotalTimer.jsx';

/**
 * dummy button handler function
 */
function play() {
  console.log('play');
}

/**
 * dummy button handler function
 */
function pause() {
  console.log('pause');
}

/**
 * dummy button handler function
 */
function resume() {
  console.log('resume');
}

/**
 * dummy button handler function
 */
function stop() {
  console.log('stop');
}

/**
 * Set up a TotalTimer element for testing purposes
 *
 * @param {object} props
 * @returns {ReactElement}
 */
function setup(props) {
  const renderer = TestUtils.createRenderer();

  renderer.render(<TotalTimer {...props} />);

  return renderer.getRenderOutput();
}

describe('TotalTimer', function () {
  it('should render element', function () {
    const props = {
      stopwatch: {
        isOn: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        start: null,
        finish: null,
        offset: null,
        elapsed: 0,
      },
      clickPlayHandler: play,
      clickPauseHandler: pause,
      clickResumeHandler: resume,
      clickStopHandler: stop,
    };

    const element = setup(props);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <Timer
        hours={props.stopwatch.hours}
        minutes={props.stopwatch.minutes}
        seconds={props.stopwatch.seconds}
      />,
      <TimerControls {...props} />,
      <Statistics {...props.stopwatch} />,
    ]);
  });
});
