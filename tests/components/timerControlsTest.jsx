import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Timer from './../../lib/components/Timer.jsx';
import TimerButton from './../../lib/components/TimerButton.jsx';
import TimerControls from './../../lib/components/TimerControls.jsx';

/**
 * dummy button handler function
 */
function next() {
  console.log('next');
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
  const props = Object.assign({
    clickNextHandler: next,
    clickPauseHandler: pause,
    clickResumeHandler: resume,
    clickStopHandler: stop,
  }, { isOn, start, finish, elapsed });

  const renderer = TestUtils.createRenderer();

  renderer.render(<TimerControls {...props} />);

  return renderer.getRenderOutput();
}

describe('TimerControls', function () {
  it('should be hidden if not started', function () {
    const element = setup(false, null, null, 0);

    expect(element.type).toBe('div');
    expect(element.props.className).toInclude('hidden');
  });

  it('should render PAUSE/NEXT buttons if started', function () {
    const element = setup(true, 0, null, 0);

    expect(element.props.className).toExclude('hidden');
    expect(element.props.children).toEqual([
      <div className="controlBtn controlBtn--lft">
        <TimerButton
          clickHandler={pause}
          isVisible
          icon="pause"
          className="btn-info btn-block btn-lg"
        />
        <TimerButton
          clickHandler={resume}
          isVisible={false}
          icon="play"
          className="marginTop0 btn-info btn-block btn-lg"
        />
      </div>,
      <div className="flex1">
        <Timer
          elapsed={0}
          isOn
          isVisible
          className="centerHorVert"
        />
      </div>,
      <div className="controlBtn controlBtn--rgt">
        <TimerButton
          clickHandler={next}
          isVisible
          txt="Next"
          className="btn-primary btn-block btn-lg"
        />
        <TimerButton
          clickHandler={stop}
          isVisible={false}
          icon="stop"
          className="marginTop0 btn-warning btn-block btn-lg"
        />
      </div>,
    ]);
  });

  it('should render RESUME/STOP buttons if paused', function () {
    const element = setup(false, 0, null, 1);

    expect(element.props.className).toExclude('hidden');
    expect(element.props.children).toEqual([
      <div className="controlBtn controlBtn--lft">
        <TimerButton
          clickHandler={pause}
          isVisible={false}
          icon="pause"
          className="btn-info btn-block btn-lg"
        />
        <TimerButton
          clickHandler={resume}
          isVisible
          icon="play"
          className="marginTop0 btn-info btn-block btn-lg"
        />
      </div>,
      <div className="flex1">
        <Timer
          elapsed={1}
          isOn={false}
          isVisible
          className="centerHorVert"
        />
      </div>,
      <div className="controlBtn controlBtn--rgt">
        <TimerButton
          clickHandler={next}
          isVisible={false}
          txt="Next"
          className="btn-primary btn-block btn-lg"
        />
        <TimerButton
          clickHandler={stop}
          isVisible
          icon="stop"
          className="marginTop0 btn-warning btn-block btn-lg"
        />
      </div>,
    ]);
  });

  it('should have "hidden" class if finished', function () {
    const element = setup(false, 0, 1, 1);

    expect(element.props.className).toInclude('hidden');
  });
});
