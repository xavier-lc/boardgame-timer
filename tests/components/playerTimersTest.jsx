import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TimerButton from './../../lib/components/TimerButton.jsx';
import Player from './../../lib/components/Player.jsx';
import PlayerTimers from './../../lib/components/PlayerTimers.jsx';

/**
 * dummy button handler function
 */
function add() {
  console.log('add');
}

/**
 * dummy button handler function
 */
function next() {
  console.log('next');
}

/**
 * dummy input handler function
 */
function change() {
  console.log('change');
}

function setup(props) {
  const renderer = TestUtils.createRenderer();

  renderer.render(<PlayerTimers {...props} />);

  return renderer.getRenderOutput();
}

function getTestProps(isOn = false, start = null) {
  return {
    players: {
      ids: [1, 2],
      data: {
        1: {
          name: 'Player #1',
          isActive: false,
        },
        2: {
          name: 'Player #2',
          isActive: false,
        },
      },
      time: {
        1: {
          elapsed: 0,
          offset: null,
        },
        2: {
          elapsed: 0,
          offset: null,
        },
      },
    },
    stopwatch: {
      isOn: isOn,
      start: start,
    },
    clickAddHandler: add,
    clickNextHandler: next,
    inputChangeHandler: change,
  };
}

describe('PlayerTimers', function () {
  it('should render element with "add player" button if not started', function () {
    const testProps = getTestProps();
    const element = setup(testProps);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <TimerButton
        clickHandler={testProps.clickAddHandler}
        isVisible
        txt="Add player"
      />,
      <TimerButton
        clickHandler={testProps.clickNextHandler}
        isVisible={false}
        txt="Next"
      />,
      [
        <Player
          id={1}
          key="1"
          isEditable
          {...testProps.players.data[1]}
          elapsed={testProps.players.time[1].elapsed}
          inputChangeHandler={testProps.inputChangeHandler}
        />,
        <Player
          id={2}
          key="2"
          isEditable
          {...testProps.players.data[2]}
          elapsed={testProps.players.time[2].elapsed}
          inputChangeHandler={testProps.inputChangeHandler}
        />,
      ],
    ]);
  });

  it('should render element with "next" button if started', function () {
    const testProps = getTestProps(true, 0);
    const element = setup(testProps);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <TimerButton
        clickHandler={testProps.clickAddHandler}
        isVisible={false}
        txt="Add player"
      />,
      <TimerButton
        clickHandler={testProps.clickNextHandler}
        isVisible
        txt="Next"
      />,
      [
        <Player
          id={1}
          key="1"
          isEditable={false}
          {...testProps.players.data[1]}
          elapsed={testProps.players.time[1].elapsed}
          inputChangeHandler={testProps.inputChangeHandler}
        />,
        <Player
          id={2}
          key="2"
          isEditable={false}
          {...testProps.players.data[2]}
          elapsed={testProps.players.time[2].elapsed}
          inputChangeHandler={testProps.inputChangeHandler}
        />,
      ],
    ]);
  });

  it('should render element with no buttons if finished', function () {
    const testProps = getTestProps(false, 0);
    const element = setup(testProps);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      <TimerButton
        clickHandler={testProps.clickAddHandler}
        isVisible={false}
        txt="Add player"
      />,
      <TimerButton
        clickHandler={testProps.clickNextHandler}
        isVisible={false}
        txt="Next"
      />,
      [
        <Player
          id={1}
          key="1"
          isEditable={false}
          {...testProps.players.data[1]}
          elapsed={testProps.players.time[1].elapsed}
          inputChangeHandler={testProps.inputChangeHandler}
        />,
        <Player
          id={2}
          key="2"
          isEditable={false}
          {...testProps.players.data[2]}
          elapsed={testProps.players.time[2].elapsed}
          inputChangeHandler={testProps.inputChangeHandler}
        />,
      ],
    ]);
  });
});
