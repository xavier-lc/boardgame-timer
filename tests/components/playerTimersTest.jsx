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
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
          offset: null,
          elapsed: 0,
        },
        2: {
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
          offset: null,
          elapsed: 0,
        },
      },
    },
    stopwatch: {
      isOn: isOn,
      start: start,
    },
    clickAddHandler: add,
    clickNextHandler: next,
  };
}

describe('PlayerTimers', function () {
  it('should render element with "add player" button if not started', function () {
    const testProps = getTestProps();
    const element = setup(testProps);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      [
        <Player
          key="1"
          {...testProps.players.data[1]}
          {...testProps.players.time[1]}
        />,
        <Player
          key="2"
          {...testProps.players.data[2]}
          {...testProps.players.time[2]}
        />,
      ],
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
    ]);
  });

  it('should render element with "next" button if started', function () {
    const testProps = getTestProps(true, 0);
    const element = setup(testProps);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      [
        <Player
          key="1"
          {...testProps.players.data[1]}
          {...testProps.players.time[1]}
        />,
        <Player
          key="2"
          {...testProps.players.data[2]}
          {...testProps.players.time[2]}
        />,
      ],
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
    ]);
  });

  it('should render element with no buttons if finished', function () {
    const testProps = getTestProps(false, 0);
    const element = setup(testProps);

    expect(element.type).toBe('div');
    expect(element.props.children).toEqual([
      [
        <Player
          key="1"
          {...testProps.players.data[1]}
          {...testProps.players.time[1]}
        />,
        <Player
          key="2"
          {...testProps.players.data[2]}
          {...testProps.players.time[2]}
        />,
      ],
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
    ]);
  });
});
