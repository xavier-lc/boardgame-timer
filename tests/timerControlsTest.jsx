import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TimerButton from '../lib/components/TimerButton.jsx';
import TimerControls from '../lib/components/TimerControls.jsx';

function play() {
  console.log('play');
}

function pause() {
  console.log('pause');
}

function resume() {
  console.log('resume');
}

function stop() {
  console.log('stop');
}

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
  it('should render play button if not started', function () {
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

  it('should have "no" class if finished', function () {
    const element = setup(false, 0, 1, 1);

    expect(element.props.className).toBe('no');
  });
});
