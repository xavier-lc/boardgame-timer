import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TimerButton from '../../lib/components/TimerButton.jsx';
import TimerControls from '../../lib/components/TimerControls.jsx';

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
 * Set up a TimerControls element for testing purposes
 *
 * @param {boolean} isOn
 * @param {?number} start
 * @param {?number} finish
 * @param {number} elapsed
 * @returns {ReactElement}
 */
function setup(isOn, start, finish, elapsed) {
  const props = {
    stopwatch: { isOn, start, finish, elapsed },
    clickPlayHandler: play,
    clickPauseHandler: pause,
    clickResumeHandler: resume,
    clickStopHandler: stop,
  };

  const renderer = TestUtils.createRenderer();

  renderer.render(<TimerControls {...props} />);

  return renderer.getRenderOutput();
}

describe('TimerControls', function () {
  it('should render PLAY button if not started', function () {
    const element = setup(false, null, null, 0);

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('');
    expect(element.props.children).toEqual([
      <TimerButton clickHandler={play} isVisible txt="Play" />,
      <TimerButton clickHandler={pause} isVisible={false} txt="Pause" />,
      <TimerButton clickHandler={resume} isVisible={false} txt="Resume" />,
      <TimerButton clickHandler={stop} isVisible={false} txt="Stop" />,
    ]);
  });

  it('should render PAUSE button if started', function () {
    const element = setup(true, 0, null, 0);

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('');
    expect(element.props.children).toEqual([
      <TimerButton clickHandler={play} isVisible={false} txt="Play" />,
      <TimerButton clickHandler={pause} isVisible txt="Pause" />,
      <TimerButton clickHandler={resume} isVisible={false} txt="Resume" />,
      <TimerButton clickHandler={stop} isVisible={false} txt="Stop" />,
    ]);
  });

  it('should render RESUME/STOP buttons if paused', function () {
    const element = setup(false, 0, null, 1);

    expect(element.type).toBe('div');
    expect(element.props.className).toBe('');
    expect(element.props.children).toEqual([
      <TimerButton clickHandler={play} isVisible={false} txt="Play" />,
      <TimerButton clickHandler={pause} isVisible={false} txt="Pause" />,
      <TimerButton clickHandler={resume} isVisible txt="Resume" />,
      <TimerButton clickHandler={stop} isVisible txt="Stop" />,
    ]);
  });

  it('should have "no" class if finished', function () {
    const element = setup(false, 0, 1, 1);

    expect(element.props.className).toBe('no');
  });
});
